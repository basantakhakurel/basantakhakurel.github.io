---
layout: page
title: Hidden cost of Rate Discretization
description: How the number of rate categories affects phylogenetic inference
img: assets/img/rate_prior_intro.png
importance: 2
category: academic
related_publications: false
---

Models of among-character rate variation (ACRV) are a cornerstone of phylogenetic inference.
To keep them computationally tractable, a continuous distribution of rates (e.g., Gamma or Lognormal) is approximated with a small number of discrete categories, _k_, usually four.
This discretization is treated as a technical detail, but we do not actually know how rates are distributed among characters. Rate variation could be unimodal and continuous, or it could be just two categories (fast vs. slow).

In this project, we use simulations under Gamma and Lognormal ACRV models, with rate variation ranging from low (rates spanning one order of magnitude) to high (three orders of magnitude). We ask:

- How sensitive is parameter inference to the number of rate categories, _k_?
- What happens when the _k_ used for inference does not match the process that generated the data?
- Does the discretization method (mean vs. median) matter?
- Do these biases stay confined to the rate parameters, or do they spread to tree length?

Mismatches in _k_ lead to severe, systematic biases in the estimated shape of rate variation.
When rate variation is low, tree length remains remarkably robust despite these biases.
When rate variation is high, that robustness breaks down and tree length is significantly misestimated, with consequences for downstream analyses.

This work is currently in review. Data and scripts are available on [GitHub](https://github.com/basantakhakurel/rate_discretization).

**Khakurel, B.**, Capobianco, A., & Höhna, S. The hidden cost of discretization: how the number of rate categories affects phylogenetic inference. Submitted to _Royal Society Open Science_.
