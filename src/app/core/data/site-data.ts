import {
  CoreValue,
  CustomerItem,
  JobOpening,
  NavLink,
  PartnerItem,
  ProductItem,
  ReasonItem,
  ServiceItem,
  SocialLink,
  StatItem,
  TeamMember,
  VerticalItem,
} from './models';

// All copy below is sourced from newrta.com (Home, About, Services, Products,
// Verticals, Why NEWRTA, Case Studies, Team, Customers, Partners, Contact)
// and lightly re-edited for tone/flow — no facts, names, or figures invented.

export const NAV_LINKS: NavLink[] = [
  { label: 'About NEWṚTA', fragment: 'about' },
  { label: 'Solutions', fragment: 'services' },
  { label: 'Industries', fragment: 'verticals' },
  { label: 'Clients', fragment: 'customers' },
  { label: 'Careers', fragment: 'careers' },
];

export const STATS: StatItem[] = [
  { value: 30, suffix: '+', label: 'Years of IT & consulting expertise' },
  { value: 4, suffix: '', label: 'Industry verticals served' },
  { value: 7, suffix: '', label: 'Enterprise & government customers' },
  { value: 5, suffix: '', label: 'Countries with active engagements' },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: 'code',
    title: 'Application Development',
    summary:
      'Customized applications built to maximize availability, agility and predictability.',
    detail:
      'In today\u2019s 24-7 business environment, application failure or downtime can devastate your business. We work with you to understand your business and develop customized solutions that maximize application availability, agility and predictability \u2014 following a Delivery Excellence model built on software engineering frameworks like CMMi and ISO. Our goal: lower costs, reduced risk, improved ROI.',
  },
  {
    icon: 'globe',
    title: 'Offshore Development Center',
    summary:
      'Your dedicated remote engineering team, established and managed end-to-end.',
    detail:
      'An Offshore Development Center (ODC) is your dedicated remote team of engineers, working as an extension of your organization from outside your country. NEWṚTA helps partners establish and manage their ODC in India, the world’s favorite offshore development location where thousands of companies world-wide already running their development centers. ODC offer \u2014 giving easy access to skilled resources, cutting direct costs by up to 60%, converting fixed costs to variable, and freeing your core team to focus on what matters most.',
  },
  {
    icon: 'compass',
    title: 'IT Management Consultancy',
    summary:
      'A futuristic, holistic strategy for enterprise technology transformation.',
    detail:
      'We help businesses analyze and suggest business transformation and IT strategy, design and monitor technology enablement programs, optimize IT infrastructure and architecture, review transformation projects with risk assessment, and design and execute risk-mitigation strategies \u2014 optimizing performance, user experience and total cost of ownership rather than just automating what already exists.',
  },
  {
    icon: 'refresh',
    title: 'Digital Transformation',
    summary:
      'Automate, modernize and manage IT systems to change the business and run the business.',
    detail:
      'Digital Transformation is not a magic button or a finite destination \u2014 it\u2019s a journey of milestones and continuous improvement that needs an experienced hand to guide you through it. Over two decades, we\u2019ve helped clients with domain-specific technology solutions and solution accelerators, from consulting through support, making us a preferred Digital Transformation partner across the globe.',
  },
];

export const VERTICALS: VerticalItem[] = [
  {
    icon: 'ship',
    tag: '30 years of trade domain experience',
    title: 'Trade, Logistics & Supply Chain',
    summary:
      'Logistics is NEWṚTA\u2019s core domain \u2014 three decades of deep experience shaping how cargo, trade and customs systems run.',
    solutions: [
      { name: 'Cargoweaver' },
      { name: 'Trade Weaver – Single Window' },
      { name: 'Eximweaver' },
      { name: 'Permitra – Permits & Licenses System' },
      { name: 'Fleetra' },
      { name: 'Portra – Port Community System' },
      { name: 'CMS – Customs Management Solutions' },
    ],
  },
  {
    icon: 'landmark',
    tag: 'Cutting-edge e-government products',
    title: 'eGovernment',
    summary:
      'We help public sector organizations embed digital transformation \u2014 information management, optimized applications and analytics \u2014 to save money, increase efficiency and serve citizens better.',
    solutions: [
      { name: 'Electronic Visa (eVisa)' },
      { name: 'District eServices Platform' },
      { name: 'E-Municipality System' },
      { name: 'cKYC – Centralized KYC Repository' },
      { name: 'MOTAP – Maritime Online Training Platform' },
    ],
  },
  {
    icon: 'heart-pulse',
    tag: 'Cutting-edge healthcare products',
    title: 'Healthcare',
    summary:
      'HealthyU, our Clinical Management System, automates virtually every segment of a healthcare environment \u2014 compatible with HL7 v2.8 and FHIR 4.0.1 integration standards.',
    solutions: [
      { name: 'Patient Registration' },
      { name: 'Practitioner Management' },
      { name: 'Appointment Booking' },
      { name: 'EMR & Episode of Care' },
      { name: 'Pharmacy Management' },
    ],
  },
  {
    icon: 'graduation-cap',
    tag: 'Cutting-edge school management products',
    title: 'EdTech',
    summary:
      'iSkool gives parents, students and institutions a consolidated, secure view of academic performance \u2014 with a built-in payment gateway for fast, safe online fee payments.',
    solutions: [{ name: 'School Management Portal (Web & Mobile)' }],
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    name: 'Zylo',
    tagline: 'E-commerce marketplace platform',
    description:
      'A comprehensive digital marketplace solution that enables businesses to showcase products, manage inventory, process orders, and deliver seamless online shopping experiences across web and mobile channels.',
  },
  {
    name: 'Handyman',
    tagline: 'On-demand home services marketplace',
    description:
      'A digital marketplace platform that connects customers with verified service professionals such as plumbers, electricians, painters, carpenters, cleaners, technicians, and other skilled service providers.',
  },
  {
    name: 'Mexto',
    tagline: 'Messaging platform',
    description:
      'A messaging platform with features such as data translation and transformation.',
  },
  {
    name: 'Nucleus',
    tagline: 'HR automation platform',
    description:
      'Automates HR processes and empowers employee self-service \u2014 connecting human resource management and IT for all-round productivity and engaged employees.',
  },
  {
    name: 'iSkool',
    tagline: 'Educational institution management',
    description:
      'A web and mobile portal giving parents, students and stakeholders a consolidated view of performance, with secure online fee payments.',
  },
  {
    name: 'Digimorph',
    tagline: 'Document digitization suite',
    description:
      'A comprehensive scanning solution that digitizes large paper archives into searchable soft copies, backed by a full document management system.',
  },
  {
    name: 'Penz',
    tagline: 'Chit fund ERP',
    description:
      'A flexible, user-friendly ERP built for chit fund companies by a team with 20+ years of chit fund business experience.',
  },
];

export const REASONS: ReasonItem[] = [
  {
    index: '01',
    title: 'Transform Your Customer Experience',
    description:
      'Engage with customers in their context. Whether it\u2019s your web/mobile app, social page, website or emails, we help you deliver an omnichannel experience across every customer journey.',
  },
  {
    index: '02',
    title: 'Go Live On Time And On Budget',
    description:
      'Time to market is critical. With three decades of global implementation experience, our industry experts bring proven methodologies to get you up and running fast.',
  },
  {
    index: '03',
    title: 'Work With People Passionate About Transformation',
    description:
      'Unlike most vendors, our focus is on transforming the experience of your users and customers \u2014 making life simpler and business more efficient while you achieve your objectives.',
  },
  {
    index: '04',
    title: 'Dedicated Teams & Offshore Model',
    description:
      'Dedicated teams provide the critical knowledge and familiarity of your systems \u2014 continuity you can build long-term plans around.',
  },
  {
    index: '05',
    title: 'Domain & Technology Expertise',
    description:
      'Custom software and accelerators built to address real challenges, delivered by a highly trained team with current technical expertise.',
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    letter: 'C',
    title: 'Client-Centricity',
    description:
      'We build trust, confidence and loyalty with our customers, investors and partners.',
  },
  {
    letter: 'A',
    title: 'Agility & Speed',
    description:
      'We stay creative, versatile and agile \u2014 responsible for our actions while maintaining speedy delivery.',
  },
  {
    letter: 'S',
    title: 'Speedy Delivery',
    description:
      'We hold ourselves to delivery timelines that respect our clients\u2019 markets and momentum.',
  },
  {
    letter: 'T',
    title: 'Trust',
    description:
      'We build strong relationships and achieve our objectives through mutual trust and respect.',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Sathya',
    role: 'Founding Member & Head of Operations',
    initials: 'S',
    bio: '20 years of experience implementing trade solutions across Port Community Systems, Customs Applications, Single Window applications, and Permits & Licenses systems.',
  },
  {
    name: 'Senthil',
    role: 'Chief Technology Officer',
    initials: 'SE',
    bio: '15+ years in IT with 25+ enterprise cloud implementations \u2014 Data Lake, Microservices, Cloud Migration, Disaster Recovery, hybrid and multi-cloud architectures for Customs, Ports, Telecom, Insurance, Fintech and Healthcare.',
  },
  {
    name: 'Deepthi',
    role: 'Head of Engineering & Delivery',
    initials: 'D',
    bio: '20+ years delivering trade and finance products and solutions, with specialist depth in engineering AI-based solutions.',
  },
];

export const CUSTOMERS: CustomerItem[] = [
  {
    name: 'Ministry of Works & Transport',
    location: 'Trinidad and Tobago',
    logo: 'assets/images/ministry-of-works-and-transport.png',
  },
  {
    name: '4C Solutions',
    location: 'Djibouti',
    logo: 'assets/images/4c-solutions.png',
  },
  { name: 'BBI', location: 'USA', logo: 'assets/images/bbi-usa.jpg' },
  {
    name: 'The Kanoo Group',
    location: 'Oman',
    logo: 'assets/images/kanoo-group.jpg',
  },
  {
    name: 'Hypercube',
    location: 'Djibouti',
    logo: 'assets/images/hypercube.jpg',
  },
  {
    name: 'Kadamban Associates',
    location: 'India',
    logo: 'assets/images/kadamban-associates.jpg',
  },
  {
    name: 'Metricspace Technologies',
    location: 'India',
    logo: 'assets/images/metric-space.jpg',
  },
];

export const PARTNERS: PartnerItem[] = [
  {
    name: 'TrueLogix Pte Limited',
    location: 'Singapore, Panama',
    logo: 'assets/images/truelogix.jpg',
  },
  {
    name: 'Tech Aspires Private Limited',
    location: 'India',
    logo: 'assets/images/tech-aspires.jpg',
  },
];

export const CASE_STUDY = {
  code: 'DJIBDCS',
  logo: 'assets/images/djibdcs-case-study.webp',
  pdf: 'assets/docs/case-study-djibdcs.pdf',
  title: 'Digital Tools Kept Students Learning Through COVID-19',
  summary:
    'A school in Djibouti had implemented NEWṚTA\u2019s Digital Examination Portal \u2014 built on business process management and enterprise content management \u2014 to transform its examination processes. When COVID-19 hit, the school faced the urgent task of continuing examinations and learning without interruption. They turned to NEWṚTA to shift quickly and reliably into a remote-learning environment.',
};

export const COMPANY_ABOUT = {
  heading: 'Who We Are',
  body: 'NEWṚTA is an Information Technology solution provider engaged in IT consulting and advisory, systems integration and outsourcing services. Founded by a team of IT industry experts with over 30 years of experience in project execution and IT consultancy across many countries, we help our customers move forward and excel in their business \u2014 delivering better business value to their clients and stakeholders through profound technology expertise and quality-driven delivery excellence. We deliver quality services and solutions on behalf of businesses, creating exceptional outcomes for our clients and the millions of people who count on them.',
};

export const QUALITY_POLICY = {
  heading: 'Quality Policy',
  body: 'NEWRTA is committed to delivering high-quality software solutions that meet or exceed customer expectations. We strive for excellence through continual improvement, innovation, and adherence to industry best practices \u2014 fostering a culture of quality, collaboration and accountability to consistently deliver reliable, secure and scalable software products.',
  commitments: [
    'Understanding customer needs and delivering value-driven solutions.',
    'Ensuring compliance with applicable legal, regulatory, and contractual requirements.',
    'Empowering our employees through training and development.',
    'Continuously improving our processes and technology.',
  ],
};

export const CONTACT = {
  phone: '+91-75388 05506',
  email: 'info@newrta.com',
  address:
    'No.6/230, Angayar Kanni Colony, Athikulam, Madurai, Tamil Nadu, India',
};

export const JOB_OPENINGS: JobOpening[] = [
  {
    title: 'Senior Software Engineer',
    openings: '1',
    location: 'Madurai',
    type: 'Permanent position',
    education:
      'B.Sc (CSC/IT) / B.E (Any stream) / M.C.A / B.Tech / M.E / M.Tech or similar',
    requirements: [
      '2+ years of experience in Java',
      'Hands-on experience with Angular, jQuery, JavaScript, REST API, Apache Tomcat, JBoss, Java Spring MVC, Spring Boot, Microservices, Hibernate and an open-source database (PostgreSQL/MySQL)',
      'Experience developing and deploying browser applications on cloud infrastructure',
      'Comfortable working closely with BAs, testers and customers',
    ],
  },
  {
    title: 'Software Engineer',
    openings: '2',
    location: 'Madurai',
    type: 'Permanent position',
    education:
      'B.Sc (CSC/IT) / B.E (Any stream) / M.C.A / B.Tech / M.E / M.Tech or similar',
    requirements: [
      'Fresh graduates welcome',
      'Good understanding of SDLC and basic knowledge of Java',
      'Strong written and verbal communication skills',
      'Eager to learn new technologies',
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/newtra/posts/',
  },
  { icon: 'x', label: 'X (Twitter)', url: null },
  { icon: 'facebook', label: 'Facebook', url: null },
  { icon: 'instagram', label: 'Instagram', url: null },
];
