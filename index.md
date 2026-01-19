---
layout: default
title: Home
---

<div class="intro">
  <h1>Welcome</h1>
  <p>Hi, I'm {{ site.author.name }}. This is my personal website where I share my thoughts, talks, and projects.</p>
  <p>{{ site.description }}</p>
</div>

<div class="section-preview">
  <h2>Latest Articles</h2>
  {% assign latest_articles = site.articles | sort: 'date' | reverse | limit: 3 %}
  {% if latest_articles.size > 0 %}
  <ul class="preview-list">
    {% for article in latest_articles %}
    <li>
      <a href="{{ article.url | relative_url }}">{{ article.title }}</a>
      {% if article.date %}<span class="content-meta"> - {{ article.date | date: "%B %d, %Y" }}</span>{% endif %}
    </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/articles' | relative_url }}">View all articles →</a></p>
  {% else %}
  <p>No articles yet. Check back soon!</p>
  {% endif %}
</div>

<div class="section-preview">
  <h2>Recent Talks</h2>
  {% assign latest_talks = site.talks | sort: 'date' | reverse | limit: 3 %}
  {% if latest_talks.size > 0 %}
  <ul class="preview-list">
    {% for talk in latest_talks %}
    <li>
      <a href="{{ talk.url | relative_url }}">{{ talk.title }}</a>
      {% if talk.date %}<span class="content-meta"> - {{ talk.date | date: "%B %d, %Y" }}</span>{% endif %}
    </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/talks' | relative_url }}">View all talks →</a></p>
  {% else %}
  <p>No talks yet. Check back soon!</p>
  {% endif %}
</div>

<div class="section-preview">
  <h2>Featured Projects</h2>
  {% assign latest_projects = site.projects | sort: 'date' | reverse | limit: 3 %}
  {% if latest_projects.size > 0 %}
  <ul class="preview-list">
    {% for project in latest_projects %}
    <li>
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      {% if project.description %}<span class="content-meta"> - {{ project.description }}</span>{% endif %}
    </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/projects' | relative_url }}">View all projects →</a></p>
  {% else %}
  <p>No projects yet. Check back soon!</p>
  {% endif %}
</div>
