---
layout: default
title: Projects
description: Personal and open source projects
---

<header style="margin-bottom: 3rem;">
  <h1>Projects</h1>
  <p style="font-size: 1.125rem; color: #64748b; margin-top: 1rem;">Some open source projects and experiments which I created.</p>
</header>

{% assign projects = site.projects | sort: 'date' | reverse %}

{% if projects.size > 0 %}
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
  {% for project in projects %}
  {% assign project_link = project.url_external | default: project.repo_url %}
  <div class="project-card">
    {% if project_link %}
    <a href="{{ project_link }}" target="_blank" rel="noopener noreferrer" class="project-card-link" aria-label="View {{ project.title }}">
    {% endif %}
      {% if project.image %}
      <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-image">
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
      </div>
    {% if project_link %}
    </a>
    {% endif %}
  </div>
  {% endfor %}
</div>
{% else %}
<p>No projects published yet. Check back soon!</p>
{% endif %}
