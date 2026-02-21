# Project Structure

This document explains the organization and structure of the HTML project.

## Directory Layout

```
html/
├── index.html              # Main landing page
├── README.md              # Project README
├── ai/                    # AI-related pages
│   ├── index.html        # AI pages index
│   └── links.html        # AI links collection
├── blinkist/             # Blinkist-related pages
│   ├── index.html        # Blinkist pages index
│   └── philosophen-uebersicht.html
└── docs/                 # Documentation (Docsify)
    ├── index.html        # Docsify entry point
    ├── README.md         # Documentation home
    ├── _sidebar.md       # Navigation sidebar
    ├── getting-started/  # Getting started guides
    ├── pages/           # Page documentation
    └── development/     # Development guides
```

## Page Types

### Index Pages

Each folder contains an `index.html` that serves as the landing page for that section:

- **Main Index** (`/index.html`) - Lists all available subfolders
- **AI Index** (`/ai/index.html`) - Lists all AI-related pages
- **Blinkist Index** (`/blinkist/index.html`) - Lists all Blinkist pages

### Content Pages

Individual HTML pages containing specific content:

- `ai/links.html` - Collection of AI-related links
- `blinkist/philosophen-uebersicht.html` - Philosophy overview

## Common Structure

All index pages follow a consistent Bootstrap 5 template:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Bootstrap CSS -->
    <!-- Bootstrap Icons -->
    <!-- Custom styles -->
  </head>
  <body>
    <div class="container">
      <div class="card main-card">
        <div class="card-header">
          <!-- Page title -->
        </div>
        <div class="card-body">
          <!-- Dynamic content loaded via GitHub API -->
        </div>
      </div>
    </div>
    <!-- Bootstrap JS -->
    <!-- Custom JavaScript -->
  </body>
</html>
```

## GitHub API Integration

Index pages use the GitHub API to dynamically load content:

```javascript
const owner = "rhil";
const repo = "html";
const branch = "main";
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/...`;
```

This allows pages to automatically update when new files are added to the repository.

## Adding New Pages

To add a new page:

1. Create a new folder or add to an existing one
2. Create your HTML file
3. The index page will automatically detect and list it
4. Update documentation if needed

## Styling Conventions

All pages use a consistent dark theme:

- Background: `#0f172a` to `#1e293b` gradient
- Cards: `#111827` background
- Borders: `#334155`
- Text: `#e2e8f0` (primary), `#cbd5e1` (secondary)
- Links: `#93c5fd`

## Mobile Responsiveness

Bootstrap's grid system ensures mobile compatibility:

```css
.col-12        /* Mobile: full width */
.col-md-10     /* Tablet: 83% width */
.col-lg-8      /* Desktop: 66% width */
```
