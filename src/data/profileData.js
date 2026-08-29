/**
 * Profile Data Model for Jorge Augusto Gutiérrez Bandera
 * Source of Truth: profile/profile-model.md & supporting source documents
 * 
 * Strictly contains verified evidence. Zero invented claims, metrics, or placeholders.
 */

export const profileData = {
  identity: {
    name: "Jorge Gutiérrez",
    fullName: "Jorge Augusto Gutiérrez Bandera",
    positioning: "Full Stack Software Engineer",
    currentTitle: "Backend Developer",
    location: "Barranquilla, Colombia",
    tagline: "Backend • Frontend • Databases • Enterprise Applications",
    summary:
      "Full Stack Software Engineer with over 12 years of professional background in technology and a focus on enterprise backend development at Tata Consultancy Services (TCS). Experienced in building robust services, complex data layers, and full-stack solutions for enterprise banking and corporate platforms.",
    email: "tec.jorge.a.gutierrez@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/jorge-augusto-gutierrez-bandera-2a6722120/",
      github: "https://github.com/Jorge-tec",
      cvFile: "./assets/Jorge-Gutierrez-CV.pdf"
    }
  },

  snapshot: [
    {
      value: "12+",
      label: "Years in Tech",
      subtext: "Career starting May 2014"
    },
    {
      value: "4+",
      label: "Years at TCS",
      subtext: "Enterprise Backend Consultant"
    },
    {
      value: "3",
      label: "Client Engagements",
      subtext: "Banistmo, Tuya, SUMMA"
    },
    {
      value: "150+",
      label: "Completed Trainings",
      subtext: "12 Paths • 139 Courses • 11 Corporate"
    }
  ],

  engineeringProfile: [
    {
      id: "backend",
      icon: "dns",
      title: "Backend & Distributed Services",
      description:
        "Architecture and implementation of APIs, microservices, and business logic using Node.js, Express.js, NestJS, and PHP (Laravel, CodeIgniter).",
      highlightSkills: ["Node.js", "NestJS", "Express.js", "PHP", "Laravel", "CodeIgniter"]
    },
    {
      id: "databases",
      icon: "database",
      title: "Database Architecture & Optimization",
      description:
        "Deep foundation in relational database management, data modeling, complex queries, stored procedures, triggers, and integration services across enterprise RDBMS.",
      highlightSkills: ["SQL Server", "PostgreSQL", "MySQL", "T-SQL", "Stored Procedures"]
    },
    {
      id: "frontend",
      icon: "web",
      title: "Modern Frontend & Client UI",
      description:
        "End-to-end full stack delivery building responsive, structured user interfaces with TypeScript, JavaScript, Angular, and React.",
      highlightSkills: ["TypeScript", "JavaScript", "Angular", "React", "HTML5/CSS3"]
    },
    {
      id: "enterprise",
      icon: "domain",
      title: "Enterprise Consulting & Agility",
      description:
        "Proven experience delivering solutions within regulated corporate and banking environments (BFSI) following Scrum, Kanban, and Agile DC practices.",
      highlightSkills: ["Scrum / Agile DC", "Testing (Jest, JUnit)", "Serverless", "Azure"]
    }
  ],

  technicalStack: {
    languages: {
      category: "Languages & Core",
      skills: ["TypeScript", "JavaScript", "PHP", "SQL"]
    },
    backend: {
      category: "Backend & Runtimes",
      skills: ["Node.js", "NestJS", "Express.js", "Laravel", "CodeIgniter"]
    },
    databases: {
      category: "Database Systems",
      highlighted: true,
      skills: ["SQL Server", "PostgreSQL", "MySQL", "T-SQL / Stored Procedures", "Database Design", "SSIS"]
    },
    frontend: {
      category: "Frontend & Mobile",
      skills: ["Angular", "React", "React Native", "Cordova", "HTML5", "CSS3"]
    },
    testingAndTools: {
      category: "Testing & Architecture",
      skills: ["Jest", "JUnit", "Serverless", "Azure", "Apache", "REST APIs"]
    }
  },

  careerJourney: [
    {
      step: "01",
      phase: "Systems & Infrastructure",
      role: "Jefe de Sistemas",
      company: "Metroarea Inmobiliaria",
      period: "2014 – 2018",
      description:
        "Foundational stage managing IT infrastructure, technical systems oversight, and departmental operations in Barranquilla, Colombia."
    },
    {
      step: "02",
      phase: "Software Development",
      role: "Desarrollador de Software",
      company: "Mangus.co - E-learning Empresarial",
      period: "2018 – 2021",
      description:
        "Application development focused on building EdTech enterprise e-learning solutions, web modules, and software features."
    },
    {
      step: "03",
      phase: "Software Engineering",
      role: "Analista en Ingeniería de Software",
      company: "Personalsoft",
      period: "2021 – 2022",
      description:
        "Software engineering analysis, enterprise application lifecycle development, analytical troubleshooting, and collaborative delivery."
    },
    {
      step: "04",
      phase: "Enterprise Backend & Full Stack",
      role: "Backend Developer (Current)",
      positioningNote: "Full Stack Software Engineer Positioning",
      company: "Tata Consultancy Services (TCS)",
      period: "2022 – Present",
      isCurrent: true,
      description:
        "Enterprise consulting developing backend architectures and service integrations for major corporate and financial sector clients."
    }
  ],

  experience: [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Back-end Developer (LinkedIn) / Developer (TCS Internal)",
      employmentType: "Full-time (Jornada completa)",
      period: "June 2022 – Present (4+ Years)",
      location: "Colombia",
      description:
        "Enterprise software consultant focused on backend services and architecture for major banking and business operations.",
      isCurrent: true,
      clientEngagements: [
        {
          client: "BANISTMO S.A",
          period: "Oct 2023 – Present",
          unit: "BFSI Southeast Banking & LATAM",
          role: "Developer",
          summary: "Banking and financial services software development within the BFSI business unit."
        },
        {
          client: "Compañía de Financiamiento TUYA S.A.",
          period: "Jul 2023 – Sep 2023",
          role: "Developer",
          summary: "Financial services and retail financing development."
        },
        {
          client: "SUMMA - Servicios Corporativos Integrales S.A.S.",
          period: "Jun 2022 – Jul 2023",
          role: "Developer",
          summary: "Corporate integrated services and enterprise process solutions development."
        }
      ]
    },
    {
      company: "Personalsoft",
      role: "Analista en Ingeniería de Software",
      employmentType: "Full-time (Jornada completa)",
      period: "Feb 2021 – Jun 2022",
      location: "Medellín, Antioquia, Colombia",
      description:
        "Software engineering analysis, requirements evaluation, and enterprise software application delivery."
    },
    {
      company: "Mangus.co - E-learning Empresarial",
      role: "Desarrollador de Software",
      employmentType: "Full-time (Jornada completa)",
      period: "Mar 2018 – Jan 2021",
      location: "Barranquilla, Atlántico, Colombia",
      description:
        "Full lifecycle software development for enterprise EdTech platforms and online learning environments."
    },
    {
      company: "Metroarea Inmobiliaria",
      role: "Jefe de Sistemas",
      employmentType: "Full-time (Jornada completa)",
      period: "Jun 2014 – May 2018",
      location: "Barranquilla, Atlántico, Colombia",
      description:
        "Leadership and administration of IT infrastructure, internal computing platforms, and technical support systems."
    }
  ],

  databaseSpecialization: {
    title: "Strong Database Foundation",
    summary:
      "A core technical strength backed by verified engine competencies and an intensive 32-hour learning path in database development.",
    engines: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "Microsoft Access"],
    competencies: [
      "Relational Database Design & Normalization",
      "Stored Procedures, Functions & Triggers (T-SQL)",
      "SQL Server Integration Services (SSIS)",
      "Query Performance & Data Management",
      "Transactional Data Integrity & Indexing"
    ]
  },

  learning: {
    summary:
      "Proven commitment to continuous learning with 12 structured Learning Paths (Itinerarios), 139 LinkedIn Learning courses, and 11 corporate TCS training programs.",
    categories: [
      {
        name: "Leadership, Management & Teamwork",
        count: "34 Courses + 2 Paths",
        examples: ["Primeros pasos en el liderazgo de equipos", "Liderazgo transformador", "LDP (Initiative, Team Skills, Innovation)"]
      },
      {
        name: "Databases & Data Development",
        count: "9 Courses + 32h Path",
        examples: ["Conviértete en desarrollador de base de datos", "SQL Server: Procedimientos y Triggers", "SSIS Esencial"]
      },
      {
        name: "Software Architecture & Cloud",
        count: "13 Courses + 1 Path",
        examples: ["Node.js: Microservices", "Angular Esencial", "Aprende Azure", "Extreme Programming"]
      },
      {
        name: "Agile, Scrum & Kanban",
        count: "9 Courses + 11h Path",
        examples: ["Scrum Esencial", "Design Thinking", "Lean Six Sigma", "Agile DC Practitioner (TCS)"]
      },
      {
        name: "Communication, Strategy & Problem Solving",
        count: "33 Courses + 3 Paths",
        examples: ["Resolución de problemas técnicos complejos", "Comunicación asertiva", "Planificación estratégica"]
      },
      {
        name: "Productivity & Personal Effectiveness",
        count: "19 Courses + 1 Path",
        examples: ["Getting Things Done", "Gestión del tiempo", "Productividad para desarrollo de software"]
      }
    ],
    certifications: [
      { name: "English language: Foundation", org: "TCS", year: "2024" },
      { name: "3D learning GROW Technology 2", org: "TCS", year: "2023" },
      { name: "IT Infrastructure Services : Agile DC - Guild - Practitioner", org: "TCS", year: "2023" },
      { name: "LDP : Initiative & Proactiveness Foundation", org: "TCS", year: "2023" },
      { name: "LDP : Team Skills Foundation", org: "TCS", year: "2023" },
      { name: "LDP : Innovation & Creativity Foundation", org: "TCS", year: "2023" },
      { name: "Growth & Transformation : Awareness E0 Proficiency", org: "TCS", year: "2022" },
      { name: "Software Security Assurance - HiTech", org: "TCS", year: "2022" }
    ]
  },

  recognitions: [
    {
      author: "Raka Banerjee",
      role: "Sub ISU Head",
      org: "Tata Consultancy Services (BFSI Banking & LATAM)",
      date: "January 2026",
      quote:
        "Throughout the Year you have been a significant part of our Sub ISU , Thank You for the way you have #collaborated #supported #strengthened Team Work #worked with positivity and innovation. Keep up the spirit.",
      source: "TCS Gems Appreciation Note"
    },
    {
      author: "Raka Banerjee",
      role: "Sub ISU Head",
      org: "Tata Consultancy Services",
      date: "December 2025",
      quote:
        "As we come to the end of calendar year 2025, I would like to take the opportunity of thanking you for your contribution and dedication towards our Sub ISU. Let us continue the momentum and keep collaborating with each other.",
      source: "TCS Gems Appreciation Note"
    },
    {
      author: "Raka Banerjee",
      role: "Sub ISU Head",
      org: "Tata Consultancy Services (BFSI Southeast Banking & LATAM)",
      date: "June 2025",
      quote:
        "I would like to take this opportunity to thank you for all your efforts and contribution towards TCS and our Sub ISU BFSI SOUTHEAST BANKING and LATAM. I look forward to work with you in the upcoming quarters. Keep your spirits up and All the best.",
      source: "TCS Gems Appreciation Note"
    },
    {
      author: "Talent Transformation Team",
      role: "Manager",
      org: "Tata Consultancy Services",
      date: "January 2025",
      quote:
        "Dear Future Mentor, Today, on International Mentoring Day, we celebrate the incredible impact that mentors have on shaping lives... We invite you to step into this fulfilling role and join the community of mentors who are transforming lives.",
      source: "TCS Gems Recognition"
    }
  ],

  education: {
    degree: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información (ADSI)",
    institution: "Servicio Nacional de Aprendizaje (SENA)",
    period: "2015 – 2017",
    location: "Colombia",
    type: "Formal Academic Degree"
  }
};
