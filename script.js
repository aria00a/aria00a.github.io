/* ======================================================
   LANGUAGE & THEME DATA
====================================================== */
const LANG = {
  en: {
    brand: "My Portfolio",
    btn_da: "Data Analyst",
    btn_qa: "Quality Assurance",

    // ── DATA ANALYST ───────────────────────────
    da_role: "Data Analyst",
    da_name: "Aria Bimantara",
    da_about: "I am a detail-oriented Quality Assurance professional with over 5+ years of experience in the banking sector, currently transitioning into Data Analytics. With strong foundation in accuracy, risk assessment, and structured documentation across multiple system release cycles. Experienced in managing testing data, ensuring compliance with banking standards, and performing in-depth test analysis to reduce post-release defects and enhance system stability. Proficient in SQL for data extraction and analysis, with hands-on experience using Python and Tableau in portfolio projects to analyze datasets, identify trends, and develop interactive dashboards. Committed to applying analytical thinking and continuous learning to deliver reliable, data-driven business decisions.",
    da_cv_ats: "Download CV",
    da_cv_ats_url: "https://drive.google.com/file/d/112ZK_ry7gHnTywV19FBgFqjMhl8-mIRw/view?usp=drive_link",
    da_edu_title: "Education",
    da_edu: [
      {
        degree: "Bachelor of Informatics",
        school: "Pamulang University",
        year: "Sep, 2016 – Apr, 2023",
        logo: "img/Unpam.png",
        prodi: "Bachelor of Informatics Engineering, GPA 3.34 / 4.00",
        tanggal: "Sep, 2016 – Apr, 2023",
        isi: "Thesis: Design and Implementation of an Information System Dashboard Using the Scrum Framework with Azure Boards (Case Study: PT Arranet Indonesia Sejahtera)",
        isiType: "text"
      },
      {
        degree: "Full-stack Data Analytics",
        school: "RevoU",
        year: "Oct, 2025 – Feb, 2026",
        logo: "img/RevoU.png",
        prodi: "Full-stack Data Analytics",
        tanggal: "Oct, 2025 – Feb, 2026",
        isi: [
          "Analyzed datasets using SQL (BigQuery) to extract, clean, and transform data for business analysis.",
          "Performed exploratory data analysis and data processing using Python (Google Colab) and relevant libraries.",
          "Developed interactive dashboards in Tableau tailored to stakeholder needs.",
          "Structured business problems into analytical frameworks to guide data-driven decision making.",
          "Delivered end-to-end Data End-to-End Portfolio Project (DEEPP), translating raw data into actionable insights and recommendations."
        ],
        isiType: "bullets"
      }
    ],
    da_contact_title: "Contact",
    da_contact: {
      location: "South Tangerang, Banten",
      linkedin: "https://www.linkedin.com/in/aria-bimantara00a/",
      email: "aria.00a@gmail.com"
    },
    da_tech_title: "Technical Skills",
    da_tech: ["Excel", "Spreadsheet", "SQL", "Python", "Tableau"],
    da_soft_title: "Soft Skills",
    da_soft: ["Analytical Thinking", "Problem Solving", "Data Storytelling", "Attention to Detail", "Team Collaboration", "Critical Thinking"],
    da_cert_title: "Certifications",
    da_certs: [
      { name: "Google Data Analytics Certificate", issuer: "Google · 2023" },
      { name: "SQL for Data Science", issuer: "Coursera · 2023" },
      { name: "Tableau Desktop Specialist", issuer: "Tableau · 2022" },
      { name: "Python for Everybody", issuer: "Coursera · 2022" }
    ],
    da_proj_title: "Project Experience",
    da_projects: [
      {
        role: "Personal Project",
        title: "Sales Performance Dashboard",
        desc: "Built an interactive Tableau dashboard to visualize monthly sales KPIs, regional performance, and customer segmentation for a retail dataset.",
        tags: ["Tableau", "SQL", "Excel"]
      },
      {
        role: "Freelance",
        title: "Customer Churn Analysis",
        desc: "Performed EDA and predictive modeling using Python (Pandas, Sklearn) to identify key drivers of customer churn with 82% model accuracy.",
        tags: ["Python", "Pandas", "Scikit-learn"]
      },
      {
        role: "Academic Project",
        title: "Market Basket Analysis",
        desc: "Applied Apriori algorithm on transactional data to discover product association rules, aiding cross-selling strategy for a local retailer.",
        tags: ["Python", "MLxtend", "Jupyter"]
      }
    ],

    // ── QUALITY ASSURANCE ──────────────────────
    qa_role: "Quality Assurance Engineer",
    qa_name: "Aria Bimantara",
    qa_about: "Detail-oriented QA Engineer with hands-on experience in manual and automated testing. Committed to delivering high-quality software by identifying defects early and ensuring robust test coverage across web and mobile platforms.",
    qa_cv_ats: "Download CV",
    qa_cv_ats_url: "#",
    qa_edu_title: "Education",
    qa_edu: [
      {
        degree: "Bachelor of Informatics",
        school: "Pamulang University",
        year: "Sep, 2016 – Apr, 2023",
        logo: "",
        prodi: "Bachelor of Informatics Engineering, GPA 3.34 / 4.00",
        tanggal: "Sep, 2016 – Apr, 2023",
        isi: "Thesis: Design and Implementation of an Information System Dashboard Using the Scrum Framework with Azure Boards (Case Study: PT Arranet Indonesia Sejahtera)",
        isiType: "text"
      },
      {
        degree: "QA Automation Bootcamp",
        school: "Bootcamp Institution",
        year: "2023",
        logo: "",
        prodi: "QA Automation Bootcamp",
        tanggal: "2023",
        isi: [
          "Intensive QA automation training covering Selenium WebDriver and TestNG.",
          "Hands-on experience with Postman API testing and Newman CI/CD integration.",
          "Built automated test frameworks for web applications using page-object-model design pattern.",
          "Generated HTML test reports across multiple browser environments."
        ],
        isiType: "bullets"
      }
    ],
    qa_contact_title: "Contact",
    qa_contact: {
      location: "South Tangerang, Banten",
      linkedin: "https://www.linkedin.com/in/aria-bimantara00a/",
      email: "aria.00a@gmail.com"
    },
    qa_tech_title: "Technical Skills",
    qa_tech: ["Jira", "Postman", "Selenium", "Cypress", "Excel"],
    qa_soft_title: "Soft Skills",
    qa_soft: ["Attention to Detail", "Critical Thinking", "Communication", "Time Management", "Adaptability", "Teamwork"],
    qa_cert_title: "Certifications",
    qa_certs: [
      { name: "ISTQB Foundation Level", issuer: "ISTQB · 2023" },
      { name: "Postman API Testing", issuer: "Postman · 2023" },
      { name: "Selenium WebDriver with Java", issuer: "Udemy · 2022" },
      { name: "Agile Testing Certificate", issuer: "Coursera · 2022" }
    ],
    qa_proj_title: "Project Experience",
    qa_projects: [
      {
        role: "Internship",
        title: "E-commerce Platform Testing",
        desc: "Designed and executed 200+ test cases for a B2C e-commerce platform, documented bugs in Jira, and performed regression testing before each sprint release.",
        tags: ["Jira", "Manual Testing", "Regression"]
      },
      {
        role: "Freelance",
        title: "API Testing for Fintech App",
        desc: "Created automated API test scripts using Postman and Newman, integrated into CI/CD pipeline reducing manual QA time by 40%.",
        tags: ["Postman", "Newman", "CI/CD"]
      },
      {
        role: "Personal Project",
        title: "Web Automation Framework",
        desc: "Built a Selenium + TestNG page-object-model framework for automated UI testing across 3 browsers with HTML test reports.",
        tags: ["Selenium", "TestNG", "Java"]
      }
    ],
  },

  id: {
    brand: "Portofolio Saya",
    btn_da: "Data Analyst",
    btn_qa: "Quality Assurance",

    da_role: "Data Analyst",
    da_name: "Aria Bimantara",
    da_about: "Saya adalah profesional yang berorientasi pada detail yang sedang bertransisi ke peran Data Analyst, dengan panduan akurasi, tanggung jawab, dan komitmen kuat terhadap kualitas. Dengan latar belakang Quality Assurance di sektor perbankan, saya telah memiliki pengalaman luas dalam pengujian aplikasi, pengelolaan data pengujian, dan penyusunan dokumentasi terstruktur sesuai standar. Saya juga memiliki keahlian dalam pemrosesan query SQL, dan saat ini sedang mengembangkan kemampuan analisis data menggunakan Python serta visualisasi data dengan Tableau.",
    da_cv_ats: "Unduh CV",
    da_cv_ats_url: "#",
    da_edu_title: "Pendidikan",
    da_edu: [
      {
        degree: "S1 Teknik Informatika",
        school: "Universitas Pamulang",
        year: "Sep, 2016 – Apr, 2023",
        logo: "img/Unpam.png",
        prodi: "S1 Teknik Informatika, IPK 3.34 / 4.00",
        tanggal: "Sep, 2016 – Apr, 2023",
        isi: "Skripsi: Perancangan dan Implementasi Dashboard Sistem Informasi Menggunakan Kerangka Kerja Scrum dengan Azure Boards (Studi Kasus: PT Arranet Indonesia Sejahtera)",
        isiType: "text"
      },
      {
        degree: "Full-stack Data Analytics",
        school: "RevoU",
        year: "Okt, 2025 – Feb, 2026",
        logo: "img/RevoU.png",
        prodi: "Full-stack Data Analytics",
        tanggal: "Okt, 2025 – Feb, 2026",
        isi: [
          "Menganalisis dataset menggunakan SQL (BigQuery) untuk mengekstrak, membersihkan, dan mentransformasi data untuk analisis bisnis.",
          "Melakukan eksplorasi data dan pemrosesan menggunakan Python (Google Colab) dan library terkait.",
          "Membangun dashboard interaktif di Tableau sesuai kebutuhan stakeholder.",
          "Menyusun masalah bisnis dalam kerangka analitik untuk mendukung pengambilan keputusan berbasis data.",
          "Menyelesaikan Data End-to-End Portfolio Project (DEEPP), mengubah data mentah menjadi wawasan dan rekomendasi yang dapat ditindaklanjuti."
        ],
        isiType: "bullets"
      }
    ],
    da_contact_title: "Kontak",
    da_contact: {
      location: "Tangerang Selatan, Banten",
      linkedin: "https://www.linkedin.com/in/aria-bimantara00a/",
      email: "aria.00a@gmail.com"
    },
    da_tech_title: "Keahlian Teknis",
    da_tech: ["Excel", "Spreadsheet", "SQL", "Python", "Tableau"],
    da_soft_title: "Soft Skill",
    da_soft: ["Berpikir Analitis", "Pemecahan Masalah", "Data Storytelling", "Perhatian terhadap Detail", "Kerja Tim", "Berpikir Kritis"],
    da_cert_title: "Sertifikasi",
    da_certs: [
      { name: "Google Data Analytics Certificate", issuer: "Google · 2023" },
      { name: "SQL for Data Science", issuer: "Coursera · 2023" },
      { name: "Tableau Desktop Specialist", issuer: "Tableau · 2022" },
      { name: "Python for Everybody", issuer: "Coursera · 2022" }
    ],
    da_proj_title: "Pengalaman Proyek",
    da_projects: [
      {
        role: "Proyek Pribadi",
        title: "Dashboard Performa Penjualan",
        desc: "Membangun dashboard Tableau interaktif untuk memvisualisasikan KPI penjualan bulanan, performa regional, dan segmentasi pelanggan dari dataset ritel.",
        tags: ["Tableau", "SQL", "Excel"]
      },
      {
        role: "Freelance",
        title: "Analisis Churn Pelanggan",
        desc: "Melakukan EDA dan pemodelan prediktif menggunakan Python (Pandas, Sklearn) untuk mengidentifikasi faktor utama churn dengan akurasi model 82%.",
        tags: ["Python", "Pandas", "Scikit-learn"]
      },
      {
        role: "Proyek Akademik",
        title: "Market Basket Analysis",
        desc: "Menerapkan algoritma Apriori pada data transaksi untuk menemukan aturan asosiasi produk, membantu strategi cross-selling retailer lokal.",
        tags: ["Python", "MLxtend", "Jupyter"]
      }
    ],

    qa_role: "Quality Assurance Engineer",
    qa_name: "Aria Bimantara",
    qa_about: "QA Engineer yang teliti dengan pengalaman langsung dalam pengujian manual dan otomatis. Berkomitmen menghadirkan perangkat lunak berkualitas tinggi dengan mendeteksi cacat lebih awal dan memastikan cakupan pengujian yang solid di platform web dan mobile.",
    qa_cv_ats: "Unduh CV",
    qa_cv_ats_url: "#",
    qa_edu_title: "Pendidikan",
    qa_edu: [
      {
        degree: "S1 Teknik Informatika",
        school: "Universitas Pamulang",
        year: "Sep, 2016 – Apr, 2023",
        logo: "",
        prodi: "S1 Teknik Informatika, IPK 3.34 / 4.00",
        tanggal: "Sep, 2016 – Apr, 2023",
        isi: "Skripsi: Perancangan dan Implementasi Dashboard Sistem Informasi Menggunakan Kerangka Kerja Scrum dengan Azure Boards (Studi Kasus: PT Arranet Indonesia Sejahtera)",
        isiType: "text"
      },
      {
        degree: "Bootcamp QA Automation",
        school: "Nama Institusi",
        year: "2023",
        logo: "",
        prodi: "QA Automation Bootcamp",
        tanggal: "2023",
        isi: [
          "Pelatihan QA automation intensif mencakup Selenium WebDriver dan TestNG.",
          "Pengujian API menggunakan Postman dan integrasi CI/CD pipeline dengan Newman.",
          "Membangun framework pengujian otomatis dengan pola page-object-model untuk aplikasi web.",
          "Menghasilkan laporan pengujian HTML di berbagai lingkungan browser."
        ],
        isiType: "bullets"
      }
    ],
    qa_contact_title: "Kontak",
    qa_contact: {
      location: "Tangerang Selatan, Banten",
      linkedin: "https://www.linkedin.com/in/aria-bimantara00a/",
      email: "aria.00a@gmail.com"
    },
    qa_tech_title: "Keahlian Teknis",
    qa_tech: ["Jira", "Postman", "Selenium", "Cypress", "Excel"],
    qa_soft_title: "Soft Skill",
    qa_soft: ["Perhatian terhadap Detail", "Berpikir Kritis", "Komunikasi", "Manajemen Waktu", "Adaptabilitas", "Kerja Tim"],
    qa_cert_title: "Sertifikasi",
    qa_certs: [
      { name: "ISTQB Foundation Level", issuer: "ISTQB · 2023" },
      { name: "Postman API Testing", issuer: "Postman · 2023" },
      { name: "Selenium WebDriver with Java", issuer: "Udemy · 2022" },
      { name: "Agile Testing Certificate", issuer: "Coursera · 2022" }
    ],
    qa_proj_title: "Pengalaman Proyek",
    qa_projects: [
      {
        role: "Magang",
        title: "Pengujian Platform E-commerce",
        desc: "Merancang dan mengeksekusi 200+ test case untuk platform e-commerce B2C, mendokumentasikan bug di Jira, dan melakukan regression testing setiap sprint.",
        tags: ["Jira", "Manual Testing", "Regression"]
      },
      {
        role: "Freelance",
        title: "API Testing Aplikasi Fintech",
        desc: "Membuat skrip otomasi API menggunakan Postman dan Newman, diintegrasikan ke CI/CD pipeline sehingga mengurangi waktu QA manual sebesar 40%.",
        tags: ["Postman", "Newman", "CI/CD"]
      },
      {
        role: "Proyek Pribadi",
        title: "Framework Otomasi Web",
        desc: "Membangun framework Selenium + TestNG dengan page-object-model untuk pengujian UI otomatis di 3 browser beserta laporan HTML.",
        tags: ["Selenium", "TestNG", "Java"]
      }
    ],
  }
};

/* ======================================================
   TECH SKILL ICON MAP
====================================================== */
const TECH_ICONS = {
  "Spreadsheet": "https://img.icons8.com/color/48/google-sheets.png",
  "Excel":       "https://img.icons8.com/color/48/microsoft-excel-2019.png",
  "SQL":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Python":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Tableau":     "https://img.icons8.com/color/48/tableau-software.png",
  "Jira":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Postman":     "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
  "Selenium":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  "Cypress":     "https://img.icons8.com/color/48/cypress.png",
  "Figma":       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Canva":       "https://img.icons8.com/color/48/canva.png",
  "WordPress":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  "Notion":      "https://img.icons8.com/ios-filled/50/notion.png",
};

/* ======================================================
   STATE
====================================================== */
let currentLang = 'en';
let currentProf = 'da';

/* ======================================================
   HELPERS
====================================================== */
function getIcon(id) {
  return document.getElementById(id).content.cloneNode(true);
}

/* ======================================================
   EDUCATION POPUP
====================================================== */
function openEduModal(edu) {
  const logoEl = document.getElementById('modal-logo');
  if (edu.logo) {
    logoEl.innerHTML = `<img src="${edu.logo}" alt="${edu.school}" />`;
  } else {
    const initials = edu.school.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    logoEl.innerHTML = `<div class="modal-logo-placeholder">${initials}</div>`;
  }
  document.getElementById('modal-judul').textContent = edu.school;
  document.getElementById('modal-prodi').textContent = edu.prodi;

  const tanggalEl = document.getElementById('modal-tanggal');
  tanggalEl.innerHTML = '';
  tanggalEl.appendChild(getIcon('icon-calendar'));
  const tanggalSpan = document.createElement('span');
  tanggalSpan.textContent = edu.tanggal;
  tanggalEl.appendChild(tanggalSpan);

  const isiEl = document.getElementById('modal-isi');
  if (edu.isiType === 'bullets' && Array.isArray(edu.isi)) {
    const ul = document.createElement('ul');
    edu.isi.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    isiEl.innerHTML = '';
    isiEl.appendChild(ul);
  } else {
    isiEl.textContent = edu.isi || '';
  }

  document.getElementById('edu-modal').classList.add('active');
}

function closeEduModal() {
  document.getElementById('edu-modal').classList.remove('active');
}

document.getElementById('edu-modal').addEventListener('click', function(e) {
  if (e.target === this) closeEduModal();
});
document.getElementById('modal-close-btn').addEventListener('click', closeEduModal);

/* ======================================================
   PROJECT POPUP
====================================================== */
function openProjModal(proj) {
  // LOGO — placeholder dengan inisial judul proyek
  const logoEl = document.getElementById('proj-modal-logo');
  const initials = proj.title.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  logoEl.innerHTML = `<div class="modal-logo-placeholder">${initials}</div>`;

  // JUDUL — judul proyek
  document.getElementById('proj-modal-judul').textContent = proj.title;

  // ROLE — setara dengan PRODI
  document.getElementById('proj-modal-role').textContent = proj.role;

  // TAGS — sebagai pill-pills berjajar, setara dengan TANGGAL
  const tagsEl = document.getElementById('proj-modal-tags');
  tagsEl.className = 'modal-tags-row';
  tagsEl.innerHTML = '';
  proj.tags.forEach(tag => {
    const pill = document.createElement('span');
    pill.className = 'modal-tag-pill';
    const iconClone = getIcon('icon-tag');
    pill.appendChild(iconClone);
    const tagSpan = document.createElement('span');
    tagSpan.textContent = tag;
    pill.appendChild(tagSpan);
    tagsEl.appendChild(pill);
  });

  // ISI — deskripsi proyek
  document.getElementById('proj-modal-desc').textContent = proj.desc;

  document.getElementById('proj-modal').classList.add('active');
}

function closeProjModal() {
  document.getElementById('proj-modal').classList.remove('active');
}

document.getElementById('proj-modal').addEventListener('click', function(e) {
  if (e.target === this) closeProjModal();
});
document.getElementById('proj-close-btn').addEventListener('click', closeProjModal);

// Escape menutup modal yang sedang aktif
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeEduModal();
    closeProjModal();
  }
});

/* ======================================================
   MAIN RENDER FUNCTION
====================================================== */
function render() {
  const L = LANG[currentLang];
  const p = currentProf;

  document.documentElement.setAttribute('data-theme', p === 'da' ? '' : p);
  document.getElementById('nav-brand').textContent = L.brand;
  document.getElementById('btn-da').textContent = L.btn_da;
  document.getElementById('btn-qa').textContent = L.btn_qa;

  document.getElementById('about-name').textContent = L[`${p}_name`];
  document.getElementById('about-role').textContent = L[`${p}_role`];
  document.getElementById('about-text').textContent = L[`${p}_about`];
  document.getElementById('btn-cv-ats').textContent = L[`${p}_cv_ats`];
  document.getElementById('btn-cv-ats').href = L[`${p}_cv_ats_url`];

  // Education
  document.getElementById('label-edu').textContent = L[`${p}_edu_title`];
  const eduGrid = document.getElementById('edu-grid');
  eduGrid.innerHTML = '';
  L[`${p}_edu`].forEach(e => {
    const btn = document.createElement('button');
    btn.className = 'edu-item';
    btn.innerHTML = `
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-school">${e.school}</div>
      <div class="edu-year">${e.year}</div>
    `;
    btn.addEventListener('click', () => openEduModal(e));
    eduGrid.appendChild(btn);
  });

  // Contact
  document.getElementById('label-contact').textContent = L[`${p}_contact_title`];
  const c = L[`${p}_contact`];
  const contactRow = document.getElementById('contact-row');
  contactRow.innerHTML = '';
  const contactItems = [
    { icon: 'icon-location', text: c.location, href: `https://maps.google.com?q=${c.location}` },
    { icon: 'icon-linkedin', text: 'LinkedIn', href: c.linkedin.startsWith('http') ? c.linkedin : `https://${c.linkedin}` },
    { icon: 'icon-email', text: c.email, href: `mailto:${c.email}` },
  ];
  contactItems.forEach(ci => {
    const a = document.createElement('a');
    a.className = 'contact-item';
    a.href = ci.href;
    a.target = '_blank';
    a.appendChild(getIcon(ci.icon));
    const span = document.createElement('span');
    span.textContent = ci.text;
    a.appendChild(span);
    contactRow.appendChild(a);
  });

  // Tech Skills
  document.getElementById('label-tech').textContent = L[`${p}_tech_title`];
  document.getElementById('skill-logos').innerHTML = L[`${p}_tech`].map(t => `
    <div class="skill-logo">
      <img src="${TECH_ICONS[t] || 'https://placehold.co/42x42/eee/999?text=?'}" alt="${t}" title="${t}" />
      <span>${t}</span>
    </div>`).join('');

  // Soft Skills
  document.getElementById('label-soft').textContent = L[`${p}_soft_title`];
  document.getElementById('soft-list').innerHTML = L[`${p}_soft`].map(s => `<li>${s}</li>`).join('');

  // Certifications
  document.getElementById('label-cert').textContent = L[`${p}_cert_title`];
  document.getElementById('cert-grid').innerHTML = L[`${p}_certs`].map(cert => `
    <div class="cert-item">
      <div class="cert-name">${cert.name}</div>
      <div class="cert-issuer">${cert.issuer}</div>
    </div>`).join('');

  // Projects — render sebagai button, klik buka popup
  document.getElementById('label-proj').textContent = L[`${p}_proj_title`];
  const projGrid = document.getElementById('project-grid');
  projGrid.innerHTML = '';
  L[`${p}_projects`].forEach(proj => {
    const btn = document.createElement('button');
    btn.className = 'project-card';
    btn.innerHTML = `
      <div class="project-role">${proj.role}</div>
      <div class="project-title">${proj.title}</div>
      <div class="project-desc">${proj.desc}</div>
      <div class="project-tags">${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
    `;
    btn.addEventListener('click', () => openProjModal(proj));
    projGrid.appendChild(btn);
  });

  // Profile photo
  const photoMap = {
    da: 'img/Pas-Foto.jpg',
    qa: 'https://placehold.co/200x300/e6eaf0/192841?text=Photo',
  };
  document.getElementById('profile-photo').src = photoMap[p];
}

/* ======================================================
   EVENT LISTENERS
====================================================== */
document.querySelectorAll('.prof-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.prof-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentProf = this.dataset.prof;
    render();
  });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentLang = this.dataset.lang;
    render();
  });
});

/* ======================================================
   INIT
====================================================== */
render();