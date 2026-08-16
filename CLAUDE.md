# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Denis Mathan's personal portfolio/homepage, built with Vue 2 (Options API) and Tailwind CSS (v2, via the `postcss7-compat` package since PostCSS 7 is used). Deployed to Firebase Hosting.

## Commands

```
npm install       # install dependencies
npm run serve     # vue-cli-service dev server with hot reload
npm run build     # production build, outputs to dist/
```

There is no test suite and no linter configured in this repo.

## Deployment

- Firebase Hosting project: `homepage-79db4` (see `.firebaserc`, `firebase.json`). `dist/` is the hosting root; all routes rewrite to `index.html` (SPA).
- GitHub Actions auto-deploy (`.github/workflows/`):
  - `firebase-hosting-merge.yml` — builds and deploys to the `live` channel on every push to `master`.
  - `firebase-hosting-pull-request.yml` — builds and deploys a preview channel for PRs from the same repo.
- Pushing to `master` deploys to production automatically — be deliberate about what lands there.

## Architecture

### Routing & pages
`src/router/index.js` defines routes in history mode. Most project pages are individually named views under `src/views/projectpages/` (e.g. `Coma.vue`, `Chess.vue`, `BA.vue`, `Chatbot.vue`), but newer/simpler project pages are consolidated into a single **`GenericProject.vue`** component that takes a `projectSlug` prop and looks up its content from `src/assets/texts/projects.json`. When adding a new simple project page, prefer adding an entry to `projects.json` + a new route pointing at `GenericProject.vue` over creating a bespoke view.

### Content-driven project pages
- `src/assets/texts/projects.json` is the source of truth for the "Experience" and "Programming" project tiles shown on the home page (`experience` and `programming` arrays) and for the content rendered by `GenericProject.vue`. Each entry has tile metadata (`name`, `img`, `techstack`, `size`, ...) plus an optional `page` object (`title`, `intro`, `sectionTitle`, `versions`, `pdfLink`, `metaDescription`) that `GenericProject.vue` renders directly.
- `GenericProject.vue` matches a route's `projectSlug` against an entry's `learnMore`, `id`, or a slugified `name`.
- Some older/more complex project pages (BA, Chatbot) have their own long-form text JSON files in `src/assets/texts/projectpages/`.
- `src/js/projectAssets.js` resolves image/video paths at build time via webpack's `require.context` over `src/assets/images` and `src/assets/videos` — used to dynamically look up media referenced by slug/path from JSON content rather than static imports.
- Beware stray duplicate/backup files that aren't part of the build: `package copy.json`, `src/assets/texts/projects copy.json`, `src/assets/texts/projects copy 2.json`, `src/components/elements/navbar copy.vue`, `src/components/elements/carousel/types/simpleCarousel copy.vue`. Don't confuse these with the real files.

### Visual/interactive layer
- `App.vue` is the shell: fixed background image + overlay, a full-viewport `<canvas>` driven by `src/js/canvasDraw.js` (custom particle/line animation, `initCanvas`/`destroyCanvas`), the `Navbar`, routed page content, and the footer. Scroll position is tracked manually (`onScroll`) to highlight the active nav section (`skills`/`projects`/`about`) based on element bounding boxes.
- `src/js/threeD.js` adds Three.js (+ `troika-three-text`) powered 3D scenes used on some pages.
- `src/js/headlineManipulation.js` provides `manipulate()`, applied to elements marked with `data-headinganim-*` attributes to animate headline text in on mount — used across multiple views/components (see `GenericProject.vue` for a usage example: query `[data-headinganim-chess]`, call `manipulate(...)` in `mounted()`).
- `src/js/date.js` has date formatting helpers.

### Chat feature
`src/js/requests.js` calls an external backend ("Alfred") at `https://pi.denis-mathan.com` (`/api/chat`, `/api/getKnowledge`) for the `/chat` route (`src/views/Chat.vue`). This is a separate service not part of this repo.

### Styling
Tailwind config (`tailwind.config.js`) defines a fixed, non-default color palette (`myGreen`, `background`, `backgroundLight`, etc. — no default Tailwind palette besides `gray`) and custom breakpoints (`desktop`, `tablet`, `mobile`, `slim`, `superslim`, all `max-width` based, i.e. mobile-first classes don't apply — these are desktop-first overrides). Use existing color/breakpoint tokens rather than arbitrary Tailwind values to stay consistent with the rest of the site.
