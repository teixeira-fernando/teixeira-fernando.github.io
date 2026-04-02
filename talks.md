---
layout: default
title: Talks
description: Conference talks and presentations
---

<header style="margin-bottom: 3rem;">
  <h1>Talks</h1>
  <p style="font-size: 1.125rem; color: #64748b; margin-top: 1rem;">Recordings and resources from my conference presentations.</p>
</header>

{% assign talks = site.talks | sort: 'date' | reverse %}

{% if talks.size > 0 %}
<div class="talks-list">
  {% for talk in talks %}
  <article class="talk-card">
    <a
      class="talk-card-overlay-link"
      href="{{ talk.url | relative_url }}"
      aria-label="Read talk: {{ talk.title }}"
    ></a>

    <header class="talk-card-header">
      <div class="talk-card-title-row">
        <h2 class="talk-card-title">{{ talk.title }}</h2>
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
<p>No talks published yet. Check back soon!</p>
{% endif %}
