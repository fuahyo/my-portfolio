/** Site content — experiences, projects, skills */
export const SITE = {
  name: 'Galang D. Juniar',
  title: 'Galang D. Juniar — Web, Mobile & Data Scraping',
  role: 'Web & Mobile Developer · Data Scraper',
  tagline:
    'Passionate developer with proven experience in full-stack web development, mobile apps, and web scraping. Eager to deliver innovative, scalable solutions.',
  email: 'galangdwij@gmail.com',
  github: 'https://github.com/fuahyo',
  location: 'Jakarta, Indonesia',
  canonicalUrl: 'https://fuahyo.github.io/my-portfolio/',
  ogImage: 'assets/img/glg.jpeg',
  avatar: 'assets/img/glg.jpeg',
};

export const EDUCATION = [
  {
    school: 'BINUS UNIVERSITY',
    degree: 'Bachelor of Computer Science',
    period: '2020–2023',
  },
  {
    school: 'Academy of Metrology and Instrumentation',
    degree: 'Diploma in Metrology and Instrumentation',
    period: '2016–2019',
  },
];

export const SKILLS = [
  {
    label: 'Programming Languages',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'SQL',
      'Dart',
      'Ruby',
      'Go', 
      'TypeScript',
      'Python',
    ],
  },
  {
    label: 'Frameworks',
    items: [
      'Flutter',
      'Laravel',
      'Next.js',
      'Express.js',
      'Java Spring Boot',
      'Custom framework',
      'Openclaw/Hermes Agent',
    ],
  },
  {
    label: 'Tools',
    items: [
      'VS Code',
      'Git',
      'JIRA',
      'SQL Server',
      'Xcode',
      'Cursor',
      'Android Studio',
      'Firebase',
    ],
  },
  {
    label: 'Interests',
    items: [
      'Web design & development',
      'Mobile application development',
      'Data scraping',
      'Agentic AI',
    ],
  },
];

export const EXPERIENCE = [
  {
    id: 'kpmg',
    role: 'Fullstack Application Developer',
    company: 'KPMG Indonesia',
    meta: 'Jul 2026 - Present',
    highlights: [
      'Developed applications according to analysis and design documents.',
      'Performed internal testing and guided key users through UAT.',
      'Maintained communication with key users and escalated issues to Application Manager and/or Designer.',
    ],
  },
  // {
  //   id: 'datahen',
  //   role: 'Jr. Data Scraper',
  //   company: 'Datahen Canada Inc.',
  //   meta: 'Remote · May 2024 – Present',
  //   highlights: [
  //     'Developed web scraping solutions using Git and Scrape API; scaled scrapers to millions of pages without bad-neighbor effects.',
  //     'Used Ruby and Python with customizable scraper job containers for parsed outputs and deployment.',
  //     'Implemented monitoring features and coding conventions for collaboration and troubleshooting.',
  //   ],
  // },
  {
    id: 'consulting-service',
    role: 'Application Developer',
    company: 'PT. Consulting Service Indonesia',
    meta: 'Jul 2023 - June 2026',
    highlights: [
      'Developed applications according to analysis and design documents.',
      'Performed internal testing and guided key users through UAT.',
      'Maintained communication with key users and escalated issues to Application Manager and/or Designer.',
    ],
  },
  {
    id: 'co-teacher',
    role: 'Co-Teacher (Mobile App Dev — Flutter)',
    company: 'PT. Ako Media Asia',
    meta: 'January 2023–May 2023',
    highlights: [
      'Assisted in tutorials for mobile app development using Flutter.',
      'Helped students solve problems during the Flutter learning process.',
      'Supported final projects on the front end: UI slicing and API integration.',
    ],
  },
  {
    id: 'menarini',
    role: 'Calibration and Maintenance Staff',
    company: 'PT. Menarini Indria Laboratories',
    meta: 'April 2020–July 2023',
    highlights: [
      'Calibrated measuring instruments in pharmaceutical factories.',
      'Managed measurement data, calibration reporting, and scheduling.',
      'Maintained laboratory instruments.',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'jira-lite',
    title: 'Jira Lite',
    type: 'web',
    summary:
      'Lightweight project-management web app inspired by JIRA — boards, issues, and workflows for small teams.',
    description:
      'A streamlined issue-tracking and board experience built for demos and internal use. Watch the walkthrough below.',
    media: {
      type: 'video',
      src: 'assets/video/jira-lite.mp4',
      alt: 'Jira Lite demo walkthrough',
    },
    links: [],
    featured: true,
  }, 
  {
    id: 'pims',
    title: 'PIMS',
    type: 'web',
    summary:
      'Procurement & Inventory Management System for efficiently managing purchasing, stock, and suppliers. (for internal use)',
    description:
      'An integrated system designed to streamline end-to-end procurement and inventory processes. Features include purchase requests, purchase orders, supplier management, real-time stock tracking, and comprehensive inventory reporting to support operational efficiency.',
    media: {
      type: '',
      src: '',
      alt: 'PIMS demo walkthrough',
    },
    links: [],
    featured: true,
  },
  {
    id: 'multi-server-scraper',
    title: 'Multi-Server & Agent scraper',
    type: 'scraper',
    summary: 'Distributed scraping job management. (for internal use)',
    description:
      'Designing and implementing a system to manage distributed scraping jobs using in-house technology, focusing on scalability, monitoring, and modular deployment of scraper containers.',
    media: {
      type: 'image',
      src: 'assets/img/MCP.png',
      alt: 'Multi-Server Scraper Management System',
    },
    links: [],
  },
  {
    id: 'spa-scraper-qa-tool',
    title: 'SPA Scraper QA Tool',
    type: 'scraper',
    summary: 'Streamlit Python UI for scraper output validation on SPAs.',
    description:
      'Developed a UI-based QA system for scraper output validation on JavaScript-heavy single-page applications, integrated with automated testing workflows.',
    media: {
      type: 'image',
      src: 'assets/img/QA-tool.png',
      alt: 'SPA Scraper QA Tool',
    },
    links: [],
  }, 
  {
    id: 'tax-tools',
    title: 'Tax Tools',
    type: 'web',
    summary:
      'A suite of tax utilities for calculation, reporting, and validation.',
    description:
      'A web-based application providing essential tools for tax-related tasks, including income tax (PPh) and VAT (PPN) calculations, data validation, and tax scenario simulations. Built to simplify workflows for finance and tax professionals.',
    media: {
      type: '',
      src: '',
      alt: 'Tax Tools demo walkthrough',
    },
    links: [],
    featured: false,
  }, 
  {
    id: 'wedding-invitation-cms',
    title: 'Wedding Invitation & CMS',
    type: 'web',
    summary: 'Web-based wedding invitations with a content management system.',
    description:
      'Wedding invitation application with CMS. Frontend: Next.js; backend: Java.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portfolio10.PNG',
      alt: 'Wedding Invitation CMS',
    },
    links: [
      { label: 'View live project', href: 'https://fuahyo.github.io/g-wedding' },
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Career Center, Trash Collection & Blood Donor',
    type: 'mobile',
    summary: 'Social-impact Flutter apps for education, waste, and health.',
    description:
      'High School Career Center app (Belitung trash collection), and Blood Donor app for a public health center in West Kalimantan. Built with Flutter.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portofolio2.png',
      alt: 'Mobile apps collage',
    },
    links: [],
  },
  {
    id: 'monitoring-system',
    title: 'CAPA Monitoring System',
    type: 'web',
    summary: 'Web-based CAPA monitoring from audit actions.',
    description:
      'System monitoring for Corrective and Preventive Action (CAPA) resulting from audits. Full stack with Laravel.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portofolio6.png',
      alt: 'Monitoring system application',
    },
    links: [],
  },
  {
    id: 'nvite-me',
    title: 'Nvite Me',
    type: 'web',
    summary: 'Digital invitation platform for events.',
    description: 'Digital invitation product for creating and sharing event invites online.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/nviteme.png',
      alt: 'Nvite Me digital invitation',
    },
    links: [{ label: 'View live project', href: 'https://www.invite-me.click/' }],
  },
  {
    id: 'career-center-mobile',
    title: 'Career Center Mobile App',
    type: 'mobile',
    summary: 'High school career guidance mobile application.',
    description: 'Career Center mobile app helping students explore career paths and opportunities.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portofolio2.png',
      alt: 'Career Center mobile app',
    },
    links: [],
  },
  {
    id: 'syadida-car-rent',
    title: 'Syadida Car Rent',
    type: 'web',
    summary: 'Car rental booking web application.',
    description: 'Next.js car rental platform for browsing and booking vehicles.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portofolio3.PNG',
      alt: 'Syadida Car Rent',
    },
    links: [
      {
        label: 'View live project',
        href: 'https://next-js-car-rent-syadida.vercel.app/',
      },
    ],
  },
  {
    id: 'blood-donor-mobile',
    title: "Blood's Donor Mobile App",
    type: 'mobile',
    summary: 'Blood donation coordination for a public health center.',
    description:
      "Mobile app connecting donors with a public health center in West Kalimantan. Built with Flutter.",
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portofolio1.png',
      alt: "Blood's Donor mobile app",
    },
    links: [],
  },
  {
    id: 'angular-component',
    title: 'Angular Component List & Detail',
    type: 'web',
    summary: 'Reusable list/detail pattern in Angular.',
    description: 'Angular web component demonstrating list and detail views.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portofolio4.png',
      alt: 'Angular component list and detail',
    },
    links: [
      {
        label: 'View live project',
        href: 'https://angular-question-list-web-component.vercel.app/',
      },
    ],
  },
  {
    id: 'waste-bank-mobile',
    title: 'Waste Bank Mobile App',
    type: 'mobile',
    summary: 'Waste bank management for a regional program.',
    description: 'Flutter app supporting waste bank operations and user engagement.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portofolio5.png',
      alt: 'Waste Bank mobile app',
    },
    links: [],
  },
  {
    id: 'web-dev-own-framework',
    title: 'Web Dev with Custom Framework',
    type: 'web',
    summary: 'Full-stack sites built on an in-house PHP framework.',
    description: 'Web applications developed using a custom lightweight framework.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portofolio7.png',
      alt: 'Custom framework web development',
    },
    links: [],
  },
  {
    id: 'wedding-invitation',
    title: 'Wedding Invitation (Web)',
    type: 'web',
    summary: 'Static wedding invitation microsite.',
    description: 'Personal wedding invitation website.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portofolio8.png',
      alt: 'Wedding invitation website',
    },
    links: [
      { label: 'View live project', href: 'https://fuahyo.github.io/g-wedding' },
    ],
  },
  {
    id: 'wordpress-nexdev',
    title: 'WordPress — NexDev Studio',
    type: 'web',
    summary: 'Agency/studio site on WordPress.',
    description: 'NexDev Studio marketing and portfolio site powered by WordPress.',
    media: {
      type: 'image',
      src: 'assets/img/portfolio/portfolio9.PNG',
      alt: 'NexDev Studio WordPress site',
    },
    links: [{ label: 'View live project', href: 'https://nexdev.studio/' }],
  },
];
