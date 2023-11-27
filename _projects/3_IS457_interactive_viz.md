---
name: IS 457 Final Project
tools: [Python, HTML, vega-lite, Altair]
image: assets/pngs/css_scatterplot.png
description: This is my IS 457 visualization, currently still work in progress!
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---


# IS 457 Visualizations 

## Visualization version 1

<vegachart schema-url="{{ site.baseurl }}/assets/json/IS457-fin-v1.json" style="width: 100%"></vegachart>



## Visualization version 2
<!-- <vegachart schema-url="{{ site.baseurl }}/assets/json/IS457-fin-v2.json" style="width: 100%"></vegachart> -->


## The Data & Methods

<!-- these are written in a combo of html and liquid --> 

<div class="left">
{% include elements/button.html link="" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/hwacc-y/hwacc-y.github.io/blob/main/python_notebooks/" text="The Analysis" %}
</div>

