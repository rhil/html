// Load saved settings on open
chrome.storage.sync.get(["githubToken", "githubOwner", "githubRepo"], (data) => {
  document.getElementById("githubToken").value = data.githubToken || "";
  document.getElementById("githubOwner").value = data.githubOwner || "";
  document.getElementById("githubRepo").value  = data.githubRepo  || "";
});

// Save settings
document.getElementById("save").addEventListener("click", () => {
  const githubToken = document.getElementById("githubToken").value.trim();
  const githubOwner = document.getElementById("githubOwner").value.trim();
  const githubRepo  = document.getElementById("githubRepo").value.trim();

  chrome.storage.sync.set({ githubToken, githubOwner, githubRepo }, () => {
    const status = document.getElementById("status");
    status.textContent = "✅ Settings saved!";
    setTimeout(() => (status.textContent = ""), 2000);
  });
});