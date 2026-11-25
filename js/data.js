/**
 * Portfolio Data Source of Truth for Vidhi Patel
 * Derived strictly from portfolio_data.md
 * 
 * Rules applied:
 * - Exact spelling of name, organizations, qualifications, dates, contact details, and skills.
 * - No invented employers, projects, metrics, grades, tools, links, or achievements.
 * - Single academic project: Sponsorly.
 * - No unconfirmed fields shown.
 */

const portfolioData = {
  identity: {
    fullName: "Vidhi Patel",
    displayName: "Vidhi Patel",
    headline: "Information Technology Student",
    graduationYearMentioned: 2026,
    shortIntro: "Information Technology student interested in building thoughtful digital experiences through code, design, and documentation.",
    heroRoleLine: "Information Technology Student · Python · Data Science · UI/UX · Web Development",
    tone: "Thoughtful, modern, capable, curious, detail-oriented, and professional"
  },

  contact: {
    email: "patelvidhi5907@gmail.com",
    linkedin: "https://www.linkedin.com/in/vidhi-patel-553145364"
  },

  summary: {
    websiteVersion: "I am an Information Technology student pursuing my Bachelor's degree, with internship experience across Python programming, Data Science, and Machine Learning. My interests and skills span web development, UI/UX design, software documentation, and core computer science concepts. I enjoy bringing structure to ideas—through thoughtful interfaces, clear documentation, and practical technical problem-solving.",
    resumeVersion: "Motivated Information Technology student (pursuing B.Tech, 2026) with hands-on internship experience in Python, Data Science, and Web Development. Skilled in UI/UX design, documentation (SRS), and core computer science concepts."
  },

  education: [
    {
      qualification: "Bachelor's Degree in Information Technology",
      institution: "JG University",
      status: "Pursuing",
      year: "Expected 2026",
      yearDetail: "Graduation year stated: 2026",
      highlight: "In Progress",
      score: null
    },
    {
      qualification: "Diploma in Information Technology",
      institution: "Sal Institute of Diploma Studies",
      status: "Completed",
      year: null,
      highlight: "CGPA: 8.03",
      score: "8.03 CGPA"
    },
    {
      qualification: "Class X",
      institution: "Nalanda Vidyalay",
      board: "Gujarat Board",
      status: "Completed",
      year: "2023",
      highlight: "63%",
      score: "63%"
    }
  ],

  skills: {
    categories: [
      {
        title: "Programming Languages & Web",
        icon: "code",
        description: "Languages and foundational markup for software and web applications.",
        items: ["Python", "Java", "JavaScript", "HTML", "CSS"]
      },
      {
        title: "Computer Science & Database",
        icon: "database",
        description: "Core computing foundations, algorithmic problem-solving, and data systems.",
        items: ["Data Structures & Algorithms", "Database Management", "Web Development"]
      },
      {
        title: "Design & Documentation",
        icon: "layout",
        description: "User experience planning, system specifications, and structural architecture.",
        items: ["UI/UX Design", "Software Requirements Specification (SRS)", "System Architecture"]
      },
      {
        title: "Productivity & Communication",
        icon: "file-text",
        description: "Effective documentation, technical articulation, and organizational tools.",
        items: ["MS Office", "Content Writing"]
      }
    ],
    exposureAreas: ["Python Programming", "Data Science", "Machine Learning", "Web Development", "UI/UX Design", "Technical Documentation"]
  },

  experience: [
    {
      role: "Data Science & Machine Learning Intern",
      organization: "BrainyBeam Info Tech Pvt. Ltd.",
      type: "Internship",
      startDate: "27 May 2025",
      endDate: "7 July 2025",
      dateRange: "27 May 2025 – 7 Jul 2025",
      duration: "6 Weeks",
      overview: "Worked with practical Data Science and Machine Learning concepts using real-world datasets. Contributed to data preprocessing activities and assisted with algorithm implementation.",
      responsibilities: [
        "Applied practical Data Science and Machine Learning techniques to real-world datasets.",
        "Assisted in data preprocessing and algorithm implementation."
      ],
      tags: ["Data Science", "Machine Learning", "Data Preprocessing", "Algorithm Implementation"]
    },
    {
      role: "Python Programming Intern",
      organization: "Hubclash Esports",
      type: "Internship",
      startDate: "27 June 2024",
      endDate: "10 July 2024",
      dateRange: "27 Jun 2024 – 10 Jul 2024",
      duration: "2 Weeks",
      overview: "Developed Python scripts for practical application tasks, focusing on core logic and structured algorithmic problem-solving.",
      responsibilities: [
        "Built core logic scripts using Python for practical application tasks.",
        "Strengthened problem-solving capabilities using structured algorithms."
      ],
      tags: ["Python", "Core Logic Scripts", "Structured Algorithms", "Problem Solving"]
    }
  ],

  projects: [
    {
      name: "Tiffin Mitra",
      category: "Full-Stack Web Application & Marketplace",
      status: "Active Project / Prototype",
      repository: "https://github.com/prince312pp/tiffinmitra_prototype",
      overview: "Tiffin Mitra is a hyperlocal homemade meal marketplace and subscription platform connecting students and working professionals with certified neighborhood home kitchens. Features single-cook cart fulfillment invariants and flexible meal subscriptions with a zero-cancellation fee pause guarantee.",
      contributions: [
        "Architected modular full-stack application using Next.js 14 App Router, TypeScript, and MongoDB with Mongoose ODM.",
        "Implemented single-cook cart invariants ensuring freshly prepared domestic meals are fulfilled hot from one dedicated kitchen.",
        "Engineered flexible subscription lifecycle system (5-Day, 14-Day, 30-Day) with automated validity extensions and multi-method payment provider abstractions (UPI, Cards, NetBanking, COD)."
      ],
      tags: [
        "Next.js 14",
        "TypeScript",
        "MongoDB",
        "Mongoose ODM",
        "Tailwind CSS",
        "Hyperlocal Marketplace",
        "Meal Subscriptions"
      ]
    },
    {
      name: "Sponsorly",
      category: "Academic Web Application Project",
      status: "Academic Project",
      overview: "Sponsorly is an academic web application project focused on structured UI/UX planning and technical documentation. Contributed wireframes, UI/UX architecture, the SRS document, system architecture documentation, and technical reports while collaborating with the development team to keep design prototypes aligned with technical requirements and project delivery timelines.",
      contributions: [
        "Designed the UI/UX architecture and wireframes for a web application, establishing a clean, intuitive, and consistent visual user flow.",
        "Authored the complete Software Requirements Specification (SRS) document, system architecture, and project technical reports.",
        "Collaborated closely with the development team to align design prototypes with technical requirements and delivery timelines."
      ],
      tags: [
        "UI/UX Architecture",
        "Wireframing",
        "Software Requirements Specification (SRS)",
        "System Architecture",
        "Technical Documentation",
        "Design–Development Collaboration"
      ]
    }
  ],

  certifications: [
    {
      title: "Fundamentals of Machine Learning & AI",
      provider: "AWS Training & Certification",
      category: "Cloud & AI Training",
      summary: "Completed foundational training covering core concepts of artificial intelligence and machine learning principles."
    }
  ],

  languages: [
    { name: "English" },
    { name: "Hindi" },
    { name: "Gujarati" }
  ],

  interests: [
    { name: "Technical Writing", description: "Documenting systems, processes, and concepts with clarity and precision." },
    { name: "Photography", description: "Observing composition, light, and perspective through a visual lens." },
    { name: "Content Creation", description: "Crafting thoughtful narratives and visual content that engage and inform." }
  ],

  editorial: {
    heroQuote: "Good ideas deserve thoughtful design and the clarity to bring them to life.",
    accentPhrase1: "Code with clarity. Design with intention.",
    aboutQuote: "Every skill begins with curiosity, and every project is a chance to learn.",
    documentationQuote: "Clarity is not an extra step; it is part of good engineering.",
    closingLine: "Have an idea in mind? Let's give it a thoughtful beginning.",
    footerNote: "Designed with curiosity. Built with intention."
  }
};

// Make available globally in browser or as export if module
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
