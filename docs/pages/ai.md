# AI Pages

The AI section contains pages related to artificial intelligence topics and resources.

## Location

`/ai/` directory in the repository

## Pages

### index.html

The main index page for the AI section. It automatically lists all HTML pages in the `/ai/` folder using the GitHub API.

**Features:**
- Dynamic page listing
- Robot icon (🤖) in header
- Dark theme matching the main site
- Mobile-responsive layout

**URL:** [/ai/index.html](../../ai/index.html)

### links.html

A collection of AI-related links and resources.

**URL:** [/ai/links.html](../../ai/links.html)

## Adding New AI Pages

To add a new page to the AI section:

1. Create your HTML file in the `/ai/` directory
2. Name it descriptively (e.g., `machine-learning.html`)
3. Commit and push to GitHub
4. The index page will automatically detect and list it

Example:

```bash
# Create new page
touch ai/machine-learning.html

# Edit the file with your content
code ai/machine-learning.html

# Commit and push
git add ai/machine-learning.html
git commit -m "Add machine learning page"
git push
```

## Styling

All AI pages should follow the Bootstrap 5 template used throughout the project for consistency.

### Template Structure

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Page Title</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  </head>
  <body>
    <div class="container">
      <!-- Your content here -->
    </div>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

## Navigation

Users can navigate to AI pages from:
- Main index page → AI folder → Specific page
- Direct URL: `https://rhil.github.io/html/ai/[page-name].html`

## Icon

The AI section uses the Bootstrap Icon `bi-robot` (🤖) to represent artificial intelligence topics.
