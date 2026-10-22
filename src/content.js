// All site content lives here. Shared facts (dates, links) are defined once;
// all visible text lives under `copy`.

export const NOW = '2026-10';

export const links = {
  email: 'cihansercaliskan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cihanser-caliskan/',
  github: 'https://github.com/CihanserC',
  doi: 'https://doi.org/10.1109/ICEEE59925.2023.00045',
};

// Rows of the career schedule. `end: null` means ongoing.
export const schedule = [
  { id: 'bsc', row: 'study', start: '2016-09', end: '2020-06' },
  { id: 'msc', row: 'study', start: '2020-09', end: '2023-06' },
  { id: 'pof', row: 'research', start: '2019-09', end: '2020-06' },
  { id: 'thesis', row: 'research', start: '2022-09', end: '2023-06' },
  { id: 'mojssp', row: 'research', start: '2024-07', end: null },
  { id: 'monovi', row: 'work', start: '2020-07', end: '2021-01' },
  { id: 'doruk', row: 'work', start: '2021-01', end: '2024-07' },
  { id: 'veripark', row: 'work', start: '2024-07', end: '2026-03' },
  { id: 'vbt', row: 'work', start: '2026-03', end: '2026-09' },
];

export const projects = {
  featured: [
    {
      id: 'metaheuristics',
      name: 'Metaheuristic Algorithms Training',
      stack: 'JavaScript, Python',
      source: 'https://github.com/CihanserC/metaheuristic-algorithms-training',
      live: 'https://cihanserc.github.io/metaheuristic-algorithms-training/',
      image: 'img/metaheuristics.png',
    },
    {
      id: 'ecommerce',
      name: 'Microservice E-Commerce',
      stack: '.NET 10, Docker, messaging',
      source: 'https://github.com/CihanserC/Microservice-Ecommerce',
      live: 'https://cihanserc.github.io/Microservice-Ecommerce/',
      image: 'img/ecommerce.png',
    },
    {
      id: 'aural',
      name: 'Aural AI',
      stack: 'React, Three.js, GSAP',
      source: 'https://github.com/CihanserC/airpods-experience',
      live: 'https://cihanserc.github.io/airpods-experience/',
      image: 'img/aural.png',
    },
  ],
  groups: [
    {
      id: 'optimization',
      items: [
        { id: 'motsp', name: 'Multi-Objective TSP', stack: 'Java', source: 'https://github.com/CihanserC/Multi-Objective-TSP', demo: true },
        { id: 'infotheory', name: 'Advanced Information Theory', stack: 'C#', source: 'https://github.com/CihanserC/Advanced-Information-Theory' },
      ],
    },
    {
      id: 'graphics',
      items: [
        { id: 'garage', name: 'Muscle Garage', stack: 'React, Three.js, Rapier', source: 'https://github.com/CihanserC/NFS-Most-Wanted' },
      ],
    },
  ],
};

export const copy = {
  meta: {
    title: 'Cihanser Çalışkan, software developer',
    description: 'Software developer in Dubai with a research interest in optimization, metaheuristic algorithms, quantum computation and machine learning.',
  },
  skip: 'Skip to content',
  nav: { experience: 'Experience', research: 'Research', projects: 'Projects', contact: 'Contact' },
  theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
  present: 'present',
  hero: {
    role: 'Software developer in Dubai, UAE.',
    intro:
      'I have been building backend, banking and industrial software since 2020, most recently for Garanti BBVA and Akbank. My interests are optimization, metaheuristic algorithms, quantum computation and machine learning; my master’s thesis and IEEE paper used genetic algorithms to schedule jobs on machines.',
    email: 'Email me',
  },
  schedule: {
    title: 'Career schedule',
    caption:
      'My career drawn as a job-shop schedule: each row is a machine, each bar a job. Select a bar to see the details.',
    rows: { work: 'Work', research: 'Research', study: 'Education' },
    today: 'Today',
    open: 'Read more',
  },
  items: {
    bsc: { short: 'BSc', title: 'BSc in Computer Engineering', org: 'Yaşar University' },
    msc: { short: 'MSc', title: 'MSc in Computer Engineering', org: 'Yaşar University' },
    pof: { short: 'POF', title: 'Undergraduate thesis: Performance Optimized Fluids', org: 'Yaşar University' },
    thesis: { short: 'MSc thesis', title: 'Graduate thesis: solving the job scheduling problem', org: 'Yaşar University' },
    mojssp: { short: 'Multi-objective JSSP', title: 'Multi-objective job shop scheduling', org: 'Independent research' },
    monovi: { short: 'Monovi', title: 'Analyst Software Developer', org: 'Monovi' },
    doruk: { short: 'Doruk Automation', title: 'Senior Software Engineer', org: 'Doruk Automation' },
    veripark: { short: 'Akbank', title: 'Senior Backend Developer', org: 'Veripark, for Akbank' },
    vbt: { short: 'Garanti BBVA', title: 'Site Reliability Engineer', org: 'VBT, for Garanti BBVA' },
  },
  experience: {
    title: 'Experience',
    jobs: {
      vbt: [
        'Worked on the reliability, scalability and performance of Garanti BBVA’s banking systems.',
        'Automated infrastructure and deployment processes to make systems more stable and operations more efficient.',
        'Monitored system health and performance metrics for high availability and proactive incident management.',
      ],
      veripark: [
        'Designed and built high-performance SOAP, REST and gRPC services in Java Spring Boot, including splitting out the Forex services and converting SOAP endpoints to REST.',
        'Migrated legacy applications from .NET Framework to .NET 8.',
        'Ran application lifecycles on OpenShift, Kubernetes and Docker, with error analysis and log tracking over Kafka and MQ.',
      ],
      doruk: [
        'Built MES/MOM software for Industry 4.0 that makes manufacturing processes more efficient.',
        'Integrated real-time data collection, analysis and visualization between machines, sensors and enterprise systems.',
        'Used Azure DevOps Server to automate builds and deployments and manage the project lifecycle.',
      ],
      monovi: [
        'Implemented track-and-trace systems for JTI and provided 24/7 support, handling incidents from report to resolution within SLAs.',
      ],
    },
  },
  demo: {
    title: 'Try the algorithm',
    intro:
      'A small version of the self-adaptive genetic algorithm from my paper. It orders 15 jobs on 5 machines, starting from a random order, to finish all of them as early as possible. Each colour is a job; the dashed line is the makespan, the time the last job finishes.',
    run: 'Run the algorithm',
    running: 'Running…',
    again: 'Run again',
    newProblem: 'New problem',
    generation: 'Generation',
    makespan: 'Makespan',
    rate: 'Mean mutation rate',
    ganttLabel: 'Schedule of 15 jobs on 5 machines with makespan {cost}',
  },
  pareto: {
    intro:
      'Below, a browser version of the same idea: NSGA-II plans a round trip through 12 cities. Some short roads are congested, so the shortest tour is rarely the fastest. Each green point is a tour that no other tour beats on both distance and time; together they form the Pareto front. Point at one to see its route.',
    run: 'Run NSGA-II',
    running: 'Evolving…',
    again: 'Run again',
    newMap: 'New map',
    distance: 'Total distance',
    time: 'Total time',
    frontSize: 'Tours on the front',
    selected: 'Selected tour, distance / time',
    plotCaption: 'Grey points are dominated tours; green points form the Pareto front.',
    plotLabel: 'Tours plotted by total distance and total time',
    pointLabel: 'Tour with distance {d} and time {t}',
  },
  quantum: {
    title: 'Quantum-inspired evolution',
    intro:
      'I also work on quantum-inspired genetic algorithms. Instead of plain bits, each gene is a Q-bit: a superposition that is observed as 0 or 1 with some probability. Here 16 Q-bits search for a hidden 16-bit string. Every generation observes them, and a rotation gate turns each Q-bit towards the best string found so far.',
    run: 'Observe and evolve',
    running: 'Evolving…',
    again: 'Start over',
    newTarget: 'New hidden string',
    best: 'Best match',
    legend: 'Each dial is one Q-bit: pointing right means it will almost surely be observed as 0, pointing up as 1. The percentage is the chance of a 1. Green boxes are observed bits that match the hidden string.',
    registerLabel: 'Register of 16 Q-bits',
  },
  research: {
    title: 'Research',
    publicationLabel: 'Publication',
    citation:
      'C. Çalışkan and K. Erdoğdu. Self-adaptive genetic algorithm for permutation flow shop scheduling problems. In 2023 10th International Conference on Electrical and Electronics Engineering (ICEEE), pages 207–213, Istanbul, Turkey, 2023. IEEE.',
    doiLabel: 'Read on IEEE Xplore',
    work: {
      mojssp:
        'Extending my self-adaptive genetic algorithm from permutation flow shops to multi-objective job shops, with new heuristics for the trade-off between makespan and total tardiness. A journal article is in preparation.',
      thesis:
        'Heuristic and genetic algorithms for permutation flow shop scheduling, using evolutionary computation to improve schedule quality. Published at IEEE ICEEE 2023.',
      pof:
        'Faster fluid surface reconstruction for simulations, tested with NVIDIA FleX and marching cubes for frame rate and memory use.',
    },
    educationTitle: 'Education',
    education: {
      msc: 'Concentrations: optimization problems, heuristic algorithms, artificial intelligence, machine learning. GPA 3.65 / 4.00.',
      bsc: 'Focus: artificial intelligence and computer graphics.',
    },
  },
  projects: {
    title: 'Projects',
    source: 'Source',
    live: 'Live site',
    featured: {
      metaheuristics:
        'An interactive, bilingual course on metaheuristic algorithms. Each algorithm comes with an intuition, a step-by-step walkthrough, a live animation with adjustable parameters and runnable Python code.',
      ecommerce:
        'A teaching-oriented microservices skeleton with an API gateway, an orchestrated saga with compensation, outbox and inbox, and tracing. Its simulator animates every HTTP call, message and saga step and links to the line of code behind it.',
      aural:
        'A scroll-driven 3D launch page where an earbud case opens and the earbud comes apart layer by layer.',
    },
    groups: { optimization: 'Optimization and research code', graphics: 'Graphics and games' },
    items: {
      motsp: 'NSGA-II for a travelling salesman problem with two objectives: distance and travel time.',
      infotheory: 'Entropy, redundancy and Huffman coding measured on English text.',
      garage: 'A browser-based 3D garage: tune a car part by part, then test-drive it with real physics.',
    },
    more: 'Everything else is on GitHub',
  },
  skills: {
    title: 'Skills',
    list: [
      ['Languages', 'C#, Java, Python, SQL, T-SQL, C/C++'],
      ['Backend', '.NET 8, Spring Boot, ASP.NET MVC, WCF, Entity Framework'],
      ['Platform and DevOps', 'OpenShift, Kubernetes, Docker, Azure DevOps, CI/CD, Git'],
      ['Messaging and integration', 'Apache Kafka, MQ, gRPC, REST, SOAP'],
      ['Interests', 'Optimization, metaheuristic algorithms, quantum computation, machine learning'],
      ['Spoken', 'Turkish (native), English (fluent), German (beginner)'],
    ],
  },
  contact: {
    title: 'Contact',
    lead: 'I’m open to conversations about software development and optimization research.',
    location: 'Dubai, UAE',
  },
  footer: 'Built with React and Vite.',
};

