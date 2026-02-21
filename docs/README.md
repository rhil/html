# HTML Project Documentation

> A collection of HTML pages with Bootstrap framework and GitHub API integration

## Overview

This project contains a set of responsive HTML pages built with Bootstrap 5, designed to work seamlessly on both mobile and desktop devices. The pages dynamically load content from GitHub repositories using the GitHub API.

## Features

✅ **Mobile-First Design** - Built with Bootstrap 5 for excellent mobile responsiveness  
✅ **Dark Theme** - Modern dark color scheme with gradient backgrounds  
✅ **Dynamic Content** - Automatically loads folders and pages from GitHub  
✅ **Bootstrap Icons** - Visual enhancement with icon library  
✅ **Loading States** - Spinner animations for better UX  
✅ **Error Handling** - Graceful fallbacks when API calls fail  

## Project Structure

```
html/
├── index.html              # Main landing page (lists subfolders)
├── ai/
│   ├── index.html         # AI pages index
│   └── links.html         # AI links page
├── blinkist/
│   ├── index.html         # Blinkist pages index
│   └── philosophen-uebersicht.html
└── docs/                  # Docsify documentation (this site)
    ├── index.html
    ├── README.md
    └── _sidebar.md
```

## Quick Start

### View the Pages

- **Main Index**: [index.html](../index.html)
- **AI Pages**: [ai/index.html](../ai/index.html)
- **Blinkist Pages**: [blinkist/index.html](../blinkist/index.html)

### Local Development

Simply open any `index.html` file in your browser. No build process required!

```bash
# Open main page
open index.html

# Or use a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

## Technologies Used

- **Bootstrap 5.3.2** - CSS framework for responsive design
- **Bootstrap Icons** - Icon library
- **GitHub API** - Dynamic content loading
- **Docsify** - Documentation site generator (this site)

## Mobile Optimization

All pages use Bootstrap's responsive grid system with breakpoints:

- **Mobile** (< 768px): Full width with padding
- **Tablet** (768px - 992px): 83% width
- **Desktop** (> 992px): 66% width

## GitHub Pages

This site is hosted on GitHub Pages and automatically updates when you push to the main branch.

**Live URL**: `https://rhil.github.io/html/`

## Contributing

Feel free to add new pages or improve existing ones. All pages follow the same Bootstrap template structure for consistency.

## License

Open source project - feel free to use and modify!
