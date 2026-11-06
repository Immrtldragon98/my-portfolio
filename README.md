# Logan — engineering and product portfolio

Next.js 16 / React 19 portfolio connecting mechanical maintenance, commissioning, trading tools and applied AI.

## Run and validate

```sh
npm ci
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

The active App Router is `app/` with root `components/` and `data/`. The older `src/` scaffold is unused; do not edit it to change the site.

## Content

`data/projects.ts` is the shared catalog for project lists and case studies. Software summaries use repository material plus the owner's project history. Industrial entries are owner-reported experience. Status labels distinguish active builds, prototypes, concepts and reported implementations. A repository feature does not establish a verified production release. Never publish credentials, private conversations or unverified performance claims.

Project detail pages live at `/projects/[slug]`; `/projects/market-memory` retains its original URL. Legacy upcoming URLs redirect to current project pages.

## November 2026 review

Fixed an outdated single-project catalog, unsupported completed labels, generic GitHub URLs, placeholder contact email, missing industrial experience, stale Genetic Playground positioning and an empty screenshot panel. Added eight project summaries, shared detail rendering, updated profile and metadata, keyboard focus, skip navigation and reduced-motion support.

Remaining: replace the unused `src/` scaffold in a separate cleanup; collect real product screenshots; verify current public deployment and product flows before labeling them live or production ready. No measured business impact, clinical validity or trading performance is inferred.
