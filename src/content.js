// All site content lives here. Shared facts (dates, links) are defined once;
// translatable text is keyed by language under `copy`.

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

const en = {
  meta: {
    title: 'Cihanser Çalışkan, software developer',
    description: 'Software developer in Dubai with a research interest in optimization, metaheuristic algorithms, quantum computation and machine learning.',
  },
  skip: 'Skip to content',
  nav: { experience: 'Experience', research: 'Research', projects: 'Projects', contact: 'Contact' },
  langLabel: 'Language',
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

const tr = {
  meta: {
    title: 'Cihanser Çalışkan, yazılım geliştirici',
    description: 'Dubai’de yazılım geliştirici; ilgi alanları optimizasyon, metasezgisel algoritmalar, kuantum hesaplama ve makine öğrenmesi.',
  },
  skip: 'İçeriğe geç',
  nav: { experience: 'Deneyim', research: 'Araştırma', projects: 'Projeler', contact: 'İletişim' },
  langLabel: 'Dil',
  theme: { toDark: 'Koyu temaya geç', toLight: 'Açık temaya geç' },
  present: 'devam ediyor',
  hero: {
    role: 'Dubai’de yazılım geliştirici.',
    intro:
      '2020’den beri backend, bankacılık ve endüstriyel yazılım geliştiriyorum; son olarak Garanti BBVA ve Akbank projelerinde çalıştım. İlgi alanlarım optimizasyon, metasezgisel algoritmalar, kuantum hesaplama ve makine öğrenmesi; yüksek lisans tezimde ve IEEE makalemde iş çizelgeleme problemlerini genetik algoritmalarla çözdüm.',
    email: 'E-posta gönder',
  },
  schedule: {
    title: 'Kariyer çizelgesi',
    caption:
      'Kariyerim bir atölye çizelgesi olarak: her satır bir makine, her çubuk bir iş. Ayrıntılar için bir çubuk seçin.',
    rows: { work: 'İş', research: 'Araştırma', study: 'Eğitim' },
    today: 'Bugün',
    open: 'Devamını oku',
  },
  items: {
    bsc: { short: 'Lisans', title: 'Bilgisayar Mühendisliği lisans', org: 'Yaşar Üniversitesi' },
    msc: { short: 'Yüksek lisans', title: 'Bilgisayar Mühendisliği yüksek lisans', org: 'Yaşar Üniversitesi' },
    pof: { short: 'POF', title: 'Lisans tezi: Performance Optimized Fluids', org: 'Yaşar Üniversitesi' },
    thesis: { short: 'YL tezi', title: 'Yüksek lisans tezi: iş çizelgeleme probleminin çözümü', org: 'Yaşar Üniversitesi' },
    mojssp: { short: 'Çok amaçlı JSSP', title: 'Çok amaçlı atölye tipi çizelgeleme', org: 'Bağımsız araştırma' },
    monovi: { short: 'Monovi', title: 'Analist Yazılım Geliştirici', org: 'Monovi' },
    doruk: { short: 'Doruk Otomasyon', title: 'Kıdemli Yazılım Mühendisi', org: 'Doruk Otomasyon' },
    veripark: { short: 'Akbank', title: 'Kıdemli Backend Geliştirici', org: 'Veripark, Akbank projesi' },
    vbt: { short: 'Garanti BBVA', title: 'Site Güvenilirlik Mühendisi (SRE)', org: 'VBT, Garanti BBVA projesi' },
  },
  experience: {
    title: 'Deneyim',
    jobs: {
      vbt: [
        'Garanti BBVA bankacılık sistemlerinin güvenilirliği, ölçeklenebilirliği ve performansı üzerinde çalıştım.',
        'Sistemleri daha kararlı, operasyonu daha verimli hale getirmek için altyapı ve dağıtım süreçlerini otomatikleştirdim.',
        'Yüksek erişilebilirlik ve proaktif olay yönetimi için sistem sağlığını ve performans metriklerini izledim.',
      ],
      veripark: [
        'Java Spring Boot ile yüksek performanslı SOAP, REST ve gRPC servisleri tasarlayıp geliştirdim; Forex servislerinin ayrıştırılması ve SOAP’tan REST’e dönüşüm bunlara dahil.',
        'Eski uygulamaları .NET Framework’ten .NET 8’e taşıdım.',
        'Uygulama yaşam döngülerini OpenShift, Kubernetes ve Docker üzerinde yönettim; Kafka ve MQ ile hata analizi ve log takibi kurdum.',
      ],
      doruk: [
        'Üretim süreçlerini verimli hale getiren Endüstri 4.0 MES/MOM yazılımları geliştirdim.',
        'Makineler, sensörler ve kurumsal sistemler arasında gerçek zamanlı veri toplama, analiz ve görselleştirme entegrasyonları kurdum.',
        'Azure DevOps Server ile build ve dağıtımları otomatikleştirip proje yaşam döngüsünü yönettim.',
      ],
      monovi: [
        'JTI için takip ve izleme (T&T) sistemleri kurdum; olayları bildirimden çözüme kadar SLA’lara uygun şekilde yöneterek 7/24 destek verdim.',
      ],
    },
  },
  demo: {
    title: 'Algoritmayı deneyin',
    intro:
      'Makalemdeki kendinden uyarlamalı genetik algoritmanın küçük bir sürümü. 5 makinedeki 15 işi, rastgele bir sıradan başlayarak hepsi en erken bitecek şekilde sıralıyor. Her renk bir iş; kesikli çizgi makespan, yani son işin bittiği an.',
    run: 'Algoritmayı çalıştır',
    running: 'Çalışıyor…',
    again: 'Tekrar çalıştır',
    newProblem: 'Yeni problem',
    generation: 'Nesil',
    makespan: 'Makespan',
    rate: 'Ortalama mutasyon oranı',
    ganttLabel: '5 makinede 15 işin çizelgesi, makespan {cost}',
  },
  pareto: {
    intro:
      'Aşağıda aynı fikrin tarayıcıda çalışan bir sürümü var: NSGA-II, 12 şehirden geçen bir tur planlıyor. Bazı kısa yollar trafikli, bu yüzden en kısa tur nadiren en hızlısı oluyor. Her yeşil nokta, hem mesafede hem sürede başka hiçbir turun geçemediği bir tur; hepsi birlikte Pareto cephesini oluşturuyor. Rotasını görmek için bir noktanın üzerine gelin.',
    run: 'NSGA-II’yi çalıştır',
    running: 'Evriliyor…',
    again: 'Tekrar çalıştır',
    newMap: 'Yeni harita',
    distance: 'Toplam mesafe',
    time: 'Toplam süre',
    frontSize: 'Cephedeki tur sayısı',
    selected: 'Seçili tur, mesafe / süre',
    plotCaption: 'Gri noktalar baskılanan turlar; yeşil noktalar Pareto cephesi.',
    plotLabel: 'Toplam mesafe ve toplam süreye göre turlar',
    pointLabel: 'Mesafesi {d}, süresi {t} olan tur',
  },
  quantum: {
    title: 'Kuantum esinli evrim',
    intro:
      'Kuantum esinli genetik algoritmalar üzerinde de çalışıyorum. Bu yöntemlerde her gen sıradan bir bit değil, bir Q-bit: belirli olasılıklarla 0 ya da 1 olarak gözlenen bir süperpozisyon. Burada 16 Q-bit gizli bir 16 bitlik diziyi arıyor. Her nesilde Q-bitler gözleniyor ve bir dönüş kapısı her birini o ana kadar bulunan en iyi diziye doğru çeviriyor.',
    run: 'Gözle ve evril',
    running: 'Evriliyor…',
    again: 'Baştan başla',
    newTarget: 'Yeni gizli dizi',
    best: 'En iyi eşleşme',
    legend: 'Her kadran bir Q-bit: sağı gösteriyorsa neredeyse kesin 0, yukarıyı gösteriyorsa 1 olarak gözlenir. Yüzde, 1 gelme olasılığı. Yeşil kutular gizli diziyle eşleşen gözlenmiş bitler.',
    registerLabel: '16 Q-bitlik yazmaç',
  },
  research: {
    title: 'Araştırma',
    publicationLabel: 'Yayın',
    citation:
      'C. Çalışkan and K. Erdoğdu. Self-adaptive genetic algorithm for permutation flow shop scheduling problems. In 2023 10th International Conference on Electrical and Electronics Engineering (ICEEE), pages 207–213, Istanbul, Turkey, 2023. IEEE.',
    doiLabel: 'IEEE Xplore’da oku',
    work: {
      mojssp:
        'Permütasyon akış tipi çizelgeleme için geliştirdiğim kendinden uyarlamalı genetik algoritmayı çok amaçlı atölye tipi problemlere genişletiyorum; makespan ile toplam gecikme arasındaki dengeyi kuran yeni sezgiseller üzerinde çalışıyorum. Bir dergi makalesi hazırlık aşamasında.',
      thesis:
        'Permütasyon akış tipi çizelgeleme için sezgisel ve genetik algoritmalar; çizelge kalitesini evrimsel hesaplama ile iyileştirme. IEEE ICEEE 2023’te yayımlandı.',
      pof:
        'Simülasyonlarda daha hızlı akışkan yüzey oluşturma; NVIDIA FleX ve marching cubes ile kare hızı ve bellek kullanımı açısından test edildi.',
    },
    educationTitle: 'Eğitim',
    education: {
      msc: 'Odak alanları: optimizasyon problemleri, sezgisel algoritmalar, yapay zekâ, makine öğrenmesi. Not ortalaması 3,65 / 4,00.',
      bsc: 'Odak: yapay zekâ ve bilgisayar grafikleri.',
    },
  },
  projects: {
    title: 'Projeler',
    source: 'Kaynak kod',
    live: 'Canlı site',
    featured: {
      metaheuristics:
        'Metasezgisel algoritmalar üzerine etkileşimli, iki dilli bir eğitim. Her algoritma için sezgi, adım adım anlatım, parametreleri değiştirilebilen canlı animasyon ve çalıştırılabilir Python kodu var.',
      ecommerce:
        'Öğretim amaçlı bir mikroservis iskeleti: API gateway, telafili orkestre saga, outbox ve inbox, izleme. Simülatörü her HTTP çağrısını, mesajı ve saga adımını canlandırıp onu üreten kod satırını açıyor.',
      aural:
        'Kaydırmayla ilerleyen 3B ürün sayfası: kulaklık kutusu açılıyor, kulaklık katman katman ayrılıyor.',
    },
    groups: { optimization: 'Optimizasyon ve araştırma kodu', graphics: 'Grafik ve oyun' },
    items: {
      motsp: 'Mesafe ve seyahat süresi olmak üzere iki amaçlı gezgin satıcı problemi için NSGA-II.',
      infotheory: 'İngilizce metin üzerinde entropi, artıklık ve Huffman kodlaması ölçümleri.',
      garage: 'Tarayıcıda 3B garaj: arabayı parça parça modifiye edip gerçek fizikle test sürüşüne çıkarın.',
    },
    more: 'Diğer her şey GitHub’da',
  },
  skills: {
    title: 'Yetkinlikler',
    list: [
      ['Programlama dilleri', 'C#, Java, Python, SQL, T-SQL, C/C++'],
      ['Backend', '.NET 8, Spring Boot, ASP.NET MVC, WCF, Entity Framework'],
      ['Platform ve DevOps', 'OpenShift, Kubernetes, Docker, Azure DevOps, CI/CD, Git'],
      ['Mesajlaşma ve entegrasyon', 'Apache Kafka, MQ, gRPC, REST, SOAP'],
      ['İlgi alanları', 'Optimizasyon, metasezgisel algoritmalar, kuantum hesaplama, makine öğrenmesi'],
      ['Diller', 'Türkçe (ana dil), İngilizce (akıcı), Almanca (başlangıç)'],
    ],
  },
  contact: {
    title: 'İletişim',
    lead: 'Yazılım geliştirme ve optimizasyon araştırması üzerine konuşmaya açığım.',
    location: 'Dubai, BAE',
  },
  footer: 'React ve Vite ile yapıldı.',
};

export const copy = { en, tr };
