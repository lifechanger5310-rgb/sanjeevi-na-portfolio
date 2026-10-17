# sanjeevi-na-portfolio

Personal portfolio website for **Sanjeevi N A** — Frontend Web & Mobile Application Developer.

> **HANDOFF FILE FOR ANY CLAUDE CHAT / ACCOUNT.**
> This build is done across several Claude accounts. Before doing anything:
> 1. Read this whole file.
> 2. Go to **[10. Progress Tracker](#10-progress-tracker)** and do ONLY the next unchecked `[ ]` item.
> 3. Before you finish, tick the box, add a line to **[11. Change Log](#11-change-log)**, commit, and push.
>
> Never put tokens, passwords or keys in this repo or in this file.

---

## 1. Goal

A calm, clear, confident portfolio. In 30–60 seconds an HR person must understand:
who he is, what role he wants, what real projects he built, what tools he uses, and how he works with AI tools.

## 2. Tech Stack

Next.js (App Router) • React • TypeScript • Tailwind CSS • Framer Motion • Vercel

## 3. Design System (LOCKED — do not change)

| Token | Value | Use |
|---|---|---|
| Background | `#0B0F19` | Page |
| Surface | `#111827` | Cards |
| Accent (primary) | `#3B82F6` | Buttons, links, glow |
| Accent (soft) | `#60A5FA` | Hover, small highlights |
| Text primary | `#F1F5F9` | Headings, body |
| Text muted | `#94A3B8` | Secondary text |
| Success | `#34D399` | Small status dots only |

- Fonts: Inter (or system-ui). Max 2 families.
- Hero name: `clamp(2.5rem, 6vw, 4rem)`. Section titles 1.5–2rem. Body 1–1.125rem, line-height 1.6–1.7.
- Buttons: min height 44px.
- Sticky top nav: Home / Work / About / Contact. Hamburger on mobile.

## 4. Sections (in order)

1. Hero — name, title, one-liner, 2 buttons (View Work / Contact)
2. About — 3–4 short sentences
3. Experience — 3 company cards
4. Projects — Jamindhar, Click App
5. AI Prompt Engineering — short, true
6. Skills — grouped tags
7. Contact — email, phone, LinkedIn, location

## 5. Source of Truth for Content (only real data)

Source: the resume (`Sanjeevi N A Resume.pdf`) + the build guide (`Sanjeevi NA Portfolio Build Guide.docx`) + AI experience the owner confirmed.

**Identity**
- Name: Sanjeevi N A
- Title: Frontend Web & Mobile Application Developer
- Location shown on site: **Erode, India** (see decision D1)
- Email: sanjeevikavin@gmail.com
- Phone: 6379604196 (tel link: `tel:+916379604196`)
- LinkedIn: https://linkedin.com/in/sanjeevi-n-a-0758ba235

**Hero one-liner (exact):** Building clean mobile and web apps with Flutter, iOS, and modern web tools. Using AI prompting to learn fast and deliver reliable code.

**Experience (exact dates — do not change)**
- U2 Breakthrough Technologies Pvt Ltd, Coimbatore — Junior Team Member (Nov 2025 – Feb 2026) and Junior Application Developer Intern (Jul – Oct 2025). UI/UX updates, new features and API integration for the product app Jamindhar.
- Blackstone Infomatics, Coimbatore — Flutter iOS App Developer (Nov 2024 – Apr 2025). iOS integration for the real-time car booking app Click.
- Codingmart Technologies Pvt Ltd, Coimbatore — Intern Product Engineer (Jan – Feb 2023). JavaScript, data structures and algorithms.

**Projects**
- Jamindhar — property management app for occupancy, rent collection and maintenance. Employee/owner logins in the web app, separate admin login web app. Stack: Flutter/Dart, Next.js, React, React Bootstrap, TypeScript, JavaScript.
- Click App — car booking application. iOS integration with user-friendly design.

**AI Prompt Engineering (owner confirmed, ~1 year, daily):** Claude, Perplexity, Grok, Gemini, ChatGPT and others. Learned which tool suits which task: code generation, debugging, concept explanation, research.

**Skills (from resume)**
- Languages: HTML, CSS, Java, JavaScript, TypeScript, Dart, Swift
- Frameworks / libraries: Next.js, Flutter, UIKit, React, React Bootstrap, Tailwind CSS
- Backend: Firebase (BaaS), SQL
- Patterns: MVC, MVVM
- Tools: VS Code, Xcode, Android Studio, SoapUI, GitHub
- AI: Cursor, Perplexity, Claude (resume) + Grok, Gemini, ChatGPT, Z Ai (owner confirmed)

**Education (optional, only if space):** B.E. Computer Science and Engineering, K.S.R. College of Engineering, 2019–2023, CGPA 7.77.

## 6. Rules (never break)

- Only real resume data + confirmed AI experience. No invented projects, numbers, dates or claims ("10x", "led", "senior" etc.).
- No generic AI look: no purple gradients, glowing blobs, random 3D, glowing brains or robots.
- Never show internal learning-skill names (e.g. omnimaster, VJ, SJ).
- Max 1 strong accent colour. No long paragraphs.
- Mobile-first. High contrast. Accessible.
- Email, phone and LinkedIn must be easy to find and clickable.
- Motion: soft and short (≤0.8s for normal UI). No parallax, no endless loaders, no autoplay sound.
- Images: compress before adding. Prefer no heavy video.

## 7. Animation Plan (Framer Motion)

- Page load: hero text and buttons fade + small upward move (0.5–0.7s)
- Scroll: each section fades in once when it enters the viewport
- Cards: hover lift `translateY(-4px)` + soft accent border glow
- Buttons: quick scale / colour shift
- Skill tags: very light stagger
- Respect `prefers-reduced-motion`

Added in the upgrade (all behind the same reduced-motion rule):
- One motion setup: `MotionProvider` (LazyMotion + spring defaults). Use `m`, never `motion`, or the build fails (strict mode).
- Reveals: `Reveal` / `RevealGroup` / `RevealItem`, once per page load, staggered. Every element that starts hidden carries `data-reveal`, so a `<noscript>` rule in `layout.tsx` shows it when JavaScript is off.
- Buttons: magnetic pull (real mouse only, max 10px), spring hover and press.
- Cards: soft 3D tilt (max 6°) and a glow that follows a real mouse. Touch gets a glow where you press. No tilt under reduced motion.
- Nav: active-section underline and an animated mobile menu.
- Backdrop: faint grid, vignette and grain, plus section dividers. The grid drifts slowly, only on mouse devices with motion allowed. To stop it, delete the `animation` rule inside the `@media (hover: hover)` block in `globals.css`.

## 8. Decisions Log

| ID | Decision | Why |
|---|---|---|
| D1 | Location on site = **Erode, India** | The guide says so. The resume says Gobichettipalayam, which is in Erode district. One-line change if the owner wants the resume wording. |
| D2 | Repo name = `sanjeevi-na-portfolio` | The guide, step 0. An older, different-design repo `sanjeevi-portfolio` exists under the same GitHub account. **Do not touch or merge it.** |
| D3 | The resume lists AI tools Cursor, Perplexity, Claude; the guide adds Grok, Gemini, ChatGPT, Z Ai | Owner confirmed the extra tools. |
| D4 | Optional intro video skipped in v1 | Guide says skip if time is tight. A CSS/Framer abstract hero accent is allowed later. |
| D5 | Resume file is not added to the repo | Contains personal data. Add only if the owner asks. |
| D6 | Download Resume buttons are built (Hero and Contact) but OFF: `resumeUrl` in `content.ts` is empty and the PDF is not in the repo | The build guide never asks for a resume download, so D5 stands. The PDF holds phone, email and school marks, and a public repo keeps it in git history even if the file is deleted later. To turn on: add the PDF to `public/` and set `resumeUrl` (and `resumeFileName`) in `content.ts`. The Hero then shows 3 buttons instead of the 2 in section 4. |
| D7 | Primary button label uses the navy `--bg`, not white | White on `#3B82F6` is 3.7:1 contrast, navy is 5.2:1. No new colour added. |
| D8 | Backdrop grid drifts slowly (70s per tile, mouse devices only, off for reduced motion) | Ambient depth, not UI motion. The guide's "must avoid" list (parallax, endless loaders, UI animation over 0.8s) does not cover it. Owner can veto; reversible, see section 7. |
| D9 | Next.js stays on 15.5.28 | `npm audit` flags PostCSS advisories bundled in `next`. They concern build-time processing of untrusted CSS, and this site only builds its own CSS. The only fix is the Next 16 major upgrade, so it is left for the owner to decide. |

## 9. Accounts, Deploy and Environment

- GitHub account: `lifechanger5310-rgb`
- Repo: https://github.com/lifechanger5310-rgb/sanjeevi-na-portfolio (public)
- Deploy: Vercel, linked to the same GitHub account. The Vercel GitHub app must have access to this repo.
- Production URL: https://sanjeevi-na-portfolio.vercel.app (live; the Vercel project redeploys on every push to `main`)
- **Secrets:** a GitHub token was shared in chat to push code. It is NOT stored anywhere in this repo. Each new Claude account must get its own token from the owner in chat (use a fine-grained token limited to this repo) and must never write it into files, git remotes or this README.

**Code map**
- `src/data/content.ts` — ALL site text (edit content here only)
- `src/app/globals.css` — locked colour tokens + Inter font
- `src/app/page.tsx` — section order
- `src/sections/*` — Hero, About, Experience, Projects, AIPromptEngineering, Skills, Contact
- `src/components/*` — Navbar, Section, SectionHeading, Reveal (+ RevealGroup, RevealItem), Card, Tag, ButtonLink, Magnetic, MotionProvider, Backdrop, BulletList, icons

**How a fresh Claude chat gets set up**
1. Clone the repo: `git clone https://github.com/lifechanger5310-rgb/sanjeevi-na-portfolio`
2. `npm install`
3. `npm run dev` to check locally, `npm run build` before every push.
4. Commit with a clear message, e.g. `feat(hero): add hero section`. Push to `main`.
5. Vercel redeploys on every push to `main`.

**Known environment limits seen in Claude Code cloud sessions**
- Creating a new GitHub repo from the session can be blocked. The owner creates the empty repo; the session then attaches it.
- GitHub GraphQL is blocked; use REST or plain git.

## 10. Progress Tracker

**Next action for the next chat:** the owner tests the live link on a real phone and on desktop (last part of Step 4), ticks Step 4 and "Works well on mobile", and says whether the resume download should go live (D6). Nothing else is open.
The site is live at https://sanjeevi-na-portfolio.vercel.app and the Vercel project is linked to this repo (commit status `Vercel: success`). Every push to `main` redeploys.

- [x] **Step 0 — README created first** (this file)
- [x] **Step 1 — Project setup:** Next.js + TypeScript + Tailwind + Framer Motion; colour variables in `globals.css`; folders `components/`, `sections/`, `app/`
- [x] **Step 2a — Hero + sticky nav**
- [x] **Step 2b — About + Experience**
- [x] **Step 2c — Projects + AI Prompt Engineering**
- [x] **Step 2d — Skills + Contact**
- [x] **Step 3 — Motion + mobile polish** (done in code, checked at 375px and 1280px in headless Chromium; still test on a real phone after deploy) (Framer Motion reveals, hover states, check 375px)
- [x] **Step 3b — Upgrade: richer motion and real resume detail** (see sections 7, 8, 12 and the Change Log)
- [ ] **Step 4 — Deploy to Vercel** and test live link on phone and desktop (deploy is done and live; only the real-phone test is open)
- [ ] **Step 5 — Final checklist** (below) and update this README

### Final checklist (from the guide)

- [x] Name and title correct
- [x] Location shows Erode, India
- [x] All three company experiences present with real dates
- [x] Jamindhar and Click App described honestly
- [x] AI Prompt Engineering section short, professional, true
- [x] No generic AI visual style
- [x] Animations smooth and helpful
- [ ] Works well on mobile (checked in headless Chromium at 375px with touch; real-phone test still open)
- [x] Email, phone and LinkedIn correct and clickable
- [x] Live Vercel link opens without error
- [x] README up to date

## 11. Change Log

Newest first. One line per change: date (IST) — what — which chat/account.

- 2026-10-17 — README: Production URL filled in, tracker and checklist updated, decisions D6–D9, content source log (section 12). — Claude (upgrade session)
- 2026-10-17 — Upgrade pushed: motion system (LazyMotion, spring defaults, reveal groups, magnetic buttons, card tilt and glow, active-nav underline, animated mobile menu, section dividers, grid and grain backdrop), richer real content from the resume (role bullets, project highlights, "Across these roles"), no-JavaScript fallback. Download Resume buttons are wired but hidden (D6). Hero size stays at the locked `clamp(2.5rem, 6vw, 4rem)` and the About heading stays "A short intro". `npm run lint` and `npm run build` pass. Headless Chromium checks pass at 1280px and 375px (touch), with reduced motion and with JavaScript off; no console warnings in production or dev mode. — Claude (upgrade session)
- 2026-10-17 — Pushed `main` to GitHub (empty repo was created by the owner). Vercel connector could not create the project (403); dashboard import needed. — Claude account 1
- 2026-10-17 — Built all 7 sections (Hero, About, Experience, Projects, AI Prompt Engineering, Skills, Contact), sticky nav with mobile menu, Framer Motion reveals/hover/stagger with reduced-motion support. `npm run build` passes. No horizontal overflow at 375px. — Claude account 1
- 2026-10-17 — Project setup: Next.js 15 (App Router) + TypeScript + Tailwind v4 + Framer Motion + self-hosted Inter (`@fontsource-variable/inter`, no Google Fonts call). Colour tokens in `src/app/globals.css`. — Claude account 1
- 2026-10-17 — README created first with design system, content source of truth, rules and handoff steps. — Claude account 1

## 12. Content Source Log

Every line on the site traces to the resume (R), the build guide (G) or the AI experience the owner confirmed (O). Wording may be tightened; facts may not change.

| Site element | Source |
|---|---|
| Name, title, email, phone, LinkedIn | R header |
| Location "Erode, India" | G (see D1). R says Gobichettipalayam |
| Hero one-liner, About lines, Contact line | G and section 5 (unchanged from v1) |
| Section headings | Kept from v1. The guide does not set them |
| Company names, places, role titles, dates | R Experience |
| Junior Team Member bullet | R: new features for UI/UX and API integration in the product-based app, Jamindhar. "Property management" comes from R Projects ("Manage Properties app") |
| Junior Application Developer Intern bullet | R: enhanced and handled the Android and web product-based app, Jamindhar |
| Blackstone Infomatics bullet | R: iOS integration for the real-time project application, Click. "Car booking" comes from R Projects |
| Codingmart bullets | R: time management, efficiency, and applying JavaScript to data structures and algorithms (split into two lines) |
| "Across these roles" (3 bullets) | R Roles and Responsibilities (it covers Click App and Jamindhar, not one company) |
| Jamindhar description, bullets, stack | R Projects, JAMINDHAR |
| Jamindhar period Jul 2025 – Feb 2026 | Derived: the span of the two U2 roles, both on Jamindhar. Not a stated project date |
| Click App description, bullet, stack | R Projects, Click App. The resume bullet is cut off mid-sentence ("featuring user-friendly"), so only "iOS integration" and "user-friendly design" are used. Do not complete the sentence |
| Click App period Nov 2024 – Apr 2025 | Derived: the Blackstone Infomatics role dates |
| AI Prompt Engineering section | G (Ready-to-Use Text) and O (section 5) |
| Skills | R Technical Skills. AI tools extended by O (D3) |
| Resume PDF | Not published. See D5 and D6 |
