export type CourseTechnologyGroup = {
  title: string;
  items: string[];
};

export type CourseWeeklyItem = {
  title: string;
  description: string;
};

export type CourseData = {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  heroHighlights: string[];
  overview: string[];
  technologies: CourseTechnologyGroup[];
  weeklyStructure: CourseWeeklyItem[];
  outcomes: string[];
  fees: string;
  ctaLabel: string;
  ctaSubheading: string;
  idealFor: string[];
  deliveryMode: string;
  duration: string;
  tools: string[];
  accentColor: string;
  metaDescription: string;
};

export const courses: CourseData[] = [
  {
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    tagline: "Ship real products across the stack.",
    shortDescription:
      "Master React, Node.js, modern databases, and production deployments with weekly launch-ready projects.",
    description:
      "Become a professional full stack engineer in a production-style environment. Learn to plan, build, and deploy end-to-end applications that scale.",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Developers collaborating on a web application",
    heroHighlights: [
      "Daily 60-minute live task sprint",
      "Weekly end-to-end production project",
      "Live doubt-solving with senior engineers",
    ],
    overview: [
      "Become a professional Full Stack Web Developer with real, hands-on industry experience and a strong understanding of how production systems actually work.",
      "This course takes you from absolute fundamentals to advanced concepts — covering front-end (React.js, Tailwind, Bootstrap), backend (Node.js, Express.js, Sequelize), and databases (MySQL, PostgreSQL, MongoDB).",
      "You’ll learn how to design RESTful APIs, handle authentication, manage data models, and build complete client-server applications from scratch.",
      "Understand how to deploy your applications using real-world platforms like AWS EC2, S3, Render, Vercel, and Hostinger VPS — just like professional developers do in production.",
      "We also cover DevOps fundamentals, including CI/CD pipelines with GitHub Actions, domain configuration, SSL setup, and cloud file storage management.",
      "Every week, you’ll work on live mini-projects that help you apply what you’ve learned instantly — building a strong portfolio that proves your practical skills.",
      "By the end of this course, you won’t just ‘know’ web development — you’ll be able to build, deploy, and manage full-scale applications confidently, just like developers working in tech companies today."
    ],
    technologies: [
      {
        title: "Frontend",
        items: ["React.js", "Tailwind CSS", "Bootstrap"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express.js", "Sequelize ORM"],
      },
      {
        title: "Databases",
        items: ["MySQL", "PostgreSQL", "MongoDB"],
      },
      {
        title: "DevOps & Hosting",
        items: [
          "AWS EC2",
          "AWS S3",
          "CI/CD with GitHub Actions",
          "Vercel",
          "Netlify",
          "Render",
          "Hostinger VPS",
        ],
      },
      {
        title: "Collaboration & Cloud Tools",
        items: ["Git", "GitHub", "Firebase", "Google Cloud"],
      },
    ],
    weeklyStructure: [
      {
        title: "Focused Daily Tasks",
        description:
          "⏱️ 1-hour guided learning path every day to build momentum without burnout.",
      },
      {
        title: "Weekly Production Project",
        description:
          "🚀 Ship one real-world project each week to deepen understanding and build your portfolio.",
      },
      {
        title: "Rapid Doubt Resolution",
        description:
          "💬 Live channels and office hours to unblock you in minutes, not days.",
      },
      {
        title: "Live Online Huddles",
        description:
          "🧑‍💻 Join from anywhere with collaborative standups, demos, and feedback sessions.",
      },
    ],
    outcomes: [
      "Build full production-level applications from idea to deployment.",
      "Handle databases, APIs, and hosting workflows independently.",
      "Become job-ready for roles like MERN Stack Developer or Full Stack Developer.",
    ],
    fees: "₹2000/month",
    ctaLabel: "Apply for the next cohort",
    ctaSubheading: "Flexible online batches • Pay monthly • Join anytime",
    idealFor: [
      "Aspiring MERN/Full Stack Developers",
      "Backend engineers growing into full stack roles",
      "Founders who want to ship MVPs themselves",
    ],
    deliveryMode: "Live online • Project-based learning",
    duration: "Ongoing enrollment • New project every week",
    tools: ["React", "Node.js", "AWS", "GitHub Actions"],
    accentColor: "from-blue-500/60 via-purple-500/60 to-blue-500/20",
    metaDescription:
      "Join the Full Stack Web Development course to master React, Node.js, and production deployments with weekly real-world projects.",
  },
  {
    slug: "react-native-mobile-app-development",
    title: "Mobile App Development (React Native)",
    tagline: "Launch cross-platform apps people love.",
    shortDescription:
      "Build performant Android and iOS apps with React Native, real APIs, and app store-ready workflows.",
    description:
      "Learn to architect cross-platform mobile applications using React Native and Expo. Connect to live APIs, manage authentication, and ship production builds confidently.",
    heroImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Designer working on a mobile application prototype",
    heroHighlights: [
      "React Native deep dives with Expo and bare workflows",
      "Weekly app builds across product categories",
      "Launch-ready Play Store deployment guidance",
    ],
    overview: [
      "Learn to build high-performance, cross-platform mobile apps for both Android and iOS using React Native — the same technology used by major apps like Instagram and Uber Eats.",
      "Start from the fundamentals of React Native components, styling, navigation, and move toward integrating APIs, authentication, and real-time databases.",
      "Understand how to connect mobile apps to secure and scalable backend APIs built with Node.js and Express.",
      "Work with Firebase for authentication, push notifications, and cloud storage, as well as AWS S3 for managing media files.",
      "Learn how to handle app state using Context API and Redux, manage offline data, and ensure smooth user experiences.",
      "Deploy production-ready apps confidently to the Google Play Console and learn the complete lifecycle — from development to publishing updates.",
      "Each week you’ll build functional apps like to-do lists, chat systems, booking apps, and social-style feeds — giving you a strong portfolio and job-ready experience.",
      "By the end of this course, you’ll have the skills to design, build, and deploy professional mobile apps connected to real-world APIs, ready for production environments."
    ],
    
    technologies: [
      {
        title: "Core Stack",
        items: ["React Native Fundamentals", "Expo", "Native Components"],
      },
      {
        title: "API & Backend",
        items: ["Axios", "Fetch", "Node.js", "Express"],
      },
      {
        title: "Cloud & Integrations",
        items: ["Firebase Auth", "Firebase Push Notifications", "AWS S3"],
      },
      {
        title: "Data Layer",
        items: ["MongoDB", "MySQL", "Offline storage strategies"],
      },
      {
        title: "Deployment",
        items: ["Google Play Console", "OTA updates", "Release automation"],
      },
    ],
    weeklyStructure: [
      {
        title: "Daily Skill Sprint",
        description:
          "⏱️ 1-hour focused implementation drills covering UI, state, and API flows.",
      },
      {
        title: "Weekly App Launch",
        description:
          "🚀 Build apps like to-do, chat, booking, and commerce to expand your portfolio.",
      },
      {
        title: "Mentor-Led Doubt Clinics",
        description:
          "💬 Get answers fast with live troubleshooting and code reviews.",
      },
      {
        title: "Flexible Live Classes",
        description:
          "🧑‍💻 Interactive online sessions that fit your schedule, plus recordings when you need them.",
      },
    ],
    outcomes: [
      "Build and deploy full-featured mobile apps with production-ready architecture.",
      "Integrate APIs, manage authentication, and implement real-time features.",
      "Launch apps on the Play Store and prep for App Store submission.",
      "Become a React Native Mobile App Developer ready for freelance or product roles.",
    ],
    fees: "₹2000/month",
    ctaLabel: "Reserve your seat",
    ctaSubheading: "Limited seats • Weekly new projects • Pay as you go",
    idealFor: [
      "Frontend devs jumping into mobile",
      "React developers expanding to native apps",
      "Entrepreneurs prototyping mobile-first ideas",
    ],
    deliveryMode: "Live online • Project reviews • Deployment walkthroughs",
    duration: "Join anytime • Weekly themed app builds",
    tools: ["React Native", "Expo", "Firebase", "AWS S3"],
    accentColor: "from-emerald-500/60 via-teal-500/60 to-emerald-500/20",
    metaDescription:
      "Become a React Native Mobile App Developer with hands-on projects, API integrations, and guided Play Store deployments.",
  },
  {
    slug: "devops-and-cloud-deployment",
    title: "DevOps & Cloud Deployment Mastery",
    tagline: "Automate delivery. Orchestrate cloud infrastructure.",
    shortDescription:
      "Deploy, monitor, and automate full stack applications using modern DevOps tooling and cloud platforms.",
    description:
      "Understand real-world DevOps workflows for scaling applications. Learn provisioning, CI/CD, observability, and multi-environment strategies used by high-performing teams.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Engineer managing cloud infrastructure in a control center",
    heroHighlights: [
      "Hands-on cloud deployment labs",
      "CI/CD automation with GitHub Actions",
      "Production-ready monitoring & rollback playbooks",
    ],
    overview: [
      "Learn how to deploy, monitor, and automate full-stack applications using the latest DevOps and cloud technologies practiced in the industry today.",
      "Gain a deep understanding of how production environments work — from code deployment and server management to monitoring, scaling, and troubleshooting live systems.",
      "Work hands-on with VPS servers (Hostinger, AWS EC2) to deploy Node.js, Express, and React.js applications with Nginx and PM2.",
      "Master AWS services like S3 for media storage, EC2 for hosting, and Route 53 for domain management, along with Firebase and Google Cloud for backend automation.",
      "Set up real CI/CD pipelines using GitHub Actions to automate testing, build, and deployment processes — just like professional development teams do.",
      "Learn SSL certificate setup, environment variable management, and reverse proxy configuration for secure, production-grade deployments.",
      "Practice creating multi-environment setups (Development, Staging, Production) to ensure smooth and reliable release cycles.",
      "By the end of this course, you’ll be able to handle complete application deployment pipelines independently — from server setup to live monitoring — making you a DevOps-ready full stack professional."
    ],
    
    technologies: [
      {
        title: "Infrastructure & Hosting",
        items: ["Hostinger VPS", "AWS EC2", "AWS S3", "Render"],
      },
      {
        title: "Deployment Stack",
        items: ["Node.js apps", "React.js apps", "Nginx reverse proxy", "SSL automation"],
      },
      {
        title: "Automation & CI/CD",
        items: ["GitHub Actions", "Shell scripting", "Zero-downtime deployments"],
      },
      {
        title: "Observability",
        items: ["Monitoring", "Logging", "Automated backups"],
      },
      {
        title: "Environments",
        items: ["Dev", "Stage", "Prod with guardrails"],
      },
    ],
    weeklyStructure: [
      {
        title: "Daily Lab Challenge",
        description:
          "⏱️ 1-hour scenario-based lab to practice automation, scaling, and incident response.",
      },
      {
        title: "Weekly Deployment Project",
        description:
          "🚀 Complete CI/CD, AWS S3 setup, or blue-green deployment projects every week.",
      },
      {
        title: "Live War-Room Sessions",
        description:
          "💬 Dive into production incidents, logs, and monitoring dashboards with mentors.",
      },
      {
        title: "Flexible Cloud Meetups",
        description:
          "🧑‍💻 Join live from anywhere to collaborate on infrastructure design and reviews.",
      },
    ],
    outcomes: [
      "Deploy, scale, and secure full stack applications in production environments.",
      "Design CI/CD pipelines and automate routine delivery tasks.",
      "Manage cloud infrastructure with confidence across dev, stage, and prod.",
      "Step into DevOps engineer or SRE-ready responsibilities.",
    ],
    fees: "₹2000/month",
    ctaLabel: "Start automating",
    ctaSubheading: "Hands-on labs • Industry mentors • Pay monthly",
    idealFor: [
      "Full stack developers taking on DevOps responsibilities",
      "System admins growing into cloud engineers",
      "Tech leads standardising delivery pipelines",
    ],
    deliveryMode: "Live online • Lab-first learning • Real production scenarios",
    duration: "Continuous cohorts • Weekly immersive projects",
    tools: ["AWS", "Nginx", "GitHub Actions", "Docker"],
    accentColor: "from-orange-500/60 via-pink-500/60 to-orange-500/20",
    metaDescription:
      "Master DevOps and cloud deployment with hands-on labs covering CI/CD, AWS infrastructure, monitoring, and production automation.",
  },
];

export const whyUsPoints = [
  {
    title: "Industrial Knowledge",
    description:
      "Our mentors are working professionals who share battle-tested production experience, not just theory.",
    icon: "✅",
  },
  {
    title: "Project-Based Learning",
    description:
      "Every single week you complete a shipped project, building a portfolio employers want to see.",
    icon: "✅",
  },
  {
    title: "Practical + Deployment",
    description:
      "We cover the entire lifecycle—from coding to hosting—so you can launch real products end to end.",
    icon: "✅",
  },
  {
    title: "Flexible Timings",
    description:
      "Join from anywhere with live online sessions, recordings, and mentor support that fits your schedule.",
    icon: "✅",
  },
  {
    title: "Affordable Learning",
    description:
      "All-access learning for just ₹2000 per month with no hidden or surprise costs.",
    icon: "✅",
  },
  {
    title: "Career Guidance",
    description:
      "Get mentorship on resumes, portfolio storytelling, and interview preparation tailored to your goals.",
    icon: "✅",
  },
];


