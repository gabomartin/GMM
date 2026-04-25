# Gabo Martin SPA Execution Plan

## Summary
Build a new Angular 20 standalone SPA for the DJ artist **Gabo Martin**. The app is frontend-only, uses Tailwind CSS as the primary styling system, supports bilingual content, and ships with a responsive editorial-dark layout. Pages in scope are `Home`, `Bio`, `Music`, `DJ Sets`, `Services`, and `Contact`.

## Key Decisions
- No custom backend, CMS, or API in v1.
- Contact and Services inquiries use `mailto:` flows with validated form state.
- Content lives in typed local data/config files, not inline in page components.
- Spotify, YouTube, and social embeds are wrapped in reusable components with placeholder/demo URLs until final links are available.
- Custom CSS is allowed only when Tailwind is the wrong tool for the job, such as embedded iframe framing, advanced overlays, or nontrivial text effects.

## Parallel Workstreams
Run these in parallel with Codex subagents. Keep ownership separated so work can merge cleanly.

### Workstream A: App Scaffold and Shell
- Confirm Angular 20 standalone app structure, routing, and build configuration.
- Set up the global layout, header, footer, nav, and mobile menu.
- Add route titles and baseline SEO/meta handling.
- Define the overall app shell contract so page components stay thin.

### Workstream B: Local Content and Types
- Create typed models for language, navigation, page sections, media embeds, social links, and service inquiry metadata.
- Add bilingual local content for `Home`, `Bio`, `Music`, `DJ Sets`, `Services`, and `Contact`.
- Store placeholder text, link metadata, embed metadata, and CTA copy in data files.
- Expose small helpers/selectors for resolving active language content.

### Workstream C: Shared UI and Design System
- Establish the Tailwind theme, spacing, type scale, colors, and reusable component patterns.
- Build shared primitives such as section headers, cards, buttons, embed frames, and social link lists.
- Keep styling expressive but disciplined: editorial-dark, high contrast, responsive, and accessible.

### Workstream D: Feature Pages and Flows
- Implement page-level routes and compose them from shared components and local content.
- Build the `Services` inquiry section and `Contact` section with local validation and `mailto:` generation.
- Add Spotify, YouTube, and social embed sections using reusable wrapper components.

### Workstream E: Repo Guidance Docs
- Write `AGENTS.md` for Codex-specific repo rules.
- Write `.github/copilot-instructions.md` for GitHub Copilot guidance.
- Add `PLANS.md` so the execution order and parallel workstreams remain explicit.

## Implementation Order
1. Scaffold the Angular app and validate the baseline build.
2. Add Tailwind and the app shell.
3. Add the typed local content layer.
4. Implement shared components and responsive page layouts.
5. Wire contact/service inquiry flows and embed wrappers.
6. Add docs, verify behavior, and tighten any accessibility or responsiveness gaps.

## Required File Areas
- `src/app/core` for app shell, navigation, footer, and shared layout concerns.
- `src/app/shared` for reusable UI primitives and embed wrappers.
- `src/app/content` or equivalent for typed local content and bilingual data.
- `src/app/features` or equivalent for route-level pages.
- `.github/copilot-instructions.md` and `AGENTS.md` for repo working rules.

## Test Plan
- Verify every route renders on desktop and mobile breakpoints.
- Verify language switching updates navigation, headings, labels, and CTA text consistently.
- Verify `mailto:` generation for `Contact` and `Services` includes the expected subject and body.
- Verify embed wrappers render placeholder/demo links safely and degrade gracefully when data is missing.
- Verify keyboard access for nav, menus, toggles, and CTAs.
- Verify no page duplicates copy that belongs in the shared content layer.
- Add unit tests for helper functions and content selectors.
- Add component tests for shell, shared UI, and inquiry flows.

## Done Criteria
- The SPA runs with all planned routes.
- The layout is responsive and usable on phones and desktop browsers.
- Content is centralized, typed, bilingual, and easy to extend.
- The app does not depend on a backend for v1.
- Repo guidance docs exist and reflect the final structure.

