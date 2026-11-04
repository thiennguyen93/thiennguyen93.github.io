// CV content, moved out of the hand-written HTML in source/cv/index.md and rendered by the theme's CvPage.
// Dates are "YYYY-MM"; durations and the experience total are worked out at build time.
import type { Certification, CvData, Person, Project, Role, School, SkillGroup } from 'astro-theme-icarus-thiennguyen/cv';

const LOGO = '/cv-assets';

const PERSON: Person = {
  name: 'Thien Nguyen',
  rotatingTitles: ['software engineer', 'web/apps developer', 'writer'],
  location: 'Ho Chi Minh City, Vietnam',
  email: 'hi@thiennguyen.dev',
  phone: { display: '(+84) 395 443 490', href: 'tel:+84395443490' },
  intro: [
    'With a passion for programming and web/app development, I aspire to become a full-stack developer.',
    "I thrive in collaborative environments and believe in continuous learning. I'm eager to join innovative teams where I can learn from others, contribute my skills, and enhance my abilities.",
  ],
  languages: [
    { name: 'Vietnamese', level: 'Native proficiency', flag: '/assets/img/vi-vn-64x64.png' },
    { name: 'English', level: 'Professional working proficiency', flag: '/assets/img/en-us-64x64.png' },
  ],
  pdf: '/assets/documents/pdf/THIEN_NGUYEN_CV.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/thiennguyendev/',
    github: 'https://github.com/thiennguyen93',
    contact: '/contact/',
  },
};

const ROLES: Role[] = [
  {
    id: 'pepperstone',
    company: 'Pepperstone Group Limited',
    url: 'https://pepperstoneworld.com/',
    logo: { light: `${LOGO}/pepperstone_blue_logo_160.svg`, dark: `${LOGO}/pepperstone_blue_logo_160_dark.svg`, alt: 'Pepperstone' },
    title: 'Senior Engineer',
    scope: 'Product: Onboarding Tech Rebuild',
    start: '2025-04',
    highlights: [
      'Rebuilt the user onboarding system for the Mexican market while ensuring seamless operation of legacy infrastructure.',
      'Developed backend services using NodeJS/TypeScript (Fastify) and Go (Huma framework), with seamless integrations to Salesforce and internal systems.',
      'Implemented robust event-driven architecture leveraging NATS/Jetstream for reliable event sourcing and system communication.',
      'Established comprehensive monitoring solutions using Datadog and OpsLevel to ensure optimal system performance and reliability.',
      'Collaborated effectively within a global cross-functional team of 10 engineers using Agile/Scrum methodologies.',
    ],
    skills: ['Go', 'Huma Framework', 'TypeScript', 'Fastify', 'NATS/Jetstream', 'PostgreSQL', 'MySQL', 'EventBridge', 'S3', 'OpenAPI', 'Datadog', 'OpsLevel'],
  },
  {
    id: 'pilotpulse',
    company: 'PilotPulse.ai',
    url: 'https://pilotpulse.ai/',
    logo: { light: `${LOGO}/logo-pilotpulse-ai-light.png`, alt: 'PilotPulse.ai' },
    title: 'Senior Software Engineer',
    scope: 'Product: AI Agent Management Dashboard',
    start: '2024-04',
    end: '2025-04',
    highlights: [
      'Developed and maintained RESTful APIs and a dashboard for managing users, knowledge bases, prompts, and workflow configurations.',
      'Integrated Auth0 for authentication and implemented role-based access control (RBAC) to improve security and user management.',
      'Optimized API performance and database queries in PostgreSQL, enhancing system efficiency and scalability.',
    ],
    skills: ['Go', 'Fiber Framework', 'ReactJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Auth0', 'RBAC'],
  },
  {
    id: 'gamify-studios',
    company: 'Gamify Studios',
    logo: { light: `${LOGO}/logo-gamify-studios-light.png`, dark: `${LOGO}/logo-gamify-studios-dark.png`, alt: 'Gamify Studios' },
    title: 'Software Engineer',
    scope: 'Product: Back Office Gaming Management System',
    start: '2022-09',
    end: '2024-02',
    highlights: [
      'Developed and maintained RESTful APIs for a comprehensive management system handling users, games, players, events, missions, and marketing campaigns.',
      'Utilized microservice architecture to build and integrate various sub-systems, including a report module, cron service, and inbox message.',
      'Collaborated with front-end developers, database administrators, and project managers to ensure exceptional user experiences and meet project requirements.',
      'Contributed to documentation and knowledge sharing within the technical team.',
    ],
    skills: ['Go', 'NestJS', 'TypeORM', 'TypeScript', 'RabbitMQ', 'Redis', 'ElasticSearch', 'MySQL'],
  },
  {
    id: 'cmc-global',
    company: 'CMC Global',
    url: 'https://cmcglobal.com.vn/',
    logo: { light: `${LOGO}/logo-cmc-global-light.png`, alt: 'CMC Global' },
    title: 'Software Engineer',
    scope: 'Projects: THK CMMS, THK Order System & HACCP Report',
    start: '2021-09',
    end: '2022-09',
    highlights: [
      'Estimated project timelines and resources required for completion.',
      'Provided guidance, conducted code reviews, and ensured code quality.',
      'Developed robust RESTful APIs using Node.js and NestJS framework, Microsoft SQL Server, Azure Blob Storage, and Google Firebase.',
      'Utilized Docker to containerize web applications and deploy them to Azure app service, ensuring seamless deployment and scalability.',
    ],
    skills: ['NestJS', 'ExpressJS', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'Docker', 'Azure', 'Firebase'],
  },
  {
    id: 'hpt',
    company: 'HPT Vietnam Corporation',
    url: 'https://www.hpt.vn/',
    logo: { light: `${LOGO}/logo-hpt-light.png`, alt: 'HPT Vietnam Corporation' },
    title: 'Software Engineer',
    scope: 'Projects: Cash Vault Management (Techcombank)',
    start: '2020-04',
    end: '2021-08',
    highlights: [
      'Developed an automated cash vault management system on top of the IBM BPM platform, significantly augmenting operational efficiency.',
      'Designed and implemented Oracle SQL stored procedures to optimize data retrieval and processing for application functionality.',
    ],
    skills: ['IBM BPM', 'IBM ECM', 'JavaScript', 'ReactJS', 'Oracle SQL', 'WebSphere'],
  },
];

/** Groups for the skills overview; anything not listed lands in "Other". */
const SKILL_GROUPS: SkillGroup[] = [
  { name: 'Languages', icon: 'code', skills: ['Go', 'TypeScript', 'JavaScript'] },
  { name: 'Backend', icon: 'server', skills: ['Node.js', 'Fastify', 'NestJS', 'ExpressJS', 'Huma Framework', 'Fiber Framework', 'OpenAPI'] },
  { name: 'Data', icon: 'database', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle SQL', 'Redis', 'ElasticSearch', 'Prisma ORM', 'TypeORM'] },
  { name: 'Messaging', icon: 'tower-broadcast', skills: ['NATS/Jetstream', 'RabbitMQ', 'EventBridge'] },
  { name: 'Cloud & Ops', icon: 'cloud', skills: ['Docker', 'Azure', 'S3', 'Firebase', 'Datadog', 'OpsLevel'] },
  { name: 'Frontend & Auth', icon: 'window-maximize', skills: ['ReactJS', 'Auth0', 'RBAC'] },
  { name: 'Enterprise', icon: 'building', skills: ['IBM BPM', 'IBM ECM', 'WebSphere'] },
];

const PROJECTS: Project[] = [
  {
    name: 'Kira',
    url: 'https://kira.thiennguyen.dev/',
    story: '/2026/06/19/nhat-ky/2026-06-19-gioi-ung-dung-kira/',
    logo: { light: `${LOGO}/logo-kira-light.svg`, dark: `${LOGO}/logo-kira-dark.svg`, alt: 'Kira' },
    date: '2026-05',
    description: "A fast, friendly native macOS app for developers who'd rather press a key than drown in browser tabs.",
  },
  {
    name: 'Ripplify',
    url: 'https://ripplify.thiennguyen.dev/',
    logo: { light: `${LOGO}/logo-ripplify-light.png`, alt: 'Ripplify' },
    date: '2021-06',
    description: 'A free, handy and delightful tool initially designed for presenters, trainers and teachers who want to highlight their mouse pointer.',
  },
  {
    name: 'FSC Utilities Plugin',
    url: 'https://fsc-utilities-plugin.netlify.app/',
    logo: { light: `${LOGO}/logo-fscup-light.png`, alt: 'FSC Utilities Plugin' },
    date: '2019-03',
    retired: true,
    description: 'A data input assistance software that enhances work productivity while ensuring precision and reliability.',
  },
];

const EDUCATION: School[] = [
  {
    school: 'VNUHCM - University of Science',
    url: 'https://www.hcmus.edu.vn',
    logo: { light: `${LOGO}/logo-hcmus.png`, alt: 'HCMUS' },
    degree: 'B.S in Information Technology',
    start: '2017-12',
    end: '2020-10',
    courses: 'Cloud Computing for Business, Data Structure and Algorithms, Object-oriented Programming, Databases and Database Management Systems, HTML, CSS, Node.js, Javascript, MySQL.',
    story: '/2020/11/05/nhat-ky/2020-05-11-le-tot-nghiep-hcmus-2020/',
  },
  {
    school: 'HCMC University of Technology and Education',
    url: 'https://hcmute.edu.vn',
    logo: { light: `${LOGO}/logo-hcmute.png`, alt: 'HCMUTE' },
    degree: 'B.A in English Language Teaching',
    start: '2011-09',
    end: '2015-12',
    courses: "English for Business, English for Computing, English for Electrical and Electronic Engineering, Learners' Psychology, and Teaching Methodology.",
  },
];

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Learn Git & GitHub',
    kind: 'Certificate of Completion',
    issuer: { name: 'Codecademy', url: 'https://www.codecademy.com/profiles/thiennguyen.dev/certificates/a8ab218d5950c29861635cc0bf12fd13' },
    logo: { light: `${LOGO}/logo-git-light.png`, alt: 'Git' },
    date: '2024-04',
    image: '/assets/img/codecademy-git-github-cert.png',
  },
  {
    title: 'ReactJS Course',
    kind: 'Certificate of Achievement',
    issuer: { name: 'Zend Vietnam', url: 'https://zendvn.com/' },
    logo: { light: `${LOGO}/logo-react-js-light.png`, alt: 'ReactJS' },
    date: '2021-01',
    image: '/assets/img/zendvn-cert.png',
  },
  {
    title: 'PHP Programming Training Course',
    kind: 'Certificate of Completion',
    issuer: { name: 'APTECH Saigon' },
    logo: { light: `${LOGO}/logo-laravel-light.png`, dark: `${LOGO}/logo-laravel-dark.png`, alt: 'Laravel' },
    date: '2020-09',
  },
];

export const CV: CvData = {
  person: PERSON,
  roles: ROLES,
  skillGroups: SKILL_GROUPS,
  projects: PROJECTS,
  education: EDUCATION,
  certifications: CERTIFICATIONS,
};
