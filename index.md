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
    <span>Latest Articles</span>
    <a href="{{ '/articles' | relative_url }}" class="view-all-link">View all articles</a>
  </h2>
  {% assign latest_articles = site.articles | sort: 'date' | reverse | limit: 3 %}
  {% if latest_articles.size > 0 %}
  <ul class="preview-list">
    {% for article in latest_articles %}
    <li>
      <h3 class="article-title"><a href="{{ article.url | relative_url }}">{{ article.title }}</a></h3>
      <p>{{ article.excerpt | default: article.description }}</p>
      {% if article.date %}<time class="content-meta">{{ article.date | date: "%B %d, %Y" }}</time>{% endif %}
    </li>
    {% endfor %}
  </ul>
  {% else %}
  <p>No articles yet. Check back soon!</p>
  {% endif %}
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
    <div class="talk-card">
      <h3>{{ talk.title }}</h3>
      <span class="talk-event">{{ talk.event }}</span>
      <p class="talk-description">{{ talk.description }}</p>
      {% if talk.video_url or talk.slides_url %}
      <div class="talk-links">
        {% if talk.video_url %}<a href="{{ talk.video_url }}">Video</a>{% endif %}
        {% if talk.slides_url %}<a href="{{ talk.slides_url }}">Slides</a>{% endif %}
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
  {% else %}
  <p>No talks yet. Check back soon!</p>
  {% endif %}
</div>
