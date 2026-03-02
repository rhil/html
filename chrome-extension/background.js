// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "save-to-github",
    title: "💾 Save to GitHub Notes",
    contexts: ["selection"],  // Only show when text is selected
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId !== "save-to-github") return;

  const selectedText = info.selectionText;
  const pageUrl = tab.url;
  const pageTitle = tab.title;
  const timestamp = new Date().toISOString();

  // Load settings from storage
  const { githubToken, githubOwner, githubRepo } = await chrome.storage.sync.get([
    "githubToken", "githubOwner", "githubRepo"
  ]);

  if (!githubToken || !githubOwner || !githubRepo) {
    chrome.notifications?.create({
      type: "basic",
      iconUrl: "icons/icon48.png",
      title: "Setup Required",
      message: "Please configure your GitHub settings in the extension popup.",
    });
    return;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${githubOwner}/${githubRepo}/dispatches`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${githubToken}`,
          "Accept": "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_type: "save-snippet",
          client_payload: {
            text: selectedText,
            url: pageUrl,
            title: pageTitle,
            timestamp: timestamp,
          },
        }),
      }
    );

    // 204 = success for dispatches
    const success = response.status === 204;

    chrome.action.setBadgeText({ text: success ? "✓" : "✗" });
    chrome.action.setBadgeBackgroundColor({ color: success ? "#4CAF50" : "#F44336" });

    // Clear badge after 3 seconds
    setTimeout(() => chrome.action.setBadgeText({ text: "" }), 3000);

  } catch (err) {
    console.error("Failed to dispatch:", err);
  }
});