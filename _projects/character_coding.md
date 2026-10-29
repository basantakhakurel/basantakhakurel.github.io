---
layout: page
title: Character Coding and State Space
description: How unobserved character states bias Bayesian morphological phylogenetics
img: assets/img/character_coding_intro.png
importance: 5
category: academic
related_publications: false
---

For molecular data, the state space is known in advance: there are four nucleotides or twenty amino acids.
For morphological characters, we often do not know how many states a character can take.
Incomplete sampling of living taxa and the fossil record, as well as observer bias in how characters are coded, mean that the states we observe may be only a subset of those that exist.
Because the size of the state space determines the rate matrix used in a model of evolution, getting it wrong leads to model misspecification.

<div class="row justify-content-sm-center">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid zoomable="true" loading="eager" path="assets/img/character_coding_intro.png" title="unsampled character state" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A character with three states (triangle, circles, and squares). If the lineage with the square state is not sampled (dotted branches), a researcher would assume only two states, and the resulting model would misrepresent the true state space.
</div>

To measure the impact of this misspecification, we simulated morphological data with varying numbers of states per character and then estimated trees under models that assumed either the correct or an incorrect number of states.
Mismatched state spaces produced phylogenetic error, particularly in branch lengths.
When the state space is assumed to be too large, branch lengths are underestimated; when it is assumed to be too small, they are overestimated.

This project grew out of my Master's thesis at Southeastern Louisiana University with [Dr. April Wright](https://wright-lab.com/), and was published as a Point of View in _Systematic Biology_.

**Khakurel, B.**, Grigsby, C., Tran, T. D., Zariwala, J., Höhna, S., & Wright, A. M. (2024). The fundamental role of character coding in Bayesian morphological phylogenetics. Systematic Biology, 73(5), 861–871. DOI: [https://doi.org/10.1093/sysbio/syae033](https://doi.org/10.1093/sysbio/syae033)
