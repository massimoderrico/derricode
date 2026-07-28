# Derricode — AI implementation & software studio

Derricode is a Next.js App Router site for an AI implementation and software studio. It preserves the original white/light foundation with blue and black accents, the full multi-page story, Framer Motion interactions, and an honest email-draft contact flow.

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run test:smoke
npm audit --omit=dev --audit-level=high
npm run start
```

## Routes

- `/` — point of view, services, system model, and CTA
- `/services` — AI implementation, automations, applications, and integrations
- `/process` — four-stage delivery approach
- `/capabilities` — web, mobile, APIs, MCP, internal tools, and automation
- `/contact` — accessible project-intake form that opens an email draft
- unknown paths — explicit branded 404 response with HTTP 404

## Structure

- `app/` — App Router layouts, routes, metadata, and `not-found.tsx`
- `components/` — navigation, motion wrappers, and page sections
- `content/` — structured services, process, and capability copy
- `lib/` — route and contact helpers
- `public/` — static assets
- `scripts/smoke.mjs` — Next production-server route and behavior smoke test

## Design and content notes

The site uses a Decide/Learn narrative: business constraint → point of view → services → process → technical scope → contact. The design system keeps white surfaces readable and uses decisive blue (`#195cff`) plus black for signal and contrast. Space Grotesk, Manrope, and DM Mono provide the editorial/technical voice.

Framer Motion powers page and section reveals. `useReducedMotion()` makes motion static and zero-duration, with CSS reduced-motion overrides as a second layer. Navigation uses native links, a keyboard-accessible mobile menu, skip link, visible focus states, semantic landmarks, and touch-sized controls.

The contact form does **not** send data to Derricode. It validates the required fields and opens a pre-addressed draft to `hello@derricode.com`; the visitor must explicitly send it.

## Reference workflows

- UI/UX Pro Max remains available through `.codex/skills/ui-ux-pro-max`; the implementation adapts its recommendations into original Derricode tokens and layout.
- Package/reference: https://www.npmjs.com/package/uipro-cli
- Design reference notes: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- gstack setup/instructions: https://github.com/garrytan/gstack

No Vercel deployment is performed by this migration; the project is configured for direct Next/Vercel deep links without SPA rewrites.
