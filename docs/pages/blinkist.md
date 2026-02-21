# Blinkist Pages

The Blinkist section contains pages related to book summaries and philosophy topics.

## Location

`/blinkist/` directory in the repository

## Pages

### index.html

The main index page for the Blinkist section. It automatically lists all HTML pages in the `/blinkist/` folder using the GitHub API.

**Features:**
- Dynamic page listing
- Book icon (📚) in header
- Dark theme matching the main site
- Mobile-responsive layout

**URL:** [/blinkist/index.html](../../blinkist/index.html)

### philosophen-uebersicht.html

An overview page about philosophers (Philosophen-Übersicht in German).

**URL:** [/blinkist/philosophen-uebersicht.html](../../blinkist/philosophen-uebersicht.html)

## Adding New Blinkist Pages

To add a new page to the Blinkist section:

1. Create your HTML file in the `/blinkist/` directory
2. Name it descriptively (e.g., `book-summary-atomic-habits.html`)
3. Commit and push to GitHub
4. The index page will automatically detect and list it

Example:

```bash
# Create new page
touch blinkist/book-summary-thinking-fast-slow.html

# Edit the file with your content
code blinkist/book-summary-thinking-fast-slow.html

# Commit and push
git add blinkist/book-summary-thinking-fast-slow.html
git commit -m "Add Thinking Fast and Slow summary"
git push
```

## Styling

All Blinkist pages should follow the Bootstrap 5 template used throughout the project for consistency.

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

## Content Suggestions

Blinkist pages typically contain:

- Book summaries and key insights
- Author information
- Main concepts and takeaways
- Practical applications
- Related books or topics

## Navigation

Users can navigate to Blinkist pages from:
- Main index page → Blinkist folder → Specific page
- Direct URL: `https://rhil.github.io/html/blinkist/[page-name].html`

## Icon

The Blinkist section uses the Bootstrap Icon `bi-book` (📚) to represent books and reading.

## Historical Note

According to the original README, the Blinkist starter page was the first page created in this project, and the repository root initially redirected to it.
