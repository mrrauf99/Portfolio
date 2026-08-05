import type { AdditionalProject, Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "article-hub",
    title: "Article Hub",
    tagline: "A multi-role publishing platform with RBAC, JWT auth, and a full CRUD editorial workflow.",
    year: "2025",
    role: "Full Stack Developer (Solo)",
    status: "live",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
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
    slug: "botguard-lab",
    title: "BotGuard Lab",
    tagline: "Real-time bot detection using behavioral fingerprinting instead of simple rate-limiting.",
    year: "2025",
    role: "Full Stack Developer (Solo)",
    status: "in-progress",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
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
  {
    slug: "symptom-checker-ai",
    title: "Symptom Checker AI",
    tagline: "A machine learning healthcare assistant that predicts likely conditions from reported symptoms.",
    year: "2025",
    role: "ML Engineer (Solo)",
    status: "archived",
    techStack: ["Python", "Machine Learning", "scikit-learn", "Flask"],
    stats: [
      { label: "Accuracy", value: "92%+" },
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
    outcomes: ["92%+ prediction accuracy on the evaluation set"],
  },
  {
    slug: "object-detection-app",
    title: "Object Detection App",
    tagline: "A cross-platform mobile app running real-time object detection entirely on-device.",
    year: "2025",
    role: "Mobile Developer (Solo)",
    status: "archived",
    techStack: ["Flutter", "TensorFlow Lite", "Dart"],
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
  {
    slug: "the-food-foundry",
    title: "The Food Foundry",
    description:
      "Marketing site for a Chicago-based startup accelerator for food and foodservice founders, with program info, a startup showcase, and contact flows.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mrrauf99/The_Food_Foundry",
    live: "https://the-food-foundry.vercel.app",
  },
];
