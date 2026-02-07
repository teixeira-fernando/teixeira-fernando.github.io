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

{% assign external_articles = site.data.external_articles | sort: 'date' | reverse %}
{% if external_articles and external_articles.size > 0 %}
<section class="external-articles" style="margin-top: 4rem;">

  <div class="articles-grid">
    {% for external in external_articles %}
    <article class="article-item">
      {% if external.date %}
      <time class="article-date">{{ external.date | date: "%b %d, %Y" }}</time>
      {% endif %}
      <div class="article-content-wrapper">
        <h2 class="article-title">
          <a href="{{ external.url }}" target="_blank" rel="noopener">{{ external.title }}</a>
        </h2>
        {% if external.publication %}
        <p class="article-publication" style="font-size: 0.95rem; color: #475569; margin: 0.25rem 0 0.75rem;">{{ external.publication }}</p>
        {% endif %}
        {% if external.description %}
        <p class="article-excerpt">{{ external.description }}</p>
        {% endif %}
        {% if external.tags %}
        <div class="article-tags">
          {% for tag in external.tags %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>
{% endif %}

