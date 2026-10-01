# Fristaden Falun - React prototype

[Português (Brasil)](README.pt-BR.md) | **English**

A React/TypeScript prototype for a church community website, originally exported from Google AI Studio. This is the public `Fristaden-Falun` repository, not the separate `fristaden-falun-full-site` project.

**Documentation reviewed:** 2026-10-01. No current public deployment of this repository was confirmed in this update.

## Purpose and planning

The source groups church information, events, sermons, giving, volunteering, missions and community pages into one site. The original README contained only AI Studio setup instructions, so original design research and planning decisions are not reconstructed here. Git history is the record of implementation changes.

## Architecture

```text
Browser -> React components and hash-based page navigation
        -> Gemini service for sermon ideas and welcome-email text
Build   -> Vite + TypeScript
```

`App.tsx` maps URL hashes to home, visit planning, beliefs, giving, volunteering, missions, community and detail pages. It listens for hash changes, scrolls to sections and focuses the main content after page changes. Components are organized under `components/`.

From `package.json`: React 19, TypeScript 5.8, Vite 6 and `@google/genai`. The Gemini service requests structured JSON using `gemini-2.5-flash` for sermon outlines and welcome-email text. Generating text is not evidence that an email is actually delivered.

## Design and snapshots

The root layout uses church-white and church-gray styles, a shared header/footer and a main area with focus management. No new visual run of this prototype was performed in this update. New snapshots should use fictional visitor data, dated filenames and `docs/assets/`; no unverified image embed is added.

## Local development

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`. These commands were read from the package file, not executed in this documentation update.

## Security and privacy

**Do not deploy with a real Gemini key in the current frontend setup.** `vite.config.ts` replaces `process.env.API_KEY` and `process.env.GEMINI_API_KEY` with the environment value during build, while `services/geminiService.ts` calls Gemini from the client. If a real key is included in a shipped bundle, visitors can recover it. Keeping the key in `.env.local` does not make the compiled frontend secret.

Before any public AI-enabled deployment, move key-bearing requests to a server-side service, review usage limits and costs, and verify that no secret is shipped. This update does not change that architecture, set keys or make API calls. Visitor names and visit details passed to the generator also need a privacy review before real use.

## Testing

| Check | Evidence in this update |
| --- | --- |
| Source review | App routing, package scripts, Vite key substitution and Gemini service read on 2026-10-01 |
| Automated tests | No test script in `package.json`; no tests run |
| Build and runtime | Not run |
| Responsive layout and accessibility | Focus behavior inspected in source only; no rendered audit |

Before reuse, test navigation and unknown hashes, small-screen layout, keyboard focus, API failures and privacy boundaries. Do not call this prototype production-ready on the basis of this documentation review.

## Credits and license

Original AI Studio export and the church-site prototype source are preserved. No root `LICENSE` was found in the review. This update does not assign a new license to third-party dependencies, images or content; their existing terms still apply.

## Next steps

- [ ] Confirm this repository's role relative to the separate full-site project.
- [ ] Remove client-side secret handling before public AI use.
- [ ] Review visitor-data handling and AI text before use.
- [ ] Run build and functional tests with safe test data.
- [ ] Add dated screenshots under `docs/assets/`.
