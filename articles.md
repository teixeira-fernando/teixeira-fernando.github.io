---
layout: default
title: Articles
description: Technical articles and blog posts
---

<header style="margin-bottom: 3rem;">
  <h1>Articles</h1>
  <p style="font-size: 1.125rem; color: #64748b; margin-top: 1rem;">Writing about code, performance, and soft skills.</p>
</header>

{% assign internal_articles = site.articles %}
{% assign empty_array = "" | split: "," %}
{% assign external_articles = site.data.external_articles | default: empty_array %}
{% assign all_articles = internal_articles | concat: external_articles | sort: 'date' | reverse %}

{% if all_articles.size > 0 %}
<div class="articles-grid">
  {% for article in all_articles %}
  {% if article.url contains '://' %}
    {% assign article_url = article.url %}
    {% assign article_is_external = true %}
  {% else %}
    {% assign article_url = article.url | relative_url %}
    {% assign article_is_external = false %}
  {% endif %}
  <article class="article-item">
    <a href="{{ article_url }}"{% if article_is_external %} target="_blank" rel="noopener noreferrer"{% endif %} class="article-card-link" aria-label="Read {{ article.title }}{% if article_is_external %} (opens in new window){% endif %}">
      <time class="article-date">{{ article.date | date: "%b %d, %Y" }}</time>
      <h2 class="article-title">{{ article.title }}</h2>
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
      <span class="article-cta">Read article</span>
    </a>
  </article>
  {% endfor %}
</div>
{% else %}
<p>No articles published yet. Check back soon!</p>
{% endif %}
