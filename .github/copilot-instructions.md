# GitHub Copilot Instructions

This repository contains a new Angular 20 standalone SPA for DJ artist **Gabo Martin**.

## Guidance
- Prefer modular standalone components and route-level feature composition.
- Keep content in typed local data files, not embedded directly in templates.
- Use Tailwind CSS as the default styling system.
- Add custom CSS only when Tailwind would be awkward or insufficient.
- Keep the UI editorial-dark, responsive, and accessible on mobile and desktop.
- Build reusable wrappers for Spotify, YouTube, and social embeds.
- Use bilingual content structures from the start.
- Use `mailto:` flows for `Contact` and `Services` in v1 unless a backend is explicitly added.

## Code Quality
- Favor clear component boundaries and small, single-purpose helpers.
- Avoid duplicating labels, URLs, or copy across pages.
- Preserve semantic markup, focus states, and keyboard navigation.
- Keep templates readable and avoid overcomplicated conditional logic.

## Editing Behavior
- Do not introduce broad refactors unless they are needed for the task.
- Do not overwrite concurrent user changes.
- Keep changes scoped and consistent with the existing Angular/Tailwind structure.
- Prefer predictable, maintainable patterns over cleverness.

