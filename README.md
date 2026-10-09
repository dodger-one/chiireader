# Chii Reader

An interactive manga résumé for Gemma, known online as @Chii_reader. It uses HTML-native manga pages inside [Grabfold](https://github.com/javocsoft/grabfold), with a right-bound book, responsive spreads, touch and keyboard controls, and a static GitHub Pages build.

Bracketed professional information must be replaced with Gemma’s approved details before presenting the résumé as complete.

## Run locally

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run check
npm run build
npm run preview
```

The production site is generated in `dist/`. Vite uses relative asset paths, so the build works at both a domain root and a GitHub repository subpath.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys every push to `main`.

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main`, or run **Deploy to GitHub Pages** from the Actions tab.

The deployment job publishes only the generated `dist/` directory.

## Reading controls

- Drag or swipe the free edge of the page.
- Press <kbd>←</kbd> to advance and <kbd>→</kbd> to go back.
- Use the visible Back and Next buttons.
- Select **Enlarge** when dialogue needs magnification.
- Follow **Text version** for an accessible linear résumé.

## Project structure

```text
src/main.ts                  Page content and Grabfold setup
src/styles.css               Manga layout system and reader presentation
public/art/                  Replaceable SVG illustrations
.github/workflows/           GitHub Pages deployment
```

Grabfold is currently a young dependency (`0.1.0`). Before treating it as production-ready, manually verify the cover position, page sequence, page-turn direction, gestures, and shadows on the target desktop and mobile browsers.
