# GitHub API Integration

The project uses the GitHub API to dynamically load and display content from the repository.

## Overview

Instead of manually maintaining lists of pages and folders, the index pages automatically fetch this information from GitHub, ensuring the content is always up-to-date.

## API Endpoint

All index pages use the GitHub Contents API:

```javascript
const owner = "rhil";
const repo = "html";
const branch = "main";
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents?ref=${branch}`;
```

## How It Works

### 1. Main Index Page

Lists all subdirectories in the repository:

```javascript
async function loadFolders() {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents?ref=${branch}`;
  
  const response = await fetch(apiUrl);
  const items = await response.json();
  
  const folders = items
    .filter((item) => item.type === "dir" && !item.name.startsWith("."))
    .sort((a, b) => a.name.localeCompare(b.name));
  
  // Display folders...
}
```

### 2. Subfolder Index Pages

Lists all HTML files in a specific folder:

```javascript
async function loadPages() {
  const folder = "ai"; // or "blinkist"
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${folder}?ref=${branch}`;
  
  const response = await fetch(apiUrl);
  const items = await response.json();
  
  const pages = items
    .filter(
      (item) =>
        item.type === "file" &&
        /\.html?$/i.test(item.name) &&
        item.name.toLowerCase() !== "index.html"
    )
    .sort((a, b) => a.name.localeCompare(b.name));
  
  // Display pages...
}
```

## API Response Structure

The GitHub API returns an array of objects:

```json
[
  {
    "name": "ai",
    "path": "ai",
    "type": "dir",
    "size": 0,
    "url": "https://api.github.com/repos/rhil/html/contents/ai?ref=main",
    "html_url": "https://github.com/rhil/html/tree/main/ai",
    "download_url": null
  },
  {
    "name": "index.html",
    "path": "index.html",
    "type": "file",
    "size": 3456,
    "url": "https://api.github.com/repos/rhil/html/contents/index.html?ref=main",
    "html_url": "https://github.com/rhil/html/blob/main/index.html",
    "download_url": "https://raw.githubusercontent.com/rhil/html/main/index.html"
  }
]
```

## Filtering Logic

### Folders

```javascript
const folders = items.filter((item) => 
  item.type === "dir" &&           // Only directories
  !item.name.startsWith(".")       // Exclude hidden folders
);
```

### HTML Files

```javascript
const pages = items.filter((item) =>
  item.type === "file" &&                    // Only files
  /\.html?$/i.test(item.name) &&            // Only .html/.htm files
  item.name.toLowerCase() !== "index.html"  // Exclude index.html
);
```

## Error Handling

Graceful error handling ensures a good user experience:

```javascript
try {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("GitHub API request failed");
  }
  // Process data...
} catch (error) {
  // Show error message
  list.innerHTML = `
    <li class="list-group-item">
      <div class="alert alert-warning mb-0" role="alert">
        <i class="bi bi-exclamation-triangle"></i>
        Konnte Ordnerliste nicht laden.
      </div>
    </li>
  `;
}
```

## Loading States

Bootstrap spinner shows while data is loading:

```javascript
// Before fetch
<div id="loading" class="text-center py-4">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

// After fetch
loading.classList.add("d-none");
list.classList.remove("d-none");
```

## Rate Limiting

GitHub API has rate limits:

- **Unauthenticated requests**: 60 requests per hour per IP
- **Authenticated requests**: 5,000 requests per hour

For this project, unauthenticated requests are sufficient since:
- Pages are cached by browsers
- GitHub Pages serves static content
- API calls only happen on page load

## Benefits

✅ **Always Up-to-Date** - No manual updates needed  
✅ **Automatic Discovery** - New pages appear automatically  
✅ **Centralized Source** - GitHub is the single source of truth  
✅ **No Build Process** - Works directly in the browser  
✅ **Version Control** - Content tied to specific branch  

## Limitations

⚠️ **Requires Internet** - Won't work offline  
⚠️ **Rate Limits** - Limited to 60 requests/hour without auth  
⚠️ **Public Repos Only** - API endpoint assumes public repository  

## Alternative Approaches

If you need offline support or want to avoid API calls:

1. **Static JSON file** - Generate a manifest file during build
2. **Server-side rendering** - Use Jekyll or similar
3. **Manual lists** - Hardcode the links (not recommended)

## Testing Locally

To test API integration locally:

```bash
# Start a local server
python -m http.server 8000

# Open in browser
open http://localhost:8000
```

The API calls will work the same as on GitHub Pages since they're fetching from the live repository.

## Resources

- [GitHub REST API Documentation](https://docs.github.com/en/rest)
- [Contents API Reference](https://docs.github.com/en/rest/repos/contents)
- [Rate Limiting](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting)
