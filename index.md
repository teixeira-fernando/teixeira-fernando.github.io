---
layout: default
title: Home
---

<div class="intro">
  <div class="intro-text">
    <h1>Software Engineer in Test, Speaker, and <span class="highlight">Lifelong Learner</span>.</h1>
    <p>I'm {{ site.author.name }}, a Software Engineer in Test with over 9 years of experience developing test automation solutions and test strategies for different projects. Active contributor in QA communities, conference speaker, and author of technical articles.</p>
  </div>
  <div class="intro-media">
    <img src="{{ '/images/new-profile-squared.webp' | relative_url }}" alt="Portrait of {{ site.author.name }}" class="intro-profile-image">
  </div>
</div>

<div class="section-preview">
  <h2>
    <span>Recent Talks</span>
    <a href="{{ '/talks' | relative_url }}" class="view-all-link">View all talks</a>
  </h2>
{% assign latest_talks = site.talks | sort: 'date' | reverse | limit: 2 %}
{% if latest_talks.size > 0 %}
  <div class="talks-list">
    {% for talk in latest_talks %}
    <article class="talk-card">
      <a
        class="talk-card-overlay-link"
        href="{{ talk.url | relative_url }}"
        aria-label="Read talk: {{ talk.title }}"
      ></a>

      <header class="talk-card-header">
        <div class="talk-card-title-row">
          <h3 class="talk-card-title">{{ talk.title }}</h3>
          {% if talk.date %}
          <time class="content-meta">{{ talk.date | date: "%B %Y" }}</time>
          {% endif %}
        </div>

        {% if talk.event %}
        <p class="talk-event">{{ talk.event }}</p>
        {% endif %}
      </header>

      {% if talk.excerpt %}
      <p class="talk-description">{{ talk.excerpt | strip_html | truncatewords: 50 }}</p>
      {% elsif talk.description %}
      <p class="talk-description">{{ talk.description }}</p>
      {% endif %}

      {% if talk.video_url or talk.slides_url %}
      <div class="talk-links">
        {% if talk.video_url %}
        <a href="{{ talk.video_url }}" target="_blank" rel="noopener noreferrer">Watch Video</a>
        {% endif %}
        {% if talk.slides_url %}
        <a href="{{ talk.slides_url }}" target="_blank" rel="noopener noreferrer">View Slides</a>
        {% endif %}
      </div>
      {% endif %}
    </article>
    {% endfor %}
  </div>
{% else %}
  <p>No talks yet. Check back soon!</p>
{% endif %}
</div>

<div class="section-preview">
  <h2>
    <span>Latest Articles</span>
    <a href="{{ '/articles' | relative_url }}" class="view-all-link">View all articles</a>
  </h2>
{% assign latest_articles = site.articles | sort: 'date' | reverse | limit: 3 %}
{% if latest_articles.size > 0 %}
  <div class="articles-grid">
    {% for article in latest_articles %}
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
          {% if article.date %}
          <time class="article-date">{{ article.date | date: "%b %d, %Y" }}</time>
          {% endif %}
          <h3 class="article-title">{{ article.title }}</h3>
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
  <p>No articles yet. Check back soon!</p>
{% endif %}
</div>
