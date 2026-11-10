import type { AdditionalProject, Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "article-hub",
    featured: {
      problem: "Writers, editors, and admins needed different permissions within one publishing workflow.",
      contribution: "I built the React interface, Express API, authentication, and PostgreSQL schema as a solo developer.",
      decision: "Enforced permissions in API middleware so access rules protect every client, not just the interface.",
      result: "A live publishing platform with an editorial workflow across three distinct roles.",
    },
    title: "Article Hub",
    tagline: "A multi-role publishing platform with RBAC, JWT auth, and a full CRUD editorial workflow.",
    year: "2025",
    role: "Full Stack Developer · Personal Project",
    status: "live",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    programmingLanguages: ["JavaScript", "CSS", "HTML"],
    stats: [
      { label: "Stack", value: "PERN" },
      { label: "Roles", value: "3 Types" },
      { label: "Type", value: "Full Stack" },
    ],
    links: {
      github: "https://github.com/mrrauf99/Article-Hub",
      live: "https://articlehub.me",
    },
    problem:
      "Most simple blog or CMS builds handle a single admin user. Article Hub needed to support writers, editors, and admins with genuinely different permissions and workflows, on a stack that could scale beyond a toy project while staying maintainable as a solo-built, production-facing app.",
    approach: [
      "Modeled roles (writer, editor, admin) at the database and API layer, not just in the UI, so permission checks couldn't be bypassed by hitting endpoints directly.",
      "Built a REST API in Express with JWT-based authentication and role-aware middleware guarding each route.",
      "Used PostgreSQL with a normalized schema for articles, users, and roles to keep data integrity as the feature set grew.",
      "Designed a responsive React frontend so the same editorial interface works for writers on mobile and editors on desktop.",
    ],
    keyDecisions: [
      {
        title: "Role-based access at the API layer",
        detail:
          "Permission checks live in middleware, not component logic, so the same rule protects every client that talks to the API, not just the current UI.",
      },
      {
        title: "PostgreSQL over a document store",
        detail:
          "Articles, authors, and roles are inherently relational; PostgreSQL's constraints and joins fit this workflow better than schemaless storage.",
      },
      {
        title: "JWT over session cookies",
        detail: "Kept the API stateless and easy to scale horizontally without a shared session store.",
      },
    ],
    outcomes: ["Deployed and live at articlehub.me", "Full CRUD editorial workflow across three distinct roles"],
  },
  {
    slug: "rcet-university-website",
    featured: {
      screenshot: {
        src: "/projects/rcet-university-website.webp",
        width: 1600,
        height: 844,
        alt: "RCET university website showing the campus, main navigation, and university information",
      },
      problem: "Inconsistent layouts, confusing navigation, and slow page loads made university information harder to find and created a frustrating browsing experience.",
      contribution: "I redesigned the university website's homepage and inner pages, restructured navigation, refined responsive layouts, and added an accessibility toolbar with text-size, font, color, and reading controls.",
      decision: "Grouped reading and display adjustments in a dedicated accessibility toolbar, alongside shared React layouts and content-led navigation.",
      result: "A complete university website redesign with consistent layouts, clearer navigation, and an accessibility toolbar that lets visitors adjust their reading experience.",
    },
    title: "RCET University Website",
    tagline: "A complete redesign of RCET's university website, from visual design and page structure to navigation and performance.",
    year: "2026",
    role: "Frontend Developer / University Project",
    status: "live",
    techStack: ["React", "Vite", "JavaScript", "Tailwind CSS", "Material UI"],
    programmingLanguages: ["JavaScript", "CSS"],
    stats: [
      { label: "Scope", value: "Full Website" },
      { label: "Focus", value: "Design & UX" },
      { label: "Type", value: "University Website" },
    ],
    links: {
      live: "https://rcet-official-website.vercel.app/",
    },
    problem:
      "My Computer Science department at Rachna College of Engineering and Technology, a constituent college of UET Lahore, asked me to overhaul the university website. Inconsistent layouts, confusing navigation, and poor performance meant visitors waited too long for pages to load and struggled to find information. Together, these issues created a frustrating browsing experience. The work covered the website as a whole: its visual design, page structure, functionality, and browsing experience.",
    approach: [
      "Redesigned the homepage and inner pages with consistent layouts, clearer content hierarchy, and a unified visual style.",
      "Restructured navigation and sub-navigation to make related information easier to find throughout the website.",
      "Fixed layout issues and refined responsive behavior to improve browsing across screen sizes.",
      "Added an accessibility toolbar with text-size and font adjustments, color settings, translation, and reading aids.",
      "Extended the website's functionality and improved accessibility, loading behavior, and frontend performance as part of the redesign.",
    ],
    keyDecisions: [
      {
        title: "Design the website as one connected experience",
        detail:
          "Applied shared layout and visual patterns across the homepage and inner pages so each section feels part of the same website and information is easier to scan.",
      },
      {
        title: "Let content guide the navigation",
        detail:
          "Organized menus and page-level navigation around related content, giving visitors clearer paths through the university's information.",
      },
      {
        title: "Treat usability as part of the redesign",
        detail:
          "Addressed responsiveness, accessibility, and loading performance alongside the visual work so the redesign improves how the website works as well as how it looks.",
      },
      {
        title: "Make accessibility controls part of the website",
        detail:
          "Grouped text-size, font, color, translation, and reading controls in one toolbar so visitors can adjust how they read and view the website.",
      },
    ],
    outcomes: [
      "Delivered a complete website redesign with consistent page layouts and a unified visual identity.",
      "Improved content organization and navigation across the homepage and inner sections.",
      "Integrated an accessibility toolbar with visitor-controlled text sizing, font options, color settings, translation, and reading aids.",
      "Expanded functionality and improved accessibility, responsiveness, and loading performance.",
    ],
  },
  {
    slug: "object-detection-app",
    title: "Object Detection App",
    tagline: "A cross-platform mobile app running real-time object detection entirely on-device.",
    year: "2025",
    role: "Mobile Developer (Solo)",
    status: "archived",
    techStack: ["Flutter", "TensorFlow Lite", "Dart"],
    programmingLanguages: ["Dart"],
    stats: [
      { label: "Platform", value: "iOS + Android" },
      { label: "Inference", value: "On-device" },
      { label: "Model", value: "TFLite" },
    ],
    links: {
      github: "https://github.com/mrrauf99/object-detection",
    },
    problem:
      "Cloud-based inference adds latency and a hard network dependency to what should feel like an instant camera feature. The goal was real-time object detection on a phone's live camera feed with zero cloud round-trip.",
    approach: [
      "Built the app in Flutter for a single codebase across iOS and Android.",
      "Converted a trained object detection model to TensorFlow Lite for on-device inference.",
      "Optimized the camera feed pipeline to keep frame processing fast enough to feel real-time on-device.",
    ],
    keyDecisions: [
      {
        title: "TensorFlow Lite over a cloud inference API",
        detail:
          "On-device inference removes network latency and lets the app work fully offline, critical for a live camera feature.",
      },
      {
        title: "Flutter for cross-platform delivery",
        detail: "One codebase for iOS and Android meant the on-device ML integration only had to be solved once.",
      },
    ],
    outcomes: [
      "Zero cloud dependency",
      "Fully offline object detection running entirely on-device",
      "Shipped for iOS and Android from one codebase",
    ],
  },
  {
    slug: "mehar-motors",
    featured: {
      screenshot: {
        src: "/projects/mehar-motors.webp",
        width: 1797,
        height: 993,
        alt: "Mehar Motors car rental website with fleet browsing and a vehicle preview",
      },
      problem: "Customers needed to browse cars and send rental inquiries without repeating their vehicle and travel details.",
      contribution: "I built the Next.js frontend, a ten-vehicle catalogue, and an inquiry flow that prepares a WhatsApp message.",
      decision: "Kept the client's preferred WhatsApp handoff, carrying the chosen vehicle, start date, and rental duration into the conversation.",
      result: "A live client website with ten vehicle listings and contextual booking inquiries. Rates are illustrative; bookings are confirmed by the team.",
    },
    title: "Mehar Motors",
    tagline: "A client car rental website with vehicle listings, daily rates, and booking inquiries through WhatsApp.",
    year: "2026",
    role: "Frontend Developer · Client Project",
    status: "live",
    techStack: ["Next.js", "React", "JavaScript", "CSS"],
    programmingLanguages: ["JavaScript", "CSS"],
    stats: [
      { label: "Fleet", value: "10 Vehicles" },
      { label: "Inquiries", value: "WhatsApp" },
      { label: "Type", value: "Client Website" },
    ],
    links: {
      github: "https://github.com/mrrauf99/Mehar_Motors",
      live: "https://meharmotors.vercel.app",
    },
    problem:
      "The client wanted customers to browse car models and daily rental prices, then contact the team directly. Booking inquiries needed to include the chosen vehicle and travel details so the team could check availability and provide a quote without asking customers to repeat their selection.",
    approach: [
      "Built a responsive Next.js website with a fleet of ten vehicles across sedans, SUVs, and a sports coupe, with sample daily rates in PKR.",
      "Created an inquiry flow where customers select a vehicle, start date, and rental duration before continuing to WhatsApp.",
      "Generated a prefilled WhatsApp message from the inquiry details so the customer can review and send it directly to the rental team.",
      "Included direct WhatsApp contact options and a before-you-book page to help customers understand the next steps.",
    ],
    keyDecisions: [
      {
        title: "WhatsApp for booking inquiries",
        detail:
          "Used the client's preferred contact channel for the handoff. The website prepares the message; the customer sends it in WhatsApp, where the team confirms availability, pricing, and booking details.",
      },
      {
        title: "Carry the vehicle and dates into the conversation",
        detail:
          "The message template includes the selected car, start date, and rental duration, giving the team the context needed to respond to an inquiry.",
      },
      {
        title: "Centralized fleet content",
        detail:
          "Kept vehicle information, image paths, and sample prices in a shared data file so the fleet can be updated consistently. Vehicle images are AI-generated concept renders, and final rates and availability are confirmed with the team.",
      },
    ],
    outcomes: [
      "Deployed and live at meharmotors.vercel.app",
      "Customers can browse ten vehicles and compare sample daily rental rates.",
      "Booking inquiries open WhatsApp with a prefilled message containing the selected vehicle and travel details.",
    ],
  },
  {
    slug: "the-food-foundry",
    title: "The Food Foundry",
    tagline: "A startup accelerator website with program information, a searchable startup showcase, and contact flows.",
    year: "2026",
    role: "Frontend Developer",
    status: "live",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    programmingLanguages: ["TypeScript", "CSS"],
    stats: [
      { label: "Audience", value: "Founders" },
      { label: "Showcase", value: "Search + Filter" },
      { label: "Type", value: "Marketing Website" },
    ],
    links: {
      github: "https://github.com/mrrauf99/The_Food_Foundry",
      live: "https://the-food-foundary.vercel.app",
    },
    problem:
      "Food Foundry is a Chicago-based community and accelerator for food and foodservice startups. The website needed to explain its programs, introduce its startup portfolio, and give founders a clear way to get in touch.",
    approach: [
      "Built program and company overview pages with a shared responsive layout and navigation.",
      "Created a searchable startup showcase with filtering to help visitors explore the portfolio.",
      "Added validated contact and newsletter forms, along with SEO metadata, a sitemap, and Open Graph support.",
    ],
    keyDecisions: [
      {
        title: "Make the startup portfolio easy to explore",
        detail: "Combined search and filtering so visitors can find relevant startups without reading through the entire showcase.",
      },
      {
        title: "Keep interaction accessible",
        detail: "Used keyboard-friendly components and reduced-motion support throughout the site, alongside form validation for clearer input feedback.",
      },
    ],
    outcomes: [
      "Live website covering accelerator programs, company information, and the startup portfolio.",
      "Searchable startup showcase and validated contact and newsletter forms.",
    ],
  },
  {
    slug: "ames-coffee",
    title: "Ames Coffee",
    tagline: "A coffee shop website bringing the menu, photo gallery, story, and location together on one page.",
    year: "2026",
    role: "Frontend Developer",
    status: "live",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Embla Carousel"],
    programmingLanguages: ["TypeScript", "CSS"],
    stats: [
      { label: "Format", value: "Single Page" },
      { label: "Gallery", value: "Embla" },
      { label: "Type", value: "Coffee Shop Website" },
    ],
    links: {
      github: "https://github.com/mrrauf99/Ames_Coffee",
      live: "https://ames-coffee.vercel.app",
    },
    problem:
      "Ames Coffee is a walk-up coffee window in Albion, Brisbane. The website needed to introduce the place, show its drinks and atmosphere, and help visitors find the coffee window without making them navigate through multiple pages.",
    approach: [
      "Built a single-page marketing website using Next.js, TypeScript, and Tailwind CSS.",
      "Organized the menu, gallery, story, and location into one continuous browsing experience.",
      "Used Embla Carousel for the photo gallery to let visitors browse images of the coffee shop.",
    ],
    keyDecisions: [
      {
        title: "Keep the visit information on one page",
        detail: "Placed the menu and directions alongside the shop's story so visitors can learn about the coffee window and plan a visit in the same flow.",
      },
      {
        title: "Show the place through photography",
        detail: "Used a photo gallery to introduce the coffee shop's atmosphere, with Embla Carousel handling the gallery interaction.",
      },
    ],
    outcomes: [
      "Deployed and live at ames-coffee.vercel.app.",
      "Menu, gallery, story, and location available in one page.",
    ],
  },
  {
    slug: "symptom-checker-ai",
    title: "Symptom Checker AI",
    tagline: "An educational machine learning prototype that classifies symptom inputs; not a diagnostic tool.",
    year: "2025",
    role: "ML Engineer (Solo)",
    status: "archived",
    techStack: ["Python", "Machine Learning", "scikit-learn", "Flask"],
    programmingLanguages: ["Python", "JavaScript", "CSS", "HTML"],
    stats: [
      { label: "Scope", value: "Educational" },
      { label: "Model", value: "scikit-learn" },
      { label: "Type", value: "ML / AI" },
    ],
    links: {
      github: "https://github.com/mrrauf99/symptom-checker-ai",
    },
    problem:
      "Turning a list of self-reported symptoms into a useful, non-alarming set of possible conditions is a classification problem with real stakes: the model needs to be accurate enough to be useful and clear enough that users understand it's a starting point, not a diagnosis.",
    approach: [
      "Trained and evaluated multiple scikit-learn classification models against a labeled medical symptom dataset.",
      "Applied feature engineering to map free-form symptom input onto the model's expected feature set.",
      "Exposed the trained model through a Flask REST API, with a simple frontend for entering symptoms and reviewing predictions.",
    ],
    keyDecisions: [
      {
        title: "scikit-learn over a deep learning model",
        detail:
          "The dataset size and feature structure suited classical ML better than a neural network, and kept the model interpretable and fast to iterate on.",
      },
      {
        title: "Flask API boundary",
        detail: "Separating the model behind a REST API keeps the ML pipeline swappable without touching the frontend.",
      },
    ],
    outcomes: [
      "Built a symptom-classification prototype with a Flask API and a symptom-entry interface.",
      "This is an educational project, not a diagnostic tool. No independently verified accuracy benchmark or clinical validation is claimed.",
    ],
  },
  {
    slug: "botguard-lab",
    title: "BotGuard Lab",
    tagline: "Real-time bot detection using behavioral fingerprinting instead of simple rate-limiting.",
    year: "2025",
    role: "Full Stack Developer (Solo)",
    status: "in-progress",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    programmingLanguages: ["JavaScript", "CSS", "HTML"],
    stats: [
      { label: "Stack", value: "MERN" },
      { label: "Detection", value: "Real-time" },
      { label: "Type", value: "Security Platform" },
    ],
    links: {
      github: "https://github.com/mrrauf99/botguard-lab",
    },
    problem:
      "Traditional bot mitigation, like IP rate-limits and CAPTCHAs, is easy to evade and often punishes real users. BotGuard Lab explores whether behavioral signals such as mouse movement, timing, and request patterns can flag automated traffic more reliably and with less friction for legitimate users.",
    approach: [
      "Built a MERN app that ingests live traffic events over WebSocket and scores sessions against behavioral heuristics in real time.",
      "Designed a dashboard that surfaces flagged sessions with the signals that triggered the flag, rather than a black-box score.",
      "Kept the detection engine decoupled from the dashboard so the heuristics can evolve independently of the UI.",
    ],
    keyDecisions: [
      {
        title: "Heuristic scoring over a black-box model",
        detail:
          "Chose interpretable behavioral rules first so flagged traffic comes with a reason, which matters for anyone reviewing false positives.",
      },
      {
        title: "WebSocket over polling",
        detail:
          "Real-time analytics needed sub-second updates; a WebSocket connection avoided the overhead of a polling loop per connected session.",
      },
    ],
    outcomes: ["Real-time dashboard with live behavioral analytics"],
  },
];

export const additionalProjects: AdditionalProject[] = [
  {
    slug: "school-management-system-gui",
    title: "School Management System GUI",
    description: "Desktop GUI application for managing school operations including students, grades, and staff records.",
    techStack: ["C#", ".NET", "Windows Forms"],
    github: "https://github.com/mrrauf99/School-Management-System-GUI",
  },
  {
    slug: "medical-store-system",
    title: "Medical Store System",
    description: "Inventory and billing system for managing medicines, stock levels, and sales in a medical store.",
    techStack: ["C#", "SQL Server", ".NET"],
    github: "https://github.com/mrrauf99/Medical-Store-System",
  },
  {
    slug: "joke-zone",
    title: "Joke Zone",
    description: "Comedy app fetching fresh developer jokes from an API with themed UI and share functionality.",
    techStack: ["JavaScript", "REST API", "HTML5"],
    github: "https://github.com/mrrauf99/Joke-Zone",
    live: "https://joke-zone.onrender.com",
  },
  {
    slug: "tic-tac-toe-game",
    title: "Tic-Tac-Toe Game",
    description: "Classic Tic-Tac-Toe game with interactive UI and win/draw detection logic.",
    techStack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/mrrauf99/Tic-Tac-Toe",
    live: "https://tic-tac-toe-teal-eta-58.vercel.app",
  },
  {
    slug: "simon-game",
    title: "Simon Game",
    description: "Memory skills game where players repeat increasingly long sequences of colors and sounds.",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/mrrauf99/Simon-Game",
    live: "https://simon-game-eight-tan.vercel.app",
  },
];
