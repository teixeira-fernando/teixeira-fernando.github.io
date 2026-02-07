# Copilot Instructions for AI Agents

## Project Overview
- This is a minimalist, fast, and SEO-friendly Jekyll site for personal websites.
- Content is managed via Markdown files in three main collections: `_articles/`, `_talks/`, and `_projects/`.
- The site is designed for performance, accessibility (WCAG 2.1 AA), and SEO best practices.

## Key Files & Structure
- `_config.yml`: Main Jekyll configuration (site metadata, plugins, collections).
- `Gemfile`: Ruby dependencies (notably `jekyll` and `jekyll-seo-tag`).
- `assets/css/main.css`: All site styling; keep CSS minimal.
- `_layouts/default.html`: Main HTML layout for all pages.
- `_includes/`: Reusable HTML components (head, header, footer).
- `about.md`, `articles.md`, `projects.md`, `talks.md`, `index.md`: Main content pages.
- `robots.txt`: SEO robots file.

## Content Patterns
- Add new articles, talks, or projects by creating Markdown files in their respective folders with YAML front matter (see below for templates).
- Use semantic HTML and provide alt text for all images.
- Override SEO metadata per page using front matter (`title`, `description`).

### Example Front Matter
**Article:**
```
---
title: My Article Title
date: 2024-01-15
description: Brief summary
---
```
**Talk:**
```
---
title: Talk Title
date: 2024-01-15
event: Event Name
location: City, State
description: Description
---
```
**Project:**
```
---
title: Project Name
date: 2024-01-15
description: Description
url_external: https://github.com/username/project
---
```

## Developer Workflows
- **Install dependencies:** `bundle install`
- **Run locally:** `bundle exec jekyll serve` (site at http://localhost:4000)
- **Deploy:** Push to GitHub and use GitHub Pages, or configure a custom domain with a `CNAME` file.
- **Update site info:** Edit `_config.yml` for site-wide settings.
- **Add content:** Place new Markdown files in the appropriate collection folder.
- **Customize styles:** Edit `assets/css/main.css`.

## Project Conventions
- Minimal CSS, no unnecessary JavaScript.
- All content in Markdown; no HTML in content files unless necessary.
- Use ARIA labels and semantic HTML for accessibility.
- Keep images optimized and small.

## Integration Points
- Uses `jekyll-seo-tag` for SEO; configure in `_config.yml`.
- No external JS frameworks or build tools.
- GitHub Pages for deployment.

## References
- See `README.md` for detailed setup, customization, and deployment instructions.
- Example content and structure in `_articles/`, `_talks/`, `_projects/`.
- All reusable components in `_includes/`.

---

For any unclear or missing conventions, review `README.md` or ask for clarification.
