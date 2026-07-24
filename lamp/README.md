# LaMP Project Page

Static project page for **LaMP: Learning Robust Latent Motion Prior for
Optimization-Based Human Motion Generation** (3DV 2026).

## Structure

```
webpage/
├── index.html            # page content
├── styles.css            # styling (adapted from the reviv4d.github.io layout)
├── script.js             # BibTeX copy + on-screen autoplay of result videos
├── assets/images/        # teaser + method figures, and video poster frames
└── video/                # composited result videos, one per example slide
```

## Content sources

- Text (title, authors, abstract, method, result descriptions) is drawn from the
  camera-ready LaTeX (`3dv-2026-Cam/author-kit-3DV2026`).
- `assets/images/teaser.png` and `method.png` are rendered from the paper figures
  `figure/3dv-1.pdf` and `figure/3dv2026.pdf`.
- The result videos are built from `vis/vis_new.pptx`. Each example slide (a grid
  of per-method comparison clips plus captions) is compressed into a single
  self-contained video: the slide is rendered as a static background and the
  original per-method clips are overlaid at their exact slide positions with
  ffmpeg. Mapping: slides 1–2 → blending, 3–4 → refinement, 5–6 → editing,
  7–8 → collision avoidance.

## Preview locally

```bash
cd webpage
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

Push this branch and enable Pages for the `webpage/` folder, or copy its contents
to the repository root / `docs/` of a Pages-enabled branch.
