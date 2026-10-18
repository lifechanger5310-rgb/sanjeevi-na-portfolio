# sanjeevi-na-portfolio

Personal portfolio website for **Sanjeevi N A** — Frontend Web & Mobile Application Developer.

> **HANDOFF FILE FOR ANY CLAUDE CHAT / ACCOUNT.**
> This build is done across several Claude accounts. Before doing anything:
> 1. Read this whole file.
> 2. Go to **[10. Progress Tracker](#10-progress-tracker)** and do ONLY the next unchecked `[ ]` item.
> 3. Before you finish, tick the box, add a line to **[11. Change Log](#11-change-log)**, commit, and push.
>
> Never put tokens, passwords or keys in this repo, in git remotes, or in this file.

---

## 1. Goal

A calm, clear, confident portfolio. In 30–60 seconds an HR person must understand:
who he is, what role he wants, what real projects he built, what tools he uses, and how he works with AI tools.

## 2. Tech Stack

Next.js 15 (App Router) • React 19 • TypeScript • Tailwind CSS v4 • Framer Motion (light reveals and hover only) • Vercel

## 3. Design System (LOCKED — light theme, v2)

This replaces the v1 dark theme. Do not add colours.

| Token | Value | Tailwind name | Use |
|---|---|---|---|
| Background | `#FAFAFA` | `bg-bg` | Page |
| Card surface | `#FFFFFF` | `bg-surface` | Cards, nav pill, skill panel |
| Text primary | `#111827` | `text-text` | Headings, body, nav text |
| Text muted | `#6B7280` | `text-muted` | Secondary text, labels |
| Border | `#E5E7EB` | `border-line` | Card and tag borders, dividers |
| **Accent** | `#0D9488` | `bg-accent`, `border-accent` | Primary buttons, active nav tint, timeline dots, bullets, hover borders, hover shadows |

- One accent only. Tints are the same teal at low opacity (`bg-accent/10`, `rgb(13 148 136 / .35)` shadows). No other hue anywhere.
- Fonts: Inter (self-hosted via `@fontsource-variable/inter`) with system fallback. Weights used: 400, 500, 600. Nothing heavier.
- Hero name: `clamp(2.5rem, 6vw, 4rem)`, weight 600. Section titles 1.5–1.875rem, weight 600. Body 1–1.125rem, line-height 1.65.
- Shape: pill navigation, pill buttons and tags, `rounded-2xl` cards, 1px borders, almost no shadow.
- Spacing: sections `py-20 sm:py-28`, content width `max-w-4xl`, side padding `px-5 sm:px-8`.
- Buttons: min height 44px. Primary = teal fill, white label. Ghost = white fill, border, teal border on hover.
- Nav: floating pill, sticky. Links About / Experience / Projects / AI / Skills / Contact; name links to top. Under 768px it becomes a menu button with a dropdown.
- Active nav link = teal tint background + dark text (not a white-on-teal label, see D12).

## 4. Sections (in order)

1. Hero — location chip, name, title, one-liner, buttons: **View Work | Download Resume | Contact**
2. About — professional heading + 4 sentences (Flutter, iOS, web, practical AI use)
3. Experience — vertical timeline (line + dots), 3 companies, 4 roles, plus an "Across these roles" card
4. Projects — Jamindhar and Click App only (title, short description, tech tags)
5. AI Prompt Engineering — short, true, six tools
6. Skills — grouped tags: Languages, Frameworks, Backend, Tools, AI Tools
7. Contact — email, phone, LinkedIn, location, Email me + Download Resume

## 5. Source of Truth for Content (only real data)

Source: the resume (`Sanjeevi N A Resume.pdf`), the build guide (`Sanjeevi NA Portfolio Build Guide.docx`) and AI experience the owner confirmed. All site text lives in `src/data/content.ts`.

**Identity**
- Name: Sanjeevi N A
- Title: Frontend Web & Mobile Application Developer
- Location shown on site: **Erode, India** (see D1)
- Email: sanjeevikavin@gmail.com
- Phone: +91 6379604196 (tel link: `tel:+916379604196`)
- LinkedIn: https://linkedin.com/in/sanjeevi-n-a-0758ba235

**Hero one-liner (exact):** Building clean mobile and web apps with Flutter, iOS, and modern web tools. Using AI prompting to learn fast and deliver reliable code.

**Experience (exact dates — do not change)**
- U2 Breakthrough Technologies, Coimbatore — Junior Team Member (Nov 2025 – Feb 2026) and Junior Application Developer Intern (Jul 2025 – Oct 2025). UI/UX updates, new features and API integration for the product app Jamindhar.
- Blackstone Infomatics, Coimbatore — Flutter iOS App Developer (Nov 2024 – Apr 2025). iOS integration for the real-time car booking app Click App.
- Codingmart Technologies, Coimbatore — Intern Product Engineer (Jan 2023 – Feb 2023). JavaScript, data structures and algorithms.

**Projects**
- Jamindhar — property management app for occupancy, rent collection and maintenance. Employee/owner logins in the web app, separate admin login web app. Stack: Flutter, Dart, Next.js, React, React Bootstrap, TypeScript, JavaScript.
- Click App — real-time car booking application. iOS integration with user-friendly design. Stack tags: Flutter, iOS.

**AI Prompt Engineering (owner confirmed, about 1 year, daily):** Claude, Perplexity, Grok, Gemini, ChatGPT, Cursor. Learned which tool suits which task: code generation, debugging, concept explanation, research.

**Skills (from resume)**
- Languages: HTML, CSS, JavaScript, TypeScript, Dart, Swift, Java
- Frameworks: Next.js, React, React Bootstrap, Tailwind CSS, Flutter, UIKit, MVC, MVVM
- Backend: Firebase (BaaS), SQL
- Tools: VS Code, Xcode, Android Studio, SoapUI, GitHub
- AI Tools: Claude, Perplexity, Grok, Gemini, ChatGPT, Z Ai, Cursor

**Education (resume PDF only, not on the site):** B.E. Computer Science and Engineering, K.S.R. College of Engineering, 2019–2023.

## 6. Rules (never break)

- Only real resume data + confirmed AI experience. No invented projects, numbers, dates or claims ("10x", "led", "senior", "fewer bugs" etc.).
- Do not copy text or projects from other portfolios (including sanjeevi-cs-portfolio.vercel.app). Only the visual language is borrowed.
- Light theme only. No dark mode, no gradients, no second accent colour.
- Never show internal learning-skill names (e.g. omnimaster, VJ, SJ).
- Mobile-first. Email, phone and LinkedIn must be easy to find and clickable.
- Motion is subtle. See section 7.

## 7. Motion (Framer Motion, light only)

- Scroll: every block fades up 16px once when it enters the viewport (0.5s ease-out). Lists stagger by 0.08–0.12s. Built in `src/components/Reveal.tsx`.
- Hover: cards scale 1.015, buttons 1.03, tags and nav links change colour. Teal border or soft teal shadow only.
- Press: buttons scale 0.97.
- Nav: active link tint fades in over 0.3s. Mobile menu fades and slides 8px.
- Timeline: a dot fills teal on hover.
- `MotionProvider` uses LazyMotion (`m`, never `motion`) and `reducedMotion="user"`.
- Every hidden-at-start element carries `data-reveal`, so the `<noscript>` rule in `layout.tsx` shows it with JavaScript off.
- Removed in v2: magnetic buttons, 3D card tilt, cursor glow, grid/grain backdrop, drifting grid, section divider glow.

## 8. Decisions Log

| ID | Decision | Why |
|---|---|---|
| D1 | Location on site = **Erode, India** | The guide says so. The resume says Gobichettipalayam, which is in Erode district. One-line change in `content.ts`. |
| D2 | Repo name = `sanjeevi-na-portfolio` | An older, different-design repo `sanjeevi-portfolio` exists under the same GitHub account. **Do not touch or merge it.** |
| D3 | The resume lists AI tools Cursor, Perplexity, Claude; the guide adds Grok, Gemini, ChatGPT, Z Ai | Owner confirmed the extra tools. The AI section shows six tools (no Z Ai); Z Ai stays in Skills. |
| D4 | Optional intro video skipped | Keep the page light. |
| D5 | **Superseded by D10.** v1 kept the resume PDF out of the repo. | See D10. |
| D6 | **Superseded by D10.** v1 had Download Resume buttons switched off. | The v2 brief requires them. |
| D7 | **Superseded by D12.** v1 used navy button labels on blue. | Different palette now. |
| D8 | v1 drifting grid backdrop | Removed in v2 (section 7). |
| D9 | Next.js stays on 15.5.28 | `npm audit` flags PostCSS advisories bundled in `next`. They concern build-time processing of untrusted CSS, and this site only builds its own CSS. The only fix is the Next 16 major upgrade, left for the owner. |
| D10 | `public/Sanjeevi_N_A_Resume.pdf` is a **one-page resume generated from the site's own content** (same facts as the site, plus the education line). It is not the original resume file. | The brief requires working Download Resume buttons and the original PDF was not available in this session. It holds only data already public on the site, with no CGPA or marks. **To use the original resume:** overwrite the PDF with the same file name. No code change needed. |
| D11 | Company names on the site have no "Pvt Ltd" | The v2 brief lists the names without it. The resume has "Pvt Ltd". |
| D12 | White label on the `#0D9488` primary button is 3.7:1 contrast (WCAG AA wants 4.5:1 for normal text). Teal is never used for small text. Active nav uses a teal tint with dark text (passes). | The brief fixes the accent and asks for teal buttons. The fix, if wanted later, is a darker label (`#111827` gives 4.8:1) or a slightly darker teal. Owner decision. |
| D13 | About heading = "Frontend developer across mobile and web" | The brief asked for a professional heading, not "A short intro". |
| D14 | The AI section no longer says "fewer bugs" or "faster" | Those were unmeasured claims. The section lists only what the owner confirmed. |

## 9. Accounts, Deploy and Environment

- GitHub account: `lifechanger5310-rgb`
- Repo: https://github.com/lifechanger5310-rgb/sanjeevi-na-portfolio (public)
- Deploy: Vercel, linked to the same GitHub account. The project redeploys on every push to `main`.
- Production URL: https://sanjeevi-na-portfolio.vercel.app
- **Secrets:** a GitHub token was shared in chat to push code. It is NOT stored anywhere in this repo. Each new Claude account must get its own token from the owner in chat (a fine-grained token limited to this repo is best) and must never write it into files, git remotes or this README. Pass it per command (`git -c http.extraheader=...`) and revoke it when the work is done.

**Code map**
- `src/data/content.ts` — ALL site text (edit content here only)
- `src/app/globals.css` — colour tokens + Inter font
- `src/app/page.tsx` — section order
- `src/sections/*` — Hero, About, Experience, Projects, AIPromptEngineering, Skills, Contact
- `src/components/*` — Navbar, Section, SectionHeading, Reveal (+ RevealGroup, RevealItem), Card, Tag, ButtonLink, MotionProvider, BulletList, icons
- `public/Sanjeevi_N_A_Resume.pdf` — resume download (see D10)

**How a fresh Claude chat gets set up**
1. Clone the repo: `git clone https://github.com/lifechanger5310-rgb/sanjeevi-na-portfolio`
2. `npm ci`
3. `npm run dev` to check locally, `npm run lint` and `npm run build` before every push.
4. Commit with a clear message, e.g. `feat(hero): add hero section`. Push to `main`.

**Known environment limits seen in Claude Code cloud sessions**
- GitHub GraphQL is blocked; use REST or plain git.
- The shell cannot resolve `*.vercel.app` (curl fails). Check the live page with WebFetch. In one session the plain URL kept answering `302` to an `http://` URL; adding a throwaway query (`/?cb=<short-sha>`) fetched the page normally. The Vercel build state is also readable with `gh api repos/lifechanger5310-rgb/sanjeevi-na-portfolio/commits/<sha>/status` (context `Vercel`).
- Headless tests: the site sets `scroll-behavior: smooth`. Use `window.scrollTo({ top, behavior: 'instant' })` and wait about 250 ms per step. With a plain `scrollTo` the bottom of the page looks blank in screenshots. That is a test artifact, not a site bug.
- `pkill -f next-server` from the same shell command can kill that shell (exit 144). Kill by port instead.

## 10. Progress Tracker

**Next action for the next chat:** the owner checks the live site on a real phone and on desktop, then decides whether to swap in the original resume PDF (D10) and whether to change the button label colour (D12).

- [x] **Step 0 — README created first**
- [x] **Step 1 — Project setup:** Next.js + TypeScript + Tailwind + Framer Motion
- [x] **Step 2 — v1 build (dark theme):** all 7 sections, deployed
- [x] **Step 3 — v2 light-theme rebuild**
  - [x] Design tokens (section 3)
  - [x] Pill navigation with active state and mobile menu
  - [x] Hero with View Work / Download Resume / Contact
  - [x] About, Experience timeline, Projects, AI Prompt Engineering, Skills, Contact
  - [x] Light motion only (section 7); magnetic, tilt, glow and backdrop removed
  - [x] Resume PDF and Download Resume buttons (D10)
  - [x] `npm run lint` and `npm run build` pass
  - [x] Checked in headless Chromium at 375px and 1280px: no horizontal overflow, no console messages, active nav follows scroll
- [ ] **Step 4 — Real-device check** (phone and desktop, owner)
- [ ] **Step 5 — Owner decisions:** D10 (original resume PDF), D12 (button label contrast)

### Final checklist

- [x] Name and title correct
- [x] Location shows Erode, India
- [x] All three companies present with exact roles and dates
- [x] Only Jamindhar and Click App in Projects
- [x] AI section short, professional, true
- [x] Light theme, one accent (`#0D9488`), no gradients
- [x] Motion subtle and reduced-motion safe
- [x] Email, phone and LinkedIn correct and clickable
- [x] Download Resume works from Hero and Contact
- [x] README up to date
- [ ] Works well on a real phone (headless only so far)

## 11. Change Log

Newest first. One line per change: date (IST) — what — which chat/account.

- 2026-10-18 — v2 light-theme rebuild: new design tokens, pill nav, minimal cards, timeline, light Framer Motion reveals and hover, resume PDF and Download Resume buttons, content tightened (D10–D14). Removed Backdrop, Magnetic, tilt Card and glow. README rewritten (design system, content source, tracker). `npm run lint` and `npm run build` pass. — Claude (rebuild session)
- 2026-10-17 — Re-check from a clean clone of the v1 dark build: live page matched `main`, lint and build passed. — Claude (verification session)
- 2026-10-17 — v1 upgrade: motion system, richer real content, no-JavaScript fallback. — Claude (upgrade session)
- 2026-10-17 — Pushed `main` to GitHub. Vercel project imported from the dashboard. — Claude account 1
- 2026-10-17 — v1 built: all 7 sections, sticky nav, reveals, reduced-motion support. — Claude account 1
- 2026-10-17 — Project setup and README created first. — Claude account 1

## 12. Content Source Log

Every line on the site traces to the resume (R), the build guide (G), the AI experience the owner confirmed (O) or the v2 brief (B). Wording may be tightened; facts may not change.

| Site element | Source |
|---|---|
| Name, title, email, phone, LinkedIn | R header, B |
| Location "Erode, India" | B and G (see D1). R says Gobichettipalayam |
| Hero one-liner | G, repeated in B |
| About sentences | R Technical Skills (Flutter, Swift, UIKit, Next.js, React), G (AI helped with web work), B (Flutter + iOS + Web + practical AI) |
| Company names, places, role titles, dates | B (exact), R Experience |
| Junior Team Member bullet | R: new features for UI/UX and API integration in Jamindhar. "Property management" comes from R Projects ("Manage Properties app") |
| Junior Application Developer Intern bullet | R: enhanced and handled the Android and web product-based app, Jamindhar |
| Blackstone Infomatics bullet | R: iOS integration for the real-time project application, Click. "Car booking" comes from R Projects |
| Codingmart bullets | R: time management, efficiency, and applying JavaScript to data structures and algorithms |
| "Across these roles" (3 bullets) | R Roles and Responsibilities (covers Click App and Jamindhar, not one company) |
| Jamindhar description and stack | R Projects, JAMINDHAR |
| Jamindhar period Jul 2025 – Feb 2026 | Derived: the span of the two U2 roles, both on Jamindhar. Not a stated project date |
| Click App description | R Projects, Click App. The resume bullet is cut off mid-sentence ("featuring user-friendly"), so only "iOS integration" and "user-friendly design" are used. Do not complete the sentence |
| Click App stack tags (Flutter, iOS) | Derived: "iOS" from the R Projects bullet, "Flutter" from the Blackstone role title "Flutter iOS App Developer". The owner can drop "Flutter" if he wants only what the project bullet states |
| Click App period Nov 2024 – Apr 2025 | Derived: the Blackstone Infomatics role dates |
| AI Prompt Engineering section | B (about 1 year, six tools), G, O |
| Skills | R Technical Skills (MVC and MVVM folded into Frameworks). AI tools extended by O (D3) |
| Resume PDF | Generated from this content plus the education line (R). See D10 |
