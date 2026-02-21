# Bootstrap Framework

This project uses Bootstrap 5.3.2 as its primary CSS framework for responsive, mobile-first design.

## Why Bootstrap?

Bootstrap was chosen for several key reasons:

✅ **Mobile-First** - Designed for mobile devices from the ground up  
✅ **Responsive Grid** - Flexible 12-column grid system  
✅ **Pre-built Components** - Cards, lists, buttons, and more  
✅ **Browser Compatibility** - Works across all modern browsers  
✅ **No Build Process** - Can be used via CDN  
✅ **Large Community** - Extensive documentation and support  

## Implementation

### CDN Links

All pages include Bootstrap via CDN:

```html
<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

<!-- Bootstrap 5 JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

## Key Components Used

### Grid System

The responsive grid adapts to different screen sizes:

```html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-md-10 col-lg-8">
      <!-- Content -->
    </div>
  </div>
</div>
```

**Breakpoints:**
- `col-12` - Mobile (< 768px): 100% width
- `col-md-10` - Tablet (≥ 768px): 83% width
- `col-lg-8` - Desktop (≥ 992px): 66% width

### Card Component

Cards provide a flexible container for content:

```html
<div class="card main-card">
  <div class="card-header py-3">
    <h1 class="h3 mb-0">
      <i class="bi bi-folder2-open"></i> Title
    </h1>
  </div>
  <div class="card-body">
    <!-- Content -->
  </div>
</div>
```

### List Groups

Used for displaying dynamic content:

```html
<ul class="list-group list-group-flush">
  <li class="list-group-item">
    <a href="...">
      <i class="bi bi-folder"></i>
      Item Name
    </a>
  </li>
</ul>
```

### Loading Spinner

Bootstrap spinner for loading states:

```html
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

### Alerts

For error messages and notifications:

```html
<div class="alert alert-warning" role="alert">
  <i class="bi bi-exclamation-triangle"></i>
  Error message
</div>
```

## Custom Styling

While Bootstrap provides the foundation, custom CSS is used for the dark theme:

```css
body {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

.main-card {
  background: #111827;
  border: 1px solid #334155;
  border-radius: 14px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.list-group-item {
  background: #1e293b;
  border-color: #334155;
  color: #e2e8f0;
  transition: all 0.3s ease;
}

.list-group-item:hover {
  background: #334155;
  transform: translateX(5px);
}
```

## Bootstrap Icons

Icons enhance the visual appeal and usability:

- `bi-folder2-open` - Folder listings
- `bi-folder` - Individual folders
- `bi-file-earmark-text` - HTML files
- `bi-robot` - AI section
- `bi-book` - Blinkist section
- `bi-exclamation-triangle` - Warnings/errors

## Utility Classes

Bootstrap utilities used throughout:

- `mb-0`, `mb-3` - Margin bottom
- `py-3`, `py-4` - Padding vertical
- `text-center` - Center text
- `d-none` - Hide element
- `justify-content-center` - Center flex items

## Mobile Optimization

Bootstrap's mobile-first approach ensures:

1. **Touch-friendly targets** - Buttons and links are appropriately sized
2. **Readable text** - Font sizes scale appropriately
3. **Responsive images** - Images scale with viewport
4. **Flexible layouts** - Content reflows for small screens
5. **No horizontal scrolling** - Content fits viewport width

## Browser Support

Bootstrap 5 supports:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
