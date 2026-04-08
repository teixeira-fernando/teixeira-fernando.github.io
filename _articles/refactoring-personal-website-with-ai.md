---
title: Refactoring my personal website with the help of GitHub Copilot
date: 2026-04-07
description: Personal experience refactoring a website with the help of GitHub Copilot - learnings, challenges, and outcomes.
tags: [AI, GitHub Copilot, Refactoring]
banner_image: /assets/images/articles/personal-website-with-ai/ai-code-refactoring.svg
---

# Refactoring my personal website with the help of GitHub Copilot

## Motivation

This year, I wanted to improve my old personal website, which was basically a list of links to articles, talks, projects, and social media. Since I’ve been creating more content lately, it felt like the right time to give it a better UI and a more organized structure.

## Goal and technical decisions

I wanted to keep using Jekyll, since it’s the framework I was already using and I really like it. It offers a lot of flexibility, and it makes it easy to create new articles and pages using Markdown.

The challenge was that modernizing the site would require more frontend customization—mainly CSS and HTML—which aren’t my areas of expertise.

So I decided to lean on AI to do the heavy lifting and see how close it could get to what I had in mind. Having a clear picture of the desired end result helped a lot: it made it easier to plan the refactor, decide where to start, and phrase requests in a way an agent could execute.

## Getting started with the refactoring

I’ve been using GitHub Copilot in my day-to-day work with newer (though not always the latest) OpenAI models like GPT-5.2 and GPT-5.2-Codex. Since that setup already works well for me, I decided to use it here too and delegate tasks to agents.

I use agents both locally and in the cloud.

The advantages of cloud agents are:

* Built-in tool ecosystems: Cloud agents often come pre-integrated with APIs, MCP servers, browsers, and other third-party tools, which helps them iterate and validate results.
* Access to more powerful models: Cloud agents typically run on the latest available models.
* Better autonomy and orchestration: In my experience, cloud agents handle longer workflows more reliably and can work more independently before answering, which reduces the effort needed to review the generated code.

The downside is that you usually wait longer for results, and there are often more data-privacy considerations. So it doesn’t make sense to use cloud agents for everything—otherwise they can become a workflow bottleneck.

Small tip: When using local agents, the “plan” option in the initial prompt helps a lot. It reduces back-and-forth, prevents misunderstandings, and aligns your expectations with the agent’s before it starts implementing.

TODO: Add a screenshot showing the “Plan” option.

## Results and conclusion

It took quite a few pull requests and iterations to reach what I wanted, but it was still easier (and faster) than doing all the CSS and HTML work on my own.

Because most of the work was UI/UX-related, it was sometimes hard to translate my expectations into precise text. That meant extra iterations when the AI interpreted things differently, and occasionally I just made small changes myself.

The nice thing is that—even without the latest models, the fanciest MCP server setups, or other paid AI tools—it was still possible to get great results. I’m sure some of those tools could have made things faster, but that’s fine. That’s the beauty of experimenting on personal projects.
