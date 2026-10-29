---
layout: page
permalink: /repositories/
title: Code
description: Data, analysis scripts, and software from my research.
nav: true
nav_order: 4
---

<!--Edit `_data/repositories.yml` to add or remove entries. Everything here is rendered at build time, with no external services.-->

## Research code & data

Each repository contains the data and scripts needed to reproduce the analyses in the associated paper.

<div class="row">
  {% for item in site.data.repositories.research %}
    <div class="col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">
            <a href="https://github.com/{{ item.repo }}"><i class="fa-brands fa-github"></i> {{ item.title }}</a>
          </h5>
          <p class="card-text">{{ item.description }}</p>
          {% if item.paper %}
            <p class="card-text small mb-0">
              {% if item.doi %}
                <a href="https://doi.org/{{ item.doi }}">{{ item.paper }}</a>
              {% else %}
                {{ item.paper }}
              {% endif %}
            </p>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>

## Software

<div class="row">
  {% for item in site.data.repositories.software %}
    <div class="col-md-6 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">
            <a href="https://github.com/{{ item.repo }}"><i class="fa-brands fa-github"></i> {{ item.title }}</a>
          </h5>
          <p class="card-text">{{ item.description }}</p>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

{% if site.repo_trophies.enabled %}

## GitHub trophies

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=site.data.repositories.github_user %}
</div>
{% endif %}

More of my work is on [GitHub](https://github.com/{{ site.data.repositories.github_user }}).
