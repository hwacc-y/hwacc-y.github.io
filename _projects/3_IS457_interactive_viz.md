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

## Visualization 1

<vegachart schema-url="{{ site.baseurl }}/assets/json/IS457-fin-viz1.json" style="width: 100%"></vegachart>
Figure 1: Visualization of Average Bechdel Test Passes per Film Franchise


## Visualization 2
<vegachart schema-url="{{ site.baseurl }}/assets/json/IS457-fin-viz2.json" style="width: 100%"></vegachart>
Figure 2: Visualization of x v y

## The Data & Methods

<!-- these are written in a combo of html and liquid --> 

<div class="left">
{% include elements/button.html link="" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/hwacc-y/hwacc-y.github.io/blob/main/python_notebooks/" text="The Analysis" %}
</div>

