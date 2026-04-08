# Personal Website

A minimalist, fast, and SEO-friendly Jekyll starter for creating a personal website. Designed for performance, accessibility, and ease of use.

## Features

✨ **Performance-Focused**
- Static HTML generation for lightning-fast load times
- Minimal CSS, no unnecessary JavaScript
- Optimized for Core Web Vitals

🔍 **SEO Best Practices**
- Jekyll SEO Tag plugin for meta tags
- Open Graph and Twitter Card support
- Automatic sitemap.xml generation
- robots.txt included
- Semantic HTML throughout
- Alt text on all images
- Canonical URLs

📱 **Mobile-Friendly & Accessible**
- Responsive design that works on all devices
- ARIA labels for screen readers
- Keyboard navigation support
- High color contrast
- Focus indicators

📝 **Easy Content Management**
- Write content in Markdown
- Three collections: Articles, Talks, Projects
- Simple front matter configuration
- Automatic listing pages

🎨 **Clean, Minimalist Design**
- Top navigation: About, Talks, Articles, Projects
- Professional and distraction-free

## Quick Start

### Prerequisites

- Ruby 2.7+ ([installation guide](https://www.ruby-lang.org/en/documentation/installation/))
- RubyGems
- GCC and Make (for compiling native extensions)
- Bundler: `gem install bundler`

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   bundle config set --local path 'vendor/bundle'
   bundle install
   ```

3. Update `_config.yml` with your information:
   - Site title and description
   - Your name and contact info
   - Social media handles
   - Site URL

4. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

5. Visit `http://localhost:4000` in your browser

## Customization

### Adding Content

#### Articles
Create a new file in `_articles/` with the following front matter:
```markdown
---
title: Your Article Title
date: 2024-01-15
description: A brief description
banner_image: /assets/images/articles/your-article-cover.svg
---

Your content here...
```
If `banner_image` is omitted, the site falls back to `/assets/images/articles/default-article.svg` for article cards.

#### Talks
Create a new file in `_talks/`:
```markdown
---
title: Your Talk Title
date: 2024-01-15
event: Conference Name
location: City, State
description: Talk description
---

Your content here...
```

#### Projects
Create a new file in `_projects/`:
```markdown
---
title: Project Name
date: 2024-01-15
description: Project description
url_external: https://github.com/username/project
---

Your content here...
```

### Styling

All styles are in `assets/css/main.css`. The CSS is intentionally minimal and easy to customize.

### Updating About Page

Edit `about.md` to tell your story.

## Deployment

### GitHub Pages

1. Push your repository to GitHub
2. Go to Settings → Pages
3. Select the branch to deploy (usually `main`)
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Custom Domain

To use a custom domain:
1. Add a `CNAME` file with your domain name
2. Configure your DNS settings
3. Update the `url` in `_config.yml`

## Project Structure

```
.
├── _articles/          # Article collection
├── _talks/             # Talks collection
├── _projects/          # Projects collection
├── _layouts/           # Page layouts
│   └── default.html    # Main layout
├── _includes/          # Reusable components
│   ├── head.html       # SEO meta tags
│   ├── header.html     # Navigation
│   └── footer.html     # Footer
├── assets/
│   ├── css/
│   │   └── main.css    # All styles
│   └── images/
│       └── social-preview.svg
├── _config.yml         # Jekyll configuration
├── Gemfile             # Ruby dependencies
├── index.md            # Home page
├── about.md            # About page
├── articles.md         # Articles listing
├── talks.md            # Talks listing
├── projects.md         # Projects listing
└── robots.txt          # SEO robots file
```

## SEO Configuration

The site uses `jekyll-seo-tag` for automatic SEO optimization. Configure in `_config.yml`:

- **title**: Your site title
- **description**: Site description (used in meta tags)
- **url**: Your site's URL
- **author**: Your name and social handles
- **Social preview image**: Place in `assets/images/`

Each page can override these with front matter:
```yaml
---
title: Page Title
description: Page description
---
```

## Performance Tips

1. Keep images optimized (use tools like ImageOptim)
2. Avoid adding heavy JavaScript libraries
3. Test with Lighthouse for performance scores
4. Consider using a CDN for assets

## Accessibility

This starter follows WCAG 2.1 Level AA guidelines:
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text on images
- Sufficient color contrast
- Keyboard navigation
- Focus indicators
- ARIA labels where needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Found a bug or have a suggestion? Please open an issue or submit a pull request!

## License

MIT License - feel free to use this for your own personal website!

---

**Happy blogging! 🚀**
