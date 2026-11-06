# Logan — software portfolio

Next.js 16 / React 19 portfolio for web applications, applied AI experiments and trading tools.

## Development

```sh
npm ci
npm run dev -- --hostname 127.0.0.1
npm run lint
npx tsc --noEmit
npm run build
```

## Structure

- `app/`: Home, Projects, About and project detail routes.
- `data/projects.ts`: the shared software-project catalog.
- `components/layout/`: one global navigation and footer.
- `components/project/`: filter controls, cards and case-study layout.
- `components/ui/Button.tsx`: shared primary and secondary link actions.

Project filters are native toggle buttons with announced result counts. Navigation identifies the current page; mobile navigation exposes its expanded state. Keyboard focus, skip navigation and reduced-motion support are included. Legacy upcoming links redirect to current project pages.

Unused `src/` app, empty components, template assets, directory dump and unused animation dependency were removed. Do not reintroduce a second App Router or placeholder-only components.

Content reflects repository material and project history, not a claim of verified production behavior. Keep credentials and private user records out of source. Mechanical projects are excluded from the showcase.

Deployment uses the existing Vercel project connected to GitHub `main`.
