# lvsean.github.io

Personal homepage of **Xiaozhong Lyu** — Ph.D. student at the Computer Vision and
Learning Group (VLG), ETH Zürich.

Single static page (`index.html` + `styles.css`). The homepage template is
**adapted from [Siwei Zhang](https://sanweiliti.github.io/)'s academic homepage**
(credited in the page footer and in an HTML comment in `index.html`).

## Structure

```
├── index.html              # homepage (bio, news, publications)
├── styles.css
├── assets/
│   ├── xiaozhong.jpg       # profile photo (from vlg_website_dev)
│   └── publications/       # publication teaser thumbnails
└── lamp/                   # LaMP project page (from the 3dvtest repo)
    └── index.html, styles.css, script.js, assets/, video/
```

The **LaMP project page** under `lamp/` is the project website built in the
`3dvtest` repository, included here so it is hosted from this site
(`/lamp/`). The ReViV and EgoGen entries link out to their existing project pages.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
