---
layout: default
title: Articles
description: Technical articles and blog posts
---

<header style="margin-bottom: 3rem;">
  <h1>Articles</h1>
  <p style="font-size: 1.125rem; color: #64748b; margin-top: 1rem;">Writing about code, performance, and soft skills.</p>
</header>

{% assign articles = site.articles | sort: 'date' | reverse %}

{% if articles.size > 0 %}
<div class="articles-grid">
  {% for article in articles %}
  <article class="article-item">
    <time class="article-date">{{ article.date | date: "%b %d, %Y" }}</time>
    <div class="article-content-wrapper">
      <h2 class="article-title"><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h2>
      {% if article.description %}
      <p class="article-excerpt">{{ article.description }}</p>
      {% elsif article.excerpt %}
      <p class="article-excerpt">{{ article.excerpt | strip_html | truncatewords: 30 }}</p>
      {% endif %}
      {% if article.tags %}
      <div class="article-tags">
        {% for tag in article.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </article>
  {% endfor %}
</div>
{% else %}
<p>No articles published yet. Check back soon!</p>
{% endif %}
