# Skill Training project page

Public project page for **Skill Training with Corruption and Reconstruction Loop**.

- Website: https://skilltraining-project.github.io/
- Pages settings: https://github.com/skilltraining-project/skilltraining-project.github.io/settings/pages
- Research code: https://github.com/skilltraining-project/skill-training (currently private)

## Updating the page

Edit `index.html` for text, author details, links, the results table, or citation. Edit `style.css` for appearance. The paper buttons and citation point to the unversioned arXiv record at https://arxiv.org/abs/2607.27557, so future arXiv replacements keep the same links. The visible date is the initial release in July 2026. Figures are in `assets/framework.png` and `assets/transfer.png`.

Push changes to `main`. GitHub Pages publishes from the root directory of `main`, with `.nojekyll` enabling plain static files. There is no build step or package installation.

## Local preview

Serve the repository root with any static HTTP server, then open its local URL.

## Sources

Content and results are from the author-provided `preprint-20260926.pdf` dated September 26, 2026. The page retains the revised title and six-author list supplied by the author; the canonical paper links point to arXiv:2607.27557. `assets/paper.pdf` remains an archived copy of the supplied manuscript. The two figures were rendered from the corresponding original figure PDFs. Table values follow Table 2; the preference-study counts follow Section 4.4 and Appendix H. The webpage does not publish training data or code from the private research repository.

The header and browser icons use the author-supplied `logo.png` from SkillTron, copied unchanged to `assets/logo.png`.

When changing `style.css`, update the `?v=` value in its stylesheet link in `index.html` to the first 12 characters of the stylesheet’s SHA-256 hash. This prevents cached old styles from being paired with new HTML. Keep the header logo’s inline dimensions as a fallback.
