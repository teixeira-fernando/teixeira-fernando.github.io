---
title: Getting Started with Jekyll
date: 2024-01-15
description: A beginner's guide to creating static websites with Jekyll
tags: [Jekyll, Web Development, Static Sites]
---

# Getting Started with Jekyll

Jekyll is a powerful static site generator that transforms plain text into beautiful static websites. In this article, we'll explore the basics of Jekyll and how to get started.

## Why Jekyll?

- **Simple**: No databases, just plain text files
- **Fast**: Static HTML means lightning-fast page loads
- **Secure**: No server-side code means fewer security vulnerabilities
- **Version Control**: Your entire site lives in Git

## Getting Started

To create a new Jekyll site, simply run:

```bash
gem install jekyll bundler
jekyll new my-site
cd my-site
bundle exec jekyll serve
```

Your site will be available at `http://localhost:4000`.

## Writing Content

Create a new post in the `_posts` directory with the naming format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: My First Post
date: 2024-01-15
---

Content goes here!
```

## Next Steps

- Customize your theme
- Add plugins for extra functionality
- Deploy to GitHub Pages

Happy coding!
