---
title: Refactoring my personal website with the help of Github Copilot
date: 2026-04-07
description: Personal Experience of Refactoring a Website with the help of Github Copilot. Learnings, challenges, and outcomes.
tags: [AI, GitHub Copilot, Refactoring]
banner_image: /assets/images/articles/perf-accessibility.svg
---

# Refactoring my personal website with the help of Github Copilot

## Motivation

This year, I wanted to improve my old personal website, which was basically links to articles, talks, projects and social media. Since i have been creating more content lately, it would be good to improve my personal website, with a better UI and make it more organized.

## Goal and technical decisions

I wanted to continue usign Jekyll, since it was the framework which I was using before and I really liked it. It offered a lot of flexibility and also I could very easily create new articles and pages with markdown files.

However, if I wanted to modernize my website, that would require some extra customization, especially in the frontend, with some CSS and HTML which are not my area of expertise.

So, I wanted to try to get some help from AI to do the heavy work for me and see if it would be able to achieve something close to what I had in my mind. Since I had a clear picture in my head of what I wanted to have in the end, that helped me to think about the process of refactoring, how I could start and how to ask for help from AI.

## Getting started with the refactoring

I have been using mostly Github Copilot with some new but not the latest Open AI models available, like GPT 5.2 and GPT 5.2-Codex, and that helps a lot in my daily work, so I wanted to also use the same here to give some tasks to agents.

I use agents both locally and on cloud. 

The advantages of using cloud agents is that:

* Built-in tool ecosystems: Cloud agents often come pre-integrated with APIs, MCP servers, Browsers and other third-party tools which help the models to better iterate and validate the response being generated
* Access to more powerful models: Cloud agents typically run on latest available models.
* Better autonomy and orchestration: In general, I think the cloud agents can better run longer workflows and can work more independently before answering, and that also reduces your work when reviewing the generated code.

The main downside is that it takes much more time to get an answer for a certain task and there much more issues in terms of data privacy, so it does really make sense to use cloud agents for everything, otherwise, it will be become a bottleneck in your workflow.

Small tip: When using Local agents, what generally helps me a lot is to use the "plan" option with the initial prompt. For me, that avoids a lot that back and forth of reiterating and misunderstandings that can help when sending an instruction to an agent. That makes sure that your understanding and the agent understanding are aligned, before starting any implementation.


(PUT here screenshot to choose option of Plan)

## Results and conclusion

It took quite a few pull requests and different prompts to achieve what I wanted, but it was still easier and faster than having to work with the CSS and HTML files on my own.

Some things could be for sure simplified, 

And the nice thing is: Even when not using the latest AI models, the niciest MCP servers and setups or other Paid AI tools, it was still possible to have great results. I know that if i had used some of them, I could get some results faster and better, but that´s fine. That is the beauty of trying things out on personal projects.
