# AGENTS.md

## Purpose
This repo is a new Angular 20 standalone SPA for the artist **Gabo Martin**. The implementation should stay modular, responsive, and easy to extend without introducing a backend.

## Working Rules
- Prefer standalone components and route-level feature composition.
- Keep page components thin; move repeated UI into shared components.
- Keep content in typed local data files so copy and links can change without refactoring templates.
- Use Tailwind CSS first. Add custom CSS only when Tailwind is not the right fit.
- Keep layouts mobile-first and verify both phone and desktop behavior.
- Avoid hardcoding repeated strings directly inside components.
- Preserve accessibility basics: semantic markup, focus states, keyboard support, readable contrast, and clear headings.

## Architectural Expectations
- Use a clear split between core shell, shared UI, feature pages, and content/data.
- Keep media embeds isolated behind reusable components with safe fallback behavior.
- Model bilingual content explicitly instead of scattering translation conditionals through templates.
- Treat `mailto:`-based inquiry flows as the v1 submission mechanism unless the task explicitly adds a backend.

## Editing Conventions
- Do not revert user changes or unrelated concurrent work.
- Keep edits scoped to the files required by the task.
- Prefer `apply_patch` for file edits.
- Use ASCII unless a file already contains non-ASCII text or a clear need exists.
- Add comments only when they clarify non-obvious code.

## Validation
- Run the smallest useful validation step after changes.
- If a change affects routing, layouts, or responsive behavior, verify both route rendering and breakpoint behavior.
- If a change affects content or inquiry flows, verify the active language and generated `mailto:` output.

