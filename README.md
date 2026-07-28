# Derricode — AI implementation & software studio

A production-ready Vite + React site for Derricode. It positions the studio around AI implementation, AI automations, full-stack web/mobile applications, APIs, and MCP integrations.

**Local path:** `/home/massimo/derricode`

## Setup

```bash
npm install
npm run dev
```

Build and verify:

```bash
npm run build       # TypeScript + Vite production build
npm run lint        # oxlint
npm run preview     # local production preview
```

## Site structure

The app uses a small client-side router built on the History API, so each page has a shareable route while Vite serves the same entry point:

- `/` — Home: Derricode's point of view, services, system model, and CTA
- `/services` — AI implementation, AI automation, and application/integration services
- `/process` — Four-stage delivery approach
- `/capabilities` — Web, mobile, APIs, MCP, internal AI tools, and automation capabilities
- `/contact` — Accessible project-intake form that opens an explicitly labeled email draft, plus direct email CTA
- Unknown paths — Branded 404 page with a route back home

Shared navigation and footer are rendered around every route. The nav includes a mobile menu, a skip link, visible focus states, keyboard-friendly native controls, and touch-sized targets.

## Design decisions

- **Surface:** Decide / Learn. The narrative moves from the business problem, to Derricode's point of view, to services, delivery, technical scope, and a direct contact CTA.
- **Color system:** Decisive blue, white, and black. `#195cff` is the action and signal accent; white surfaces carry readable content; black and blue sections provide contrast.
- **Typography:** Space Grotesk provides a technical editorial voice for headings, Manrope keeps body copy readable, and DM Mono is reserved for operational labels and metadata.
- **Composition:** Editorial section transitions, a dark system-map visual, blue signal strip, long-form service rows, process timeline, capability index, and focused CTA. No fake dashboard numbers, stock imagery, generic testimonial blocks, or invented social proof.
- **Motion:** `framer-motion` handles route transitions, hero entrance, and in-view section reveals. Every motion surface uses `useReducedMotion()`; reduced motion uses zero duration and no opacity/distance/scale changes. CSS also disables smooth scrolling and transform-based hover motion.
- **Content discipline:** Copy is specific to implementation, automation, full-stack products, APIs, and MCP. No invented clients, awards, testimonials, metrics, or unsupported claims.

## Frontend design workflows used

- `frontend-product-build`: repository inspection, Decide/Learn composition, dependency verification, semantic structure, accessibility, responsive behavior, reduced-motion treatment, and install/lint/build verification.
- `claude-design`: source-first design process, deliberate surface choice, editorial composition, motion as continuity, and anti-slop audit.
- UI/UX Pro Max: the repository's `.codex/skills/ui-ux-pro-max` search workflow was used to generate a design-system recommendation for an AI implementation/software studio. The final implementation adapts the recommendation into original Derricode tokens and layout rather than copying a component or proprietary code.

UI/UX Pro Max references:

- https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- https://www.npmjs.com/package/uipro-cli

## gstack setup

The gstack README and setup script were inspected before installation:

- https://github.com/garrytan/gstack
- https://raw.githubusercontent.com/garrytan/gstack/main/README.md

Following the documented team-mode flow, gstack was cloned to `~/.claude/skills/gstack`, built with the official Bun runtime installed through the official `bun` npm package, and initialized for this repository with:

```bash
(cd ~/.claude/skills/gstack && ./setup --team)
~/.claude/skills/gstack/bin/gstack-team-init required
```

The setup generated the repository's `CLAUDE.md` gstack instructions and `.claude/hooks/check-gstack.sh` enforcement hook. The gstack build completed, but its optional Playwright Chromium download could not install on this environment's `ubuntu26.04-x64`; the source install and team initialization still completed. Re-run `cd ~/.claude/skills/gstack && ./setup --team` on a supported host if the browser binary is needed.

## Notes

- The contact form is an honest email-draft workflow: it validates required fields, opens a pre-addressed draft to `hello@derricode.com`, and explicitly says no message has been sent until the visitor sends it.
- `vercel.json` rewrites all deep links to the Vite entry point for SPA routing. No Vercel deployment was performed; direct deployed-route verification remains pending Op's deployment.
