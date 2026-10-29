---
layout: page
title: Continuous Characters in Phylogenetics
description: Joint estimation of dicynodont phylogeny from continuous and discrete traits
img: assets/img/continuous_characters_intro.png
importance: 4
category: academic
related_publications: false
---

Continuous characters, such as measurements and ratios, have received comparatively little attention in Bayesian phylogenetics.
Unlike discrete characters, they cannot be modelled with a standard phylogenetic Q-matrix, so most morphological analyses discard them or break them into arbitrary discrete states.

In this project, we used continuous traits under two Brownian motion models to estimate the phylogeny of Dicynodontia, a well-studied group of early synapsids (stem mammals) from the Permian and Triassic.
Both discrete and continuous characters have been used extensively in parsimony analyses of dicynodonts, which makes them an ideal test case.
We compared the phylogenetic signal of a continuous partition, a discrete partition, and a joint analysis combining both, while holding the clock and tree models constant.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid zoomable="true" loading="eager" path="assets/img/continuous_characters_intro.png" title="treespace of dicynodont analyses" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Tree space sampled by the five analyses. Points closer together are more similar in topology and branch lengths (Robinson-Foulds distance weighted by branch length). Trees from continuous characters alone occupy a very different region from trees inferred with discrete characters.
</div>

Continuous and discrete traits contributed substantially different signal, even with the rest of the model held constant.
The resulting topologies also differed strongly from the established dicynodont phylogeny, highlighting how difficult it remains to incorporate truly continuous data in a Bayesian phylogenetic framework.

I worked on this project with Brenen Wynd and [Dr. April Wright](https://wright-lab.com/) in the Wright Lab at Southeastern Louisiana University. The work was published in _Systematic Biology_.

Wynd, B. M., **Khakurel, B.**, Kammerer, C. F., Wagner, P. J., & Wright, A. M. (2026). Incorporating continuous characters in joint estimation of dicynodont phylogeny. Systematic Biology. DOI: [https://doi.org/10.1093/sysbio/syaf078](https://doi.org/10.1093/sysbio/syaf078)
