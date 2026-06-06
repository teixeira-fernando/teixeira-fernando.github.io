---
layout: default
title: Home
---

<div class="intro">
  <div class="intro-text">
    <h1>Software Engineer in Test, Speaker, and <span class="highlight">Quality Advocate</span></h1>
    <p>I'm {{ site.author.name }}, a Software Engineer in Test with 9+ years of experience developing test automation solutions and test strategies for different projects. Active contributor in QA communities, conference speaker, and author of technical articles.</p>
    <div class="intro-social-buttons">
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener noreferrer" class="social-btn social-btn--linkedin" aria-label="Visit LinkedIn profile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
      <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer" class="social-btn social-btn--github" aria-label="Visit GitHub profile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        GitHub
      </a>
    </div>
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
