// Single source of truth for all site text. Only real resume data + confirmed AI experience.
// See README section 5 (and section 12 for where each line comes from). Do not invent projects, numbers, or dates.

export const profile = {
  name: "Sanjeevi N A",
  title: "Frontend Web & Mobile Application Developer",
  oneLiner:
    "Building clean mobile and web apps with Flutter, iOS, and modern web tools. Using AI prompting to learn fast and deliver reliable code.",
  location: "Erode, India",
  email: "sanjeevikavin@gmail.com",
  phone: "+91 6379604196",
  phoneHref: "tel:+916379604196",
  linkedin: "https://linkedin.com/in/sanjeevi-n-a-0758ba235",
  linkedinLabel: "linkedin.com/in/sanjeevi-n-a-0758ba235",
  // File lives in /public. To replace it with the original resume, overwrite the PDF with the same name.
  resumeUrl: "/Sanjeevi_N_A_Resume.pdf",
  resumeFileName: "Sanjeevi_N_A_Resume.pdf",
};

export const about = {
  heading: "Frontend developer across mobile and web",
  lead: "I am a Frontend Web and Mobile Application Developer based in Erode, India.",
  body: [
    "I have worked on real product apps using Flutter, iOS (Swift and UIKit), and web technologies such as Next.js and React.",
    "When a project needed web development, I used AI tools to understand new concepts quickly and write clean, readable code.",
    "I enjoy solving UI/UX problems and building features that are easy to use.",
  ],
};

export type Role = { title: string; period: string; points: string[] };
export type Experience = { company: string; place: string; roles: Role[] };

export const experience: Experience[] = [
  {
    company: "U2 Breakthrough Technologies",
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
        points: ["Worked on iOS integration for Click App, a real-time car booking application."],
      },
    ],
  },
  {
    company: "Codingmart Technologies",
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
    meta: "U2 Breakthrough Technologies · Jul 2025 – Feb 2026",
    description:
      "A property management app that helps managers track occupancy, rent collection and maintenance. The web app has employee and owner logins, plus a separate admin login web app.",
    stack: ["Flutter", "Dart", "Next.js", "React", "React Bootstrap", "TypeScript", "JavaScript"],
  },
  {
    name: "Click App",
    meta: "Blackstone Infomatics · Nov 2024 – Apr 2025",
    description: "A real-time car booking application. I handled the iOS integration with a user-friendly design.",
    stack: ["Flutter", "iOS"],
  },
];

export const aiSection = {
  heading: "Working with AI tools every day",
  intro:
    "For the past year I have worked daily with multiple AI platforms, choosing the right one for each job instead of relying on a single tool.",
  points: [
    "Code generation and debugging.",
    "Explaining unfamiliar concepts quickly.",
    "Research and comparing approaches.",
    "Reading and understanding the code before it ships.",
  ],
  tools: ["Claude", "Perplexity", "Grok", "Gemini", "ChatGPT", "Cursor"],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Dart", "Swift", "Java"] },
  {
    group: "Frameworks",
    items: ["Next.js", "React", "React Bootstrap", "Tailwind CSS", "Flutter", "UIKit", "MVC", "MVVM"],
  },
  { group: "Backend", items: ["Firebase (BaaS)", "SQL"] },
  { group: "Tools", items: ["VS Code", "Xcode", "Android Studio", "SoapUI", "GitHub"] },
  { group: "AI Tools", items: ["Claude", "Perplexity", "Grok", "Gemini", "ChatGPT", "Z Ai", "Cursor"] },
];

/** Section ids in page order. The nav and the active-link logic both read this. */
export const nav = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "AI", id: "ai" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];
