README.md
Policy Brief: Evaluation of Medellín’s Security Policy

A data-driven analysis validating the policy’s theory of change using exploratory data analysis, machine learning and web development.

Overview

This project evaluates Medellín’s public security policy using real indicators from the official Medellín Cómo Vamos database. The analysis explores two types of violence (lethal and non-lethal) and assesses whether the policy's theory of change aligns with empirical behavior.

The project includes both a web-based policy brief (HTML/CSS/JS) and a full data analysis pipeline (Python).

Methods Used
Exploratory Analysis

Heatmaps (multicollinearity, overfitting detection)

Descriptive statistics

Time-series patterns

Pairwise correlations

Machine Learning

Random Forest (feature importance)

PCA (transposed, dimensional grouping by year)

Clustering (variable grouping dynamics)

Web Development

HTML

CSS

JavaScript

Repository Structure
policy-brief-web/
│── data/                 ← cleaned datasets
│── notebooks/            ← Jupyter notebooks (EDA, PCA, clustering)
│── src/                  ← Python scripts for preprocessing & modeling
│── web/                  ← Additional information about the web page
│── docs/                 ←  HTML/CSS/JS of the policy brief
│── dashboards/           ← Power BI or Tableau exports
│── README.md             ← project documentation
│── requirements.txt      ← Python dependencies
│── .gitignore

Author

Juan Pablo Restrepo Yepes
Policy-oriented Data Analyst
Medellín, Colombia
