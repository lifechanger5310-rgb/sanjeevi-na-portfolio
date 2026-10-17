// Single source of truth for all site text. Only real resume data + confirmed AI experience.
// See README section 5 (and section 12 for where each line comes from). Do not invent projects, numbers, or dates.

export const profile = {
  name: "Sanjeevi N A",
  title: "Frontend Web & Mobile Application Developer",
  oneLiner:
    "Building clean mobile and web apps with Flutter, iOS, and modern web tools. Using AI prompting to learn fast and deliver reliable code.",
  location: "Erode, India",
  email: "sanjeevikavin@gmail.com",
  phone: "+91 63796 04196",
  phoneHref: "tel:+916379604196",
  linkedin: "https://linkedin.com/in/sanjeevi-n-a-0758ba235",
  // Download Resume buttons are built but OFF while resumeUrl is empty (README D5/D6).
  // To turn on: put the PDF in /public, then set resumeUrl to "/Sanjeevi_N_A_Resume.pdf".
  resumeUrl: "",
  resumeFileName: "Sanjeevi_N_A_Resume.pdf",
};

export const about = [
  "I am a Frontend Web and Mobile Application Developer based in Erode, India.",
  "I have worked on real product apps using Flutter, native iOS (Swift + UIKit), and web technologies (Next.js, React).",
  "When the company needed web development, I used AI tools to understand new concepts quickly and write clean code.",
  "I enjoy solving UI/UX problems and building features that users find easy to use.",
];

export type Role = { title: string; period: string; points: string[] };
export type Experience = { company: string; place: string; roles: Role[] };

export const experience: Experience[] = [
  {
    company: "U2 Breakthrough Technologies Pvt Ltd",
    place: "Coimbatore",
    roles: [
      {
        title: "Junior Team Member",
        period: "Nov 2025 – Feb 2026",
        points: [
          "Worked on updating and implementing new features for UI/UX and API integration in Jamindhar, a product-based property management app.",
        ],
      },
      {
        title: "Junior Application Developer Intern",
        period: "Jul 2025 – Oct 2025",
        points: ["Enhanced and handled the Android and web versions of Jamindhar."],
      },
    ],
  },
  {
    company: "Blackstone Infomatics",
    place: "Coimbatore",
    roles: [
      {
        title: "Flutter iOS App Developer",
        period: "Nov 2024 – Apr 2025",
        points: ["Worked on iOS integration for Click, a real-time car booking application."],
      },
    ],
  },
  {
    company: "Codingmart Technologies Pvt Ltd",
    place: "Coimbatore",
    roles: [
      {
        title: "Intern Product Engineer",
        period: "Jan 2023 – Feb 2023",
        points: [
          "Gained proficiency in time management and efficiency.",
          "Applied JavaScript to data structures and algorithms.",
        ],
      },
    ],
  },
];

/** From the resume's "Roles and Responsibilities" (it covers Click App and Jamindhar, not one company). */
export const acrossRoles = [
  "Worked on the real-time projects Click App and Jamindhar.",
  "Designed and developed applications for iOS, Android and web platforms.",
  "Identified and fixed bugs. Integrated APIs, analyzed payloads and responses, and raised issues for API problems.",
];

export const projects = [
  {
    name: "Jamindhar",
    kind: "Property management app",
    company: "U2 Breakthrough Technologies Pvt Ltd",
    period: "Jul 2025 – Feb 2026",
    description: "A Manage Properties app that helps property managers track occupancy, rent collection and maintenance.",
    points: [
      "Employee and owner logins in the web app, plus a separate admin login web app.",
      "UI/UX and API integrations for the Android and web versions.",
    ],
    stack: ["Flutter", "Dart", "Next.js", "React", "React Bootstrap", "TypeScript", "JavaScript"],
  },
  {
    name: "Click App",
    kind: "Car booking app",
    company: "Blackstone Infomatics",
    period: "Nov 2024 – Apr 2025",
    description: "A real-time car booking application.",
    points: ["I handled the iOS integration with a user-friendly design."],
    stack: ["Flutter", "iOS"],
  },
];

export const aiSection = {
  intro:
    "For the past year I have worked daily with multiple AI platforms: Claude, Perplexity, Grok, Gemini, ChatGPT and others.",
  points: [
    "Learned which tool works best for each task: code generation, debugging, concept explanation and research.",
    "Delivers features faster and with fewer bugs.",
    "Understands every line of code that ships.",
  ],
  tools: ["Claude", "Perplexity", "Grok", "Gemini", "ChatGPT", "Z Ai", "Cursor"],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Dart", "Swift", "Java"] },
  { group: "Frameworks & Libraries", items: ["Next.js", "React", "React Bootstrap", "Tailwind CSS", "Flutter", "UIKit"] },
  { group: "Backend & Data", items: ["Firebase (BaaS)", "SQL"] },
  { group: "Patterns", items: ["MVC", "MVVM"] },
  { group: "Tools", items: ["VS Code", "Xcode", "Android Studio", "SoapUI", "GitHub"] },
  { group: "AI Tools", items: ["Claude", "Perplexity", "Grok", "Gemini", "ChatGPT", "Z Ai", "Cursor"] },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
