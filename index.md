---
layout: default
title: Home
---

<div class="intro">
  <div class="intro-text">
    <h1>Software Engineer in Test, Speaker, and <span class="highlight">Quality Advocate</span></h1>
    <p>I'm {{ site.author.name }}, a Software Engineer in Test with 9+ years of experience developing test automation solutions and test strategies for different projects. Active contributor in QA communities, conference speaker, and author of technical articles.</p>
  </div>
  <div class="intro-media">
    <img src="{{ '/assets/images/general/new-profile-squared.webp' | relative_url }}" alt="Portrait of {{ site.author.name }}" class="intro-profile-image">
  </div>
</div>

<div class="section-preview">
  <h2>
    <span>Recent Talks</span>
    <a href="{{ '/talks' | relative_url }}" class="view-all-link">View all talks</a>
  </h2>
{% assign latest_talks = site.talks | sort: 'date' | reverse | limit: 2 %}
{% if latest_talks.size > 0 %}
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
    {% for talk in latest_talks %}
    <div class="talk-card" style="position: relative;">
      <a
        href="{{ talk.url | relative_url }}"
        aria-label="View talk details: {{ talk.title }}"
        style="position: absolute; inset: 0; border-radius: inherit; z-index: 1; text-decoration: none;"
      ></a>
      <h3>{{ talk.title }}</h3>
      <span class="talk-event">{{ talk.event }}</span>
      <p class="talk-description">{{ talk.description }}</p>
      {% if talk.video_url or talk.slides_url %}
      <div class="talk-links" style="position: relative; z-index: 2;">
        {% if talk.video_url %}<a href="{{ talk.video_url }}" target="_blank" rel="noopener noreferrer" aria-label="Watch video for {{ talk.title }} (opens in new tab)">Video</a>{% endif %}
        {% if talk.slides_url %}<a href="{{ talk.slides_url }}" target="_blank" rel="noopener noreferrer" aria-label="View slides for {{ talk.title }} (opens in new tab)">Slides</a>{% endif %}
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
{% else %}
  <p>No talks yet. Check back soon!</p>
{% endif %}
</div>

<div class="section-preview">
  <h2>
    <span>Latest Article</span>
    <a href="{{ '/articles' | relative_url }}" class="view-all-link">View all articles</a>
  </h2>
{% assign latest_articles = site.articles | sort: 'date' | reverse | limit: 1 %}
{% if latest_articles.size > 0 %}
  <div class="articles-grid">
    {% for article in latest_articles %}
    <article class="article-item">
      <a href="{{ article.url | relative_url }}" class="article-card-link" aria-label="Read {{ article.title }}">
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
