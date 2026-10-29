---
layout: page
title: Covarion Model for Morphology
description: Modelling characters that change their speed of evolution across the tree
img: assets/img/covarion_intro.png
importance: 1
category: academic
related_publications: false
---

The rate at which a morphological character evolves is not constant across the phylogeny, and this rate heterogeneity differs between characters.
Standard models of morphological evolution, such as the Mk model, assume that every character evolves under a time-homogeneous process across the whole tree.
Models of among-character rate variation relax this by letting characters evolve at different rates, but each character still keeps the same rate on every branch.

The covarion model, originally developed for molecular data, allows sites to switch between rate classes along the tree.
In this project, we extended the covarion model in [RevBayes](https://revbayes.github.io/) to morphological characters, an approach we call the **covariomorph model**.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid zoomable="true" loading="eager" path="assets/img/covarion_intro.png" title="three-rate binary covariomorph model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The three-rate binary covariomorph model. A character (here, two tooth shapes) evolves under a slow, medium, or fast rate, and can switch between rate categories along the tree at the switching rate δ.
</div>

Rate categories are derived from a discretized probability distribution that scales the rate matrix, and characters can switch between categories during evolution.
We verified the implementation with simulations and then applied the model to 164 empirical morphological datasets.
About half of them showed patterns of rate heterogeneity compatible with covarion-like dynamics.
For two focal datasets, the covariomorph model changed both the inferred tree topology and branch lengths compared with traditional models.
This sensitivity of branch lengths to model choice has direct consequences for divergence-time estimation and rates of evolution.

This work was published in _Systematic Biology_. Data and scripts are available on [GitHub](https://github.com/basantakhakurel/morpheus).

**Khakurel, B.**, & Höhna, S. (2026). A covarion model for phylogenetic estimation using discrete morphological datasets. Systematic Biology. DOI: [https://doi.org/10.1093/sysbio/syag014](https://doi.org/10.1093/sysbio/syag014)
