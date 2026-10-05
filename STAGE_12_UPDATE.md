# Stage 12 — Final QA & Launch

Stage 12 is the final quality-assurance and launch stage for the Katta Komali portfolio.

## Final checks completed
- Preserved the merged Stage 1–11 project structure.
- Removed the incorrect GitHub URL previously used as the portfolio canonical URL.
- Removed the duplicate meta description.
- Removed the incorrect `og:url` value so the site does not advertise GitHub as the portfolio URL.
- Fixed invalid interactive HTML in Contact by moving the Copy button outside the email link.
- Kept the existing resume, deployment configs, accessibility features, SEO metadata, recruiter sections, project details, and responsive UI.
- No new npm dependencies introduced.

## Validation note
The sandbox could not complete `npm install` within its execution timeout, so a dependency-backed `npm run lint` / `npm run build` was not claimed as passed here. On the target Windows machine, run:

```powershell
npm install
npm run lint
npm run build
```

The previously reported `lightningcss.win32-x64-msvc.node` error is a local dependency/native-module installation issue, not a Stage 12 source-code failure. If it recurs, remove `node_modules` and reinstall dependencies on Windows.

## Launch checklist
- [ ] `npm install` completes without errors
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Test desktop navigation and all section anchors
- [ ] Test mobile menu and responsive layout
- [ ] Test dark/light mode
- [ ] Test project detail dialogs and Escape key
- [ ] Test Resume view/download
- [ ] Test GitHub and LinkedIn links
- [ ] Test Contact mailto flow and Copy email button
- [ ] Deploy through Vercel or Netlify
- [ ] Add the real production URL to canonical/OG URL metadata after deployment
- [ ] Run a final production smoke test

## Status
Stage 12 source QA is complete. The portfolio is launch-ready once the Windows dependency installation and production smoke test pass.
