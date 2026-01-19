---
layout: default
title: Articles
description: Technical articles and blog posts
---

# Articles

{% assign articles = site.articles | sort: 'date' | reverse %}

{% if articles.size > 0 %}
<ul class="content-list">
  {% for article in articles %}
  <li class="content-item">
    <h2><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h2>
    {% if article.date %}
    <p class="content-meta">Published on {{ article.date | date: "%B %d, %Y" }}</p>
    {% endif %}
    {% if article.description %}
    <p>{{ article.description }}</p>
    {% elsif article.excerpt %}
    <p>{{ article.excerpt | strip_html | truncatewords: 50 }}</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No articles published yet. Check back soon!</p>
{% endif %}
