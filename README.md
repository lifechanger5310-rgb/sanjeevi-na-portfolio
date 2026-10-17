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

## 8. Decisions Log

| ID | Decision | Why |
|---|---|---|
| D1 | Location on site = **Erode, India** | The guide says so. The resume says Gobichettipalayam, which is in Erode district. One-line change if the owner wants the resume wording. |
| D2 | Repo name = `sanjeevi-na-portfolio` | The guide, step 0. An older, different-design repo `sanjeevi-portfolio` exists under the same GitHub account. **Do not touch or merge it.** |
| D3 | The resume lists AI tools Cursor, Perplexity, Claude; the guide adds Grok, Gemini, ChatGPT, Z Ai | Owner confirmed the extra tools. |
| D4 | Optional intro video skipped in v1 | Guide says skip if time is tight. A CSS/Framer abstract hero accent is allowed later. |
| D5 | Resume file is not added to the repo | Contains personal data. Add only if the owner asks. |

## 9. Accounts, Deploy and Environment

- GitHub account: `lifechanger5310-rgb`
- Repo: https://github.com/lifechanger5310-rgb/sanjeevi-na-portfolio (public)
- Deploy: Vercel, linked to the same GitHub account. The Vercel GitHub app must have access to this repo.
- Production URL: _fill in after first deploy_
- **Secrets:** a GitHub token was shared in chat to push code. It is NOT stored anywhere in this repo. Each new Claude account must get its own token from the owner in chat (use a fine-grained token limited to this repo) and must never write it into files, git remotes or this README.

**Code map**
- `src/data/content.ts` — ALL site text (edit content here only)
- `src/app/globals.css` — locked colour tokens + Inter font
- `src/app/page.tsx` — section order
- `src/sections/*` — Hero, About, Experience, Projects, AIPromptEngineering, Skills, Contact
- `src/components/*` — Navbar, Section, SectionHeading, Reveal, Card, Tag, ButtonLink

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

**Next action for the next chat:** Step 4 — deploy to Vercel, then test the live link on a phone and tick the last checklist items.
Code is already pushed to `main`. The Claude Vercel connector got `403 forbidden` when creating the project, so the owner must import it once in the Vercel dashboard: vercel.com → team `livechanger` → Add New → Project → Import `lifechanger5310-rgb/sanjeevi-na-portfolio` → Framework Next.js (auto) → Deploy. After that, every push to `main` redeploys. Then fill the Production URL in section 9.

- [x] **Step 0 — README created first** (this file)
- [x] **Step 1 — Project setup:** Next.js + TypeScript + Tailwind + Framer Motion; colour variables in `globals.css`; folders `components/`, `sections/`, `app/`
- [x] **Step 2a — Hero + sticky nav**
- [x] **Step 2b — About + Experience**
- [x] **Step 2c — Projects + AI Prompt Engineering**
- [x] **Step 2d — Skills + Contact**
- [x] **Step 3 — Motion + mobile polish** (done in code, checked at 375px and 1280px in headless Chromium; still test on a real phone after deploy) (Framer Motion reveals, hover states, check 375px)
- [ ] **Step 4 — Deploy to Vercel** and test live link on phone and desktop
- [ ] **Step 5 — Final checklist** (below) and update this README

### Final checklist (from the guide)

- [x] Name and title correct
- [x] Location shows Erode, India
- [x] All three company experiences present with real dates
- [x] Jamindhar and Click App described honestly
- [x] AI Prompt Engineering section short, professional, true
- [x] No generic AI visual style
- [x] Animations smooth and helpful
- [ ] Works well on mobile
- [x] Email, phone and LinkedIn correct and clickable
- [ ] Live Vercel link opens without error
- [ ] README up to date

## 11. Change Log

Newest first. One line per change: date (IST) — what — which chat/account.

- 2026-10-17 — Pushed `main` to GitHub (empty repo was created by the owner). Vercel connector could not create the project (403); dashboard import needed. — Claude account 1
- 2026-10-17 — Built all 7 sections (Hero, About, Experience, Projects, AI Prompt Engineering, Skills, Contact), sticky nav with mobile menu, Framer Motion reveals/hover/stagger with reduced-motion support. `npm run build` passes. No horizontal overflow at 375px. — Claude account 1
- 2026-10-17 — Project setup: Next.js 15 (App Router) + TypeScript + Tailwind v4 + Framer Motion + self-hosted Inter (`@fontsource-variable/inter`, no Google Fonts call). Colour tokens in `src/app/globals.css`. — Claude account 1
- 2026-10-17 — README created first with design system, content source of truth, rules and handoff steps. — Claude account 1
