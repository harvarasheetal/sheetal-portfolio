// ------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit text, links, skills and projects here.
// ------------------------------------------------------------------
import EasySell from '../images/EasySell.png'
import smartwatch from '../images/smartwatch.png'
import discord from '../images/discord.png'
import portfolio from '../images/portfolio.png'
import ice from '../images/ice.png'
import arjuna from '../images/arjuna.png'
import codeEditor from '../images/codeEditor.png'
import album from '../images/Album.png'

export const profile = {
  name: 'Sheetal Harvara',
  first: 'Sheetal',
  handle: 'sheetal@dev',
  role: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'React Engineer', 'Node.js Builder', 'Problem Solver'],
  tagline: 'High-performance frontends · Resilient backends · Zero fluff.',
  intro:
    "Hi, I'm Sheetal Harvara — a full-stack developer crafting React frontends, Node.js backends and cloud-connected systems. Clean code, fast pages, and pixel-precise execution.",
  bio:
    "Specializing in JavaScript/TypeScript ecosystems, component-driven UI architecture, and robust RESTful services. Just like solving a Rubik's Cube, complex software engineering problems become elegant once decomposed into clean, systematic algorithms.",
  city: 'Jamnagar',
  state: 'Gujarat',
  country: 'India',
  timezone: 'Asia/Kolkata',
  coordinates: '22.4707° N, 70.0577° E',
  email: 'harvarasheetal@gmail.com',
  phone: '+91 9106788622',
  phoneHref: 'tel:+919106788622',
  whatsapp: 'https://wa.me/919106788622',
  instagram: 'https://instagram.com/web_2me',
  github: 'https://github.com/SheetalHarvara',
  status: 'Ready to build',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/About', label: 'About' },
  { to: '/Skills', label: 'Skills' },
  { to: '/Project', label: 'Projects' },
  { to: '/Blog', label: 'Blog' },
  { to: '/Contact', label: 'Contact' },
]

export const stats = [
  { value: 10, suffix: '+', label: 'Core Technologies' },
  { value: 20, suffix: '+', label: 'Projects Shipped' },
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 3.5, suffix: 's', decimals: 1, label: 'Cube Best Time' },
]

export const marqueeTech = [
  'React 19', 'Node.js', 'Express', 'MongoDB', 'JavaScript ES6+', 'Tailwind CSS',
  'Framer Motion', 'Firebase', 'REST APIs', 'Git & GitHub', 'Docker', 'Vite', 'HTML5 & CSS3', 'Vercel',
]

// Home "stack" overview cards
export const stackOverview = [
  {
    id: 'frontend',
    index: '01',
    title: 'Frontend Architecture',
    desc: 'Pixel-tight, motion-rich interfaces that feel instant on every screen with zero layout shift.',
    tags: ['React', 'JavaScript ES6+', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3'],
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend & APIs',
    desc: 'Asynchronous services and data layers engineered to stay fast, typed, and predictable under concurrent load.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'Firebase'],
  },
  {
    id: 'ai',
    index: '03',
    title: 'AI-Assisted Engineering',
    desc: 'Context engineering, automated refactoring, and AI-assisted debugging to ship superior code with higher velocity.',
    tags: ['Prompt Engineering', 'Code Optimization', 'Automated Testing', 'LLM Integration'],
  },
  {
    id: 'cloud',
    index: '04',
    title: 'Cloud & Infrastructure',
    desc: 'Containerized microservices, git-flow release automation, and seamless zero-downtime deployments.',
    tags: ['GitHub Actions', 'Docker', 'AWS S3/EC2', 'Vercel', 'CI/CD Pipelines'],
  },
]

// Full skills breakdown
export const skillsData = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'Asynchronous runtimes, robust API contracts & scalable data schemas',
    badge: 'Backend Architecture',
    color: '#2eff8c',
    items: [
      {
        title: 'Node.js Engine',
        badge: 'Runtime',
        points: [
          'Event-driven, asynchronous non-blocking I/O architectures',
          'High-throughput concurrent API services and event handling',
          'Native stream processing, buffers, and file operations',
          'Deep mastery of the npm ecosystem and modular packaging',
        ],
      },
      {
        title: 'Express.js & REST Contracts',
        badge: 'Framework',
        points: [
          'Strict RESTful architectural patterns and HTTP semantics',
          'Custom middleware pipelines for auth, logging & rate-limiting',
          'Centralized error handling and graceful service teardowns',
          'Payload schema validation and sanitization using Zod/Joi',
        ],
      },
      {
        title: 'MongoDB & Database Layer',
        badge: 'NoSQL DB',
        points: [
          'Normalized & denormalized document schema modeling',
          'Mongoose ODM with index optimizations and validation hooks',
          'Multi-stage aggregation pipelines and efficient lookups',
          'MongoDB Atlas cloud clustering, replication, and backup routines',
        ],
      },
      {
        title: 'Firebase Suite',
        badge: 'BaaS / Cloud',
        points: [
          'Firestore real-time snapshot listeners and offline cache',
          'OAuth 2.0 social authentication and token verification',
          'Serverless Cloud Functions triggers and webhooks',
          'Granular Cloud Storage security rules and asset delivery',
        ],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Component-driven UI, declarative state systems & dynamic micro-interactions',
    badge: 'Frontend Systems',
    color: '#2eff8c',
    items: [
      {
        title: 'React Ecosystem',
        badge: 'UI Library',
        points: [
          'Component-driven architecture and composable pattern design',
          'Custom React Hooks, useReducer, and Context state management',
          'Render cycle optimization, memoization (useMemo, useCallback)',
          'Declarative layout transitions with Framer Motion springs',
        ],
      },
      {
        title: 'Modern JavaScript (ES6+)',
        badge: 'Core Language',
        points: [
          'Functional programming paradigms, closures & pure functions',
          'Asynchronous concurrency with Promises and async/await',
          'Deep understanding of the JavaScript Event Loop & Microtask Queue',
          'Modular ES module imports, dynamic imports & tree-shaking',
        ],
      },
      {
        title: 'Tailwind CSS Engine',
        badge: 'Styling',
        points: [
          'Utility-first responsive layouts and CSS variables integration',
          'Design tokens, custom theme configurations, and font pairings',
          'JIT compiler optimization, minimal CSS bundle footprint',
          'Dark-mode native tokens with zero runtime flicker',
        ],
      },
      {
        title: 'Semantic HTML5 & Modern CSS3',
        badge: 'Web Standard',
        points: [
          'Accessible, semantic markup compliant with WCAG/a11y standards',
          'CSS Grid and Flexbox for fluid multi-breakpoint systems',
          'Hardware-accelerated CSS animations and GPU-friendly transforms',
          'Clean responsive typography hierarchies and viewport scaling',
        ],
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI-Assisted Workflow',
    subtitle: 'Generative AI tooling, prompt orchestration & rapid software iteration',
    badge: 'AI Engineering',
    color: '#2eff8c',
    items: [
      {
        title: 'Prompt Engineering',
        badge: 'Prompting',
        points: [
          'Structured system prompt crafting and persona definition',
          'Multi-step chained prompt pipelines for code synthesis',
          'Zero-shot and few-shot reasoning patterns for complex logic',
          'Automated interface generation and UI mockup translation',
        ],
      },
      {
        title: 'Code Refactoring & Optimization',
        badge: 'Refactoring',
        points: [
          'Algorithmic time complexity reduction (O(n²) to O(n log n))',
          'Legacy code modernization and elimination of technical debt',
          'Type-safety enrichment and defensive boundary checking',
          'Bundle size analysis and dead-code elimination',
        ],
      },
      {
        title: 'AI Pair Debugging',
        badge: 'Pair Programming',
        points: [
          'Stack trace root-cause diagnosis and reproduction scripts',
          'Edge-case unit test generation and mutation coverage',
          'Memory profile analysis and leak mitigation strategies',
          'API contract mocking and synthetic data generator routines',
        ],
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    subtitle: 'Containers, automated CI/CD pipelines & production hosting',
    badge: 'DevOps / Cloud',
    color: '#2eff8c',
    items: [
      {
        title: 'Git & Version Control',
        badge: 'VCS / CI',
        points: [
          'Feature-branch git workflows with clear commit conventions',
          'GitHub Actions CI/CD pipelines for lint, test, and deploy',
          'Pull request review checklists and branch protection rules',
          'Semantic versioning tags and changelog automation',
        ],
      },
      {
        title: 'Docker Containerization',
        badge: 'Containers',
        points: [
          'Multi-stage Dockerfiles optimizing build cache and image size',
          'Docker Compose orchestration for multi-service environments',
          'Container registry publication and tag management',
          'Minimal production runtimes based on lightweight Alpine Linux',
        ],
      },
      {
        title: 'AWS & Cloud Hosting',
        badge: 'Cloud Infrastructure',
        points: [
          'AWS S3 bucket configuration with HTTPS distribution',
          'AWS EC2 virtual server provisioning and security groups',
          'Serverless AWS Lambda executions and event triggers',
          'Vercel edge network deployment with instant rollbacks',
        ],
      },
    ],
  },
]

export const projects = [
  {
    id: 'easysell',
    title: 'EasySell',
    category: 'Full Stack',
    desc: 'Full-featured e-commerce platform with catalog browsing, shopping cart, and Node.js backend order processing.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    image: EasySell,
    featured: true,
  },
  {
    id: 'smartwatch',
    title: 'Smart Watch OS UI',
    category: 'JavaScript',
    desc: 'Interactive smart-watch interface simulation — live watch face, app launcher, and video player widget.',
    tech: ['JavaScript ES6', 'HTML5', 'CSS3 Animations'],
    image: smartwatch,
    url: 'https://your-watch.netlify.app/',
    featured: true,
  },
  {
    id: 'code-editor',
    title: 'Online Code Editor',
    category: 'JavaScript',
    desc: 'Browser-based real-time IDE that compiles, executes, and previews HTML, CSS, and JavaScript with instant feedback.',
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Compiler Sandbox'],
    image: codeEditor,
    url: 'https://onlinecomplier.netlify.app/',
    featured: true,
  },
  {
    id: 'discord',
    title: 'Discord Web Interface',
    category: 'Tailwind CSS',
    desc: 'Faithful, pixel-perfect clone of the Discord landing experience with responsive grid and utility styling.',
    tech: ['HTML5', 'Tailwind CSS', 'Responsive UI'],
    image: discord,
    url: 'https://sheetal-discord.netlify.app/',
    featured: true,
  },
  {
    id: 'album',
    title: 'Online Album Maker',
    category: 'JavaScript',
    desc: 'Interactive media album creator allowing users to combine photo galleries, sync audio soundtracks, and customize captions.',
    tech: ['JavaScript', 'Audio API', 'HTML5', 'CSS3'],
    image: album,
    url: 'https://s-album-maker.netlify.app/',
    featured: true,
  },
  {
    id: 'ice',
    title: 'ICE Enterprise Website',
    category: 'HTML & CSS',
    desc: 'Corporate static web platform showcasing corporate services layout, responsive navigation, and contact portal.',
    tech: ['HTML5 Semantic', 'CSS3 Grid/Flexbox'],
    image: ice,
    url: 'https://iceclone.netlify.app/',
    featured: true,
  },
  {
    id: 'arjuna',
    title: 'The Arjuna Game',
    category: 'JavaScript',
    desc: 'Action-packed 2D arcade browser game developed with vanilla JavaScript, collision detection, and score loop.',
    tech: ['JavaScript', 'HTML5 Canvas', 'Game Loop'],
    image: arjuna,
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'Signal Portfolio',
    category: 'React',
    desc: 'This site — React 19, Framer Motion springs, Lenis smooth scrolling, and Node.js nodemailer mail service.',
    tech: ['React 19', 'Framer Motion', 'Tailwind CSS', 'Node.js'],
    image: portfolio,
    featured: false,
  },
]

export const projectCategories = ['All', 'Full Stack', 'JavaScript', 'Tailwind CSS', 'React', 'HTML & CSS']

// Engineering blogs / technical notes
export const blogArticles = [
  {
    id: 'usecallback-optimization',
    title: 'Optimizing React Rendering: Memory Heap vs. The Call Stack',
    slug: 'react-usecallback-heap-memory',
    date: 'March 2025',
    readTime: '4 min read',
    category: 'React Internals',
    summary:
      'Why recreating functions on every render harms React performance, how the Heap and Call Stack interact, and when useCallback is truly warranted.',
    keyPoints: [
      'Every function declaration inside a React component receives a brand new memory reference on every render.',
      'Passing new references down to memoized child components causes cascaded, unnecessary re-renders.',
      'useCallback preserves the memory address between renders until dependencies update.',
    ],
  },
  {
    id: 'rubiks-cube-algorithms',
    title: 'The Rubik’s Cube Mindset in Software Architecture',
    slug: 'rubiks-cube-software-algorithms',
    date: 'February 2025',
    readTime: '3 min read',
    category: 'Engineering Philosophy',
    summary:
      'How solving 3x3 Rubik’s cubes in under 3.5 seconds teaches algorithmic decomposition, pattern recognition, and predictable state transitions.',
    keyPoints: [
      'Complex global problems must be solved through isolated, sequential phases (Cross -> F2L -> OLL -> PLL).',
      'Premature optimization without structural clarity results in broken states.',
      'Muscle memory in algorithms translates directly to fluent, instinctive code patterns.',
    ],
  },
  {
    id: 'nodejs-event-loop',
    title: 'Demystifying the Node.js Event Loop & Non-Blocking I/O',
    slug: 'nodejs-event-loop-architecture',
    date: 'January 2025',
    readTime: '5 min read',
    category: 'Backend Architecture',
    summary:
      'A deep dive into timers, pending callbacks, poll phase, check (setImmediate), and close callbacks under high concurrency.',
    keyPoints: [
      'Node.js is single-threaded in JavaScript execution, but multi-threaded under the hood via libuv.',
      'CPU-heavy operations freeze the event loop and must be delegated to worker threads.',
      'Microtask queues (process.nextTick, Promise.then) take precedence between each phase.',
    ],
  },
]
