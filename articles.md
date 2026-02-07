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
  {% assign article_image = article.banner_image | default: article.image | default: '/assets/images/articles/default-article.svg' %}
  {% if article_image contains '://' %}
    {% assign article_image_url = article_image %}
  {% else %}
    {% assign article_image_url = article_image | relative_url %}
  {% endif %}
  <article class="article-item">
    <a href="{{ article.url | relative_url }}" class="article-card-link" aria-label="Read {{ article.title }}">
      <div class="article-visual">
        <img src="{{ article_image_url }}" alt="{{ article.title }} cover image">
      </div>
      <div class="article-body">
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
      </div>
    </a>
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
    {% assign external_image = external.image | default: '/assets/images/articles/default-article.svg' %}
    {% if external_image contains '://' %}
      {% assign external_image_url = external_image %}
    {% else %}
      {% assign external_image_url = external_image | relative_url %}
    {% endif %}
    <article class="article-item">
      <a href="{{ external.url }}" target="_blank" rel="noopener noreferrer" class="article-card-link" aria-label="Read {{ external.title }}">
        <div class="article-visual">
          <img src="{{ external_image_url }}" alt="{{ external.title }} external cover image">
        </div>
        <div class="article-body">
          {% if external.date %}
          <time class="article-date">{{ external.date | date: "%b %d, %Y" }}</time>
          {% endif %}
          <h2 class="article-title">{{ external.title }}</h2>
          {% if external.publication %}
          <p class="article-publication">{{ external.publication }}</p>
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
      </a>
    </article>
    {% endfor %}
  </div>
</section>
{% endif %}

