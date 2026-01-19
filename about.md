---
layout: default
title: About
description: Learn more about me and what I do
---

# About Me

Hi, I'm {{ site.author.name }}! Welcome to my personal website.

## What I Do

I'm passionate about technology, learning, and sharing knowledge with others. This site is where I document my journey through articles, talks, and projects.

## Get in Touch

Feel free to reach out to me:

{% if site.author.email %}
- Email: [{{ site.author.email }}](mailto:{{ site.author.email }})
{% endif %}
{% if site.author.github %}
- GitHub: [@{{ site.author.github }}](https://github.com/{{ site.author.github }})
{% endif %}
{% if site.author.twitter %}
- Twitter: [@{{ site.author.twitter }}](https://twitter.com/{{ site.author.twitter }})
{% endif %}

## About This Site

This website is built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/). It's designed to be fast, accessible, and easy to maintain.
