---
layout: default
title: Projects
description: Personal and open source projects
---

# Projects

{% assign projects = site.projects | sort: 'date' | reverse %}

{% if projects.size > 0 %}
<ul class="content-list">
  {% for project in projects %}
  <li class="content-item">
    <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
    {% if project.date %}
    <p class="content-meta">{{ project.date | date: "%Y" }}</p>
    {% endif %}
    {% if project.description %}
    <p>{{ project.description }}</p>
    {% elsif project.excerpt %}
    <p>{{ project.excerpt | strip_html | truncatewords: 50 }}</p>
    {% endif %}
    {% if project.url_external %}
    <p><a href="{{ project.url_external }}" target="_blank" rel="noopener noreferrer">View Project →</a></p>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No projects published yet. Check back soon!</p>
{% endif %}
