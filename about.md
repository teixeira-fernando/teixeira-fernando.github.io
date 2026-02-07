---
layout: default
title: About
description: Learn more about me and what I do
---

<div class="about-content">
  <h1>Hey, I'm {{ site.author.name }}.</h1>
  <p>I've been building for the web for over a decade. Currently, I'm a Senior Frontend Engineer at a large tech company where I focus on performance, accessibility, and the developer experience.</p>
  
  <p>My journey started in the early days of jQuery and PHP, but these days you'll mostly find me working with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Node.js</strong>. I am a firm believer in the "use the platform" philosophy and try to leverage native web features whenever possible.</p>

  <h2>What I do when I'm not coding</h2>
  <p>When I'm not behind a screen, I'm likely training for my next marathon, exploring the local coffee scene, or reading historical non-fiction.</p>

  <h2>Speaking & Community</h2>
  <p>I enjoy sharing my knowledge with the community. I've spoken at international conferences like JSConf, React Summit, and many local meetups. If you're organizing an event and would like me to speak, feel free to reach out.</p>

  {% if site.author.email %}
  <a href="mailto:{{ site.author.email }}" class="contact-button">Get in touch</a>
  {% endif %}
</div>
