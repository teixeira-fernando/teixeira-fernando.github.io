---
layout: default
title: Projects
description: Personal and open source projects
---

<header style="margin-bottom: 3rem;">
  <h1>Projects</h1>
  <p style="font-size: 1.125rem; color: #64748b; margin-top: 1rem;">Selected open source work and experiments.</p>
</header>

{% assign projects = site.projects | sort: 'date' | reverse %}

{% if projects.size > 0 %}
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
  {% for project in projects %}
  <div class="project-card">
    {% if project.image %}
    <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image">
    {% endif %}
    <div class="project-content">
      <h3>{{ project.title }}</h3>
      {% if project.tech %}
      <div class="project-tech">
        {% for tech in project.tech %}
        <span class="tech-badge">{{ tech }}</span>
        {% endfor %}
      </div>
      {% endif %}
      {% if project.description %}
      <p class="project-description">{{ project.description }}</p>
      {% elsif project.excerpt %}
      <p class="project-description">{{ project.excerpt | strip_html | truncatewords: 30 }}</p>
      {% endif %}
      <div class="project-links">
        {% if project.repo_url %}
        <a href="{{ project.repo_url }}" target="_blank" rel="noopener noreferrer">GitHub</a>
        {% endif %}
        {% if project.url_external %}
        <a href="{{ project.url_external }}" target="_blank" rel="noopener noreferrer">Live Demo</a>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% else %}
<p>No projects published yet. Check back soon!</p>
{% endif %}
