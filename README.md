# Komali Portfolio

Professional React portfolio for Katta Komali.

## Stages
- Stage 1: Core professional portfolio and responsive layout
- Stage 2: UX polish, animations, contact flow, accessibility and SEO improvements
- Stage 3: Theme toggle, scroll progress, project filters and project-approach section

## Run locally
```bash
npm install
npm run dev
```

## Validate
```bash
npm run lint
npm run build
```


## Stage 5

Stage 5 adds professional career CTAs, profile-link sharing, and stronger GitHub actions while preserving Stages 1–4.

## Stage 7
Stage 7 adds recruiter-focused polish, mounts the Resume/Recruiter Toolkit section, and introduces a concise Quick Review highlights section.

## Stage 11 — Production Deployment

This version is prepared for deployment on Vercel or Netlify. The app remains a standard Vite + React single-page application and does not require a server.

### Local production check

```bash
npm install
npm run lint
npm run build
npm run preview
```

> If Windows reports a missing `lightningcss.win32-x64-msvc.node`, delete `node_modules` and `package-lock.json`, then run `npm install` again. This is a local optional native dependency issue, not a portfolio source-code error.

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

The included `vercel.json` adds basic browser security headers and long-lived caching for Vite assets.

### Netlify

1. Push the project to GitHub.
2. Add the repository in Netlify.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.

The included `netlify.toml` sets the build configuration and `public/_redirects` provides SPA fallback routing.

### Before publishing

- Replace any placeholder social profile links with your real profiles.
- Verify email and phone details.
- Test the resume PDF download.
- Test the contact flow on desktop and mobile.
- Confirm GitHub links open correctly.
- Run `npm run lint` and `npm run build` locally.
- Connect a custom domain only after the hosted site works on its default domain.

### Stage 11 status

Deployment configuration is included; hosting itself is intentionally not performed from this project package. Stage 12 is the final QA and launch checklist.
