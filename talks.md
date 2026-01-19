---
layout: default
title: Talks
description: Conference talks and presentations
---

# Talks

{% assign talks = site.talks | sort: 'date' | reverse %}

{% if talks.size > 0 %}
<ul class="content-list">
  {% for talk in talks %}
  <li class="content-item">
    <h2><a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></h2>
    {% if talk.date %}
    <p class="content-meta">
      {{ talk.date | date: "%B %d, %Y" }}
      {% if talk.event %} at {{ talk.event }}{% endif %}
      {% if talk.location %}, {{ talk.location }}{% endif %}
    </p>
    {% endif %}
    {% if talk.description %}
    <p>{{ talk.description }}</p>
    {% elsif talk.excerpt %}
    <p>{{ talk.excerpt | strip_html | truncatewords: 50 }}</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No talks published yet. Check back soon!</p>
{% endif %}
