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
<div style="display: grid; gap: 3rem;">
  {% for talk in talks %}
  <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 3rem;">
    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.25rem;">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 0.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">{{ talk.title }}</h2>
        {% if talk.date %}
        <time class="content-meta" style="margin: 0;">{{ talk.date | date: "%B %Y" }}</time>
        {% endif %}
      </div>
      {% if talk.event %}
      <p class="talk-event" style="margin: 0;">{{ talk.event }}</p>
      {% endif %}
    </div>
    {% if talk.description %}
    <p style="margin-top: 1rem; color: #64748b; line-height: 1.75; max-width: 42rem;">{{ talk.description }}</p>
    {% elsif talk.excerpt %}
    <p style="margin-top: 1rem; color: #64748b; line-height: 1.75; max-width: 42rem;">{{ talk.excerpt | strip_html | truncatewords: 50 }}</p>
    {% endif %}
    {% if talk.video_url or talk.slides_url %}
    <div class="talk-links" style="margin-top: 1.5rem;">
      {% if talk.video_url %}
      <a href="{{ talk.video_url }}" target="_blank" rel="noopener noreferrer">Watch Video</a>
      {% endif %}
      {% if talk.slides_url %}
      <a href="{{ talk.slides_url }}" target="_blank" rel="noopener noreferrer">View Slides</a>
      {% endif %}
    </div>
    {% endif %}
  </div>
  {% endfor %}
</div>
{% else %}
<p>No talks published yet. Check back soon!</p>
{% endif %}
