/* ======================================================
   LANGUAGE & THEME DATA
   Edit semua konten kamu di sini!
====================================================== */
const LANG = {
    en: {
      brand: "My Portfolio",
      btn_da: "Data Analyst",
      btn_qa: "Quality Assurance",
      btn_other: "Other",
  
      // ── DATA ANALYST ───────────────────────────
      da_role: "Data Analyst",
      da_name: "Your Full Name",
      da_about: "Passionate Data Analyst with experience in transforming raw data into meaningful insights. Skilled in exploratory data analysis, statistical modeling, and building interactive dashboards that drive data-driven decisions.",
      da_cv_design: "Download CV Design",
      da_cv_ats: "Download CV ATS",
      da_cv_design_url: "#",   // Ganti dengan URL file CV Design kamu
      da_cv_ats_url: "#",      // Ganti dengan URL file CV ATS kamu
      da_edu_title: "Education",
      da_edu: [
        { degree: "Bachelor of Informatics", school: "University Name", year: "2019 – 2023" },
        { degree: "Data Science Bootcamp", school: "Bootcamp Institution", year: "2023" }
      ],
      da_contact_title: "Contact",
      da_contact: {
        location: "City, Province",
        linkedin: "linkedin.com/in/yourprofile",
        instagram: "@yourhandle",
        email: "your@email.com"
      },
      da_tech_title: "Technical Skills",
      da_tech: ["Spreadsheet", "Excel", "SQL", "Python", "Tableau"],
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
        { role: "Personal Project", title: "Sales Performance Dashboard", desc: "Built an interactive Tableau dashboard to visualize monthly sales KPIs, regional performance, and customer segmentation for a retail dataset.", tags: ["Tableau", "SQL", "Excel"] },
        { role: "Freelance", title: "Customer Churn Analysis", desc: "Performed EDA and predictive modeling using Python (Pandas, Sklearn) to identify key drivers of customer churn with 82% model accuracy.", tags: ["Python", "Pandas", "Scikit-learn"] },
        { role: "Academic Project", title: "Market Basket Analysis", desc: "Applied Apriori algorithm on transactional data to discover product association rules, aiding cross-selling strategy for a local retailer.", tags: ["Python", "MLxtend", "Jupyter"] }
      ],
  
      // ── QUALITY ASSURANCE ──────────────────────
      qa_role: "Quality Assurance Engineer",
      qa_name: "Your Full Name",
      qa_about: "Detail-oriented QA Engineer with hands-on experience in manual and automated testing. Committed to delivering high-quality software by identifying defects early and ensuring robust test coverage across web and mobile platforms.",
      qa_cv_design: "Download CV Design",
      qa_cv_ats: "Download CV ATS",
      qa_cv_design_url: "#",
      qa_cv_ats_url: "#",
      qa_edu_title: "Education",
      qa_edu: [
        { degree: "Bachelor of Informatics", school: "University Name", year: "2019 – 2023" },
        { degree: "QA Automation Bootcamp", school: "Bootcamp Institution", year: "2023" }
      ],
      qa_contact_title: "Contact",
      qa_contact: {
        location: "City, Province",
        linkedin: "linkedin.com/in/yourprofile",
        instagram: "@yourhandle",
        email: "your@email.com"
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
        { role: "Internship", title: "E-commerce Platform Testing", desc: "Designed and executed 200+ test cases for a B2C e-commerce platform, documented bugs in Jira, and performed regression testing before each sprint release.", tags: ["Jira", "Manual Testing", "Regression"] },
        { role: "Freelance", title: "API Testing for Fintech App", desc: "Created automated API test scripts using Postman and Newman, integrated into CI/CD pipeline reducing manual QA time by 40%.", tags: ["Postman", "Newman", "CI/CD"] },
        { role: "Personal Project", title: "Web Automation Framework", desc: "Built a Selenium + TestNG page-object-model framework for automated UI testing across 3 browsers with HTML test reports.", tags: ["Selenium", "TestNG", "Java"] }
      ],
  
      // ── OTHER ──────────────────────────────────
      other_role: "Creative & Tech Enthusiast",
      other_name: "Your Full Name",
      other_about: "A versatile professional with a broad skill set spanning creative design, content creation, and digital strategy. Curious by nature and driven by an enthusiasm for learning new tools and building meaningful projects.",
      other_cv_design: "Download CV Design",
      other_cv_ats: "Download CV ATS",
      other_cv_design_url: "#",
      other_cv_ats_url: "#",
      other_edu_title: "Education",
      other_edu: [
        { degree: "Bachelor of Informatics", school: "University Name", year: "2019 – 2023" },
        { degree: "Digital Marketing Course", school: "Online Platform", year: "2023" }
      ],
      other_contact_title: "Contact",
      other_contact: {
        location: "City, Province",
        linkedin: "linkedin.com/in/yourprofile",
        instagram: "@yourhandle",
        email: "your@email.com"
      },
      other_tech_title: "Technical Skills",
      other_tech: ["Figma", "Canva", "WordPress", "Excel", "Notion"],
      other_soft_title: "Soft Skills",
      other_soft: ["Creativity", "Adaptability", "Communication", "Time Management", "Leadership", "Curiosity"],
      other_cert_title: "Certifications",
      other_certs: [
        { name: "Google Digital Marketing", issuer: "Google · 2023" },
        { name: "UI/UX Design Essentials", issuer: "Udemy · 2022" },
        { name: "Content Strategy Course", issuer: "HubSpot · 2022" },
        { name: "Project Management Basics", issuer: "Coursera · 2021" }
      ],
      other_proj_title: "Project Experience",
      other_projects: [
        { role: "Freelance", title: "Brand Identity Design", desc: "Designed full brand identity including logo, color palette, and typography guide for a local F&B startup using Figma and Adobe Illustrator.", tags: ["Figma", "Branding", "Design"] },
        { role: "Personal Project", title: "Blog Website", desc: "Built and managed a personal WordPress blog covering tech and lifestyle topics, growing to 500+ monthly visitors within 3 months.", tags: ["WordPress", "SEO", "Content"] },
        { role: "Volunteer", title: "Social Media Campaign", desc: "Led social media content planning and creation for a non-profit organization's fundraising campaign, achieving 150% of the donation target.", tags: ["Instagram", "Canva", "Strategy"] }
      ],
    },
  
    id: {
      brand: "Portofolio Saya",
      btn_da: "Data Analyst",
      btn_qa: "Quality Assurance",
      btn_other: "Lainnya",
  
      da_role: "Data Analyst",
      da_name: "Nama Lengkap Kamu",
      da_about: "Data Analyst yang bersemangat dalam mengubah data mentah menjadi wawasan bermakna. Berpengalaman dalam analisis data eksploratif, pemodelan statistik, dan pembuatan dashboard interaktif untuk mendukung keputusan berbasis data.",
      da_cv_design: "Unduh CV Desain",
      da_cv_ats: "Unduh CV ATS",
      da_cv_design_url: "#",
      da_cv_ats_url: "#",
      da_edu_title: "Pendidikan",
      da_edu: [
        { degree: "S1 Teknik Informatika", school: "Nama Universitas", year: "2019 – 2023" },
        { degree: "Bootcamp Data Science", school: "Nama Institusi", year: "2023" }
      ],
      da_contact_title: "Kontak",
      da_contact: {
        location: "Kota, Provinsi",
        linkedin: "linkedin.com/in/profilkamu",
        instagram: "@handlekamu",
        email: "email@kamu.com"
      },
      da_tech_title: "Keahlian Teknis",
      da_tech: ["Spreadsheet", "Excel", "SQL", "Python", "Tableau"],
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
        { role: "Proyek Pribadi", title: "Dashboard Performa Penjualan", desc: "Membangun dashboard Tableau interaktif untuk memvisualisasikan KPI penjualan bulanan, performa regional, dan segmentasi pelanggan dari dataset ritel.", tags: ["Tableau", "SQL", "Excel"] },
        { role: "Freelance", title: "Analisis Churn Pelanggan", desc: "Melakukan EDA dan pemodelan prediktif menggunakan Python (Pandas, Sklearn) untuk mengidentifikasi faktor utama churn dengan akurasi model 82%.", tags: ["Python", "Pandas", "Scikit-learn"] },
        { role: "Proyek Akademik", title: "Market Basket Analysis", desc: "Menerapkan algoritma Apriori pada data transaksi untuk menemukan aturan asosiasi produk, membantu strategi cross-selling retailer lokal.", tags: ["Python", "MLxtend", "Jupyter"] }
      ],
  
      qa_role: "Quality Assurance Engineer",
      qa_name: "Nama Lengkap Kamu",
      qa_about: "QA Engineer yang teliti dengan pengalaman langsung dalam pengujian manual dan otomatis. Berkomitmen menghadirkan perangkat lunak berkualitas tinggi dengan mendeteksi cacat lebih awal dan memastikan cakupan pengujian yang solid.",
      qa_cv_design: "Unduh CV Desain",
      qa_cv_ats: "Unduh CV ATS",
      qa_cv_design_url: "#",
      qa_cv_ats_url: "#",
      qa_edu_title: "Pendidikan",
      qa_edu: [
        { degree: "S1 Teknik Informatika", school: "Nama Universitas", year: "2019 – 2023" },
        { degree: "Bootcamp QA Automation", school: "Nama Institusi", year: "2023" }
      ],
      qa_contact_title: "Kontak",
      qa_contact: {
        location: "Kota, Provinsi",
        linkedin: "linkedin.com/in/profilkamu",
        instagram: "@handlekamu",
        email: "email@kamu.com"
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
        { role: "Magang", title: "Pengujian Platform E-commerce", desc: "Merancang dan mengeksekusi 200+ test case untuk platform e-commerce B2C, mendokumentasikan bug di Jira, dan melakukan regression testing setiap sprint.", tags: ["Jira", "Manual Testing", "Regression"] },
        { role: "Freelance", title: "API Testing Aplikasi Fintech", desc: "Membuat skrip otomasi API menggunakan Postman dan Newman, diintegrasikan ke CI/CD pipeline sehingga mengurangi waktu QA manual sebesar 40%.", tags: ["Postman", "Newman", "CI/CD"] },
        { role: "Proyek Pribadi", title: "Framework Otomasi Web", desc: "Membangun framework Selenium + TestNG dengan page-object-model untuk pengujian UI otomatis di 3 browser beserta laporan HTML.", tags: ["Selenium", "TestNG", "Java"] }
      ],
  
      other_role: "Kreatif & Teknologi",
      other_name: "Nama Lengkap Kamu",
      other_about: "Profesional serbaguna dengan keahlian di bidang desain kreatif, pembuatan konten, dan strategi digital. Selalu ingin tahu dan didorong oleh semangat mempelajari alat baru serta membangun proyek-proyek bermakna.",
      other_cv_design: "Unduh CV Desain",
      other_cv_ats: "Unduh CV ATS",
      other_cv_design_url: "#",
      other_cv_ats_url: "#",
      other_edu_title: "Pendidikan",
      other_edu: [
        { degree: "S1 Teknik Informatika", school: "Nama Universitas", year: "2019 – 2023" },
        { degree: "Kursus Digital Marketing", school: "Platform Online", year: "2023" }
      ],
      other_contact_title: "Kontak",
      other_contact: {
        location: "Kota, Provinsi",
        linkedin: "linkedin.com/in/profilkamu",
        instagram: "@handlekamu",
        email: "email@kamu.com"
      },
      other_tech_title: "Keahlian Teknis",
      other_tech: ["Figma", "Canva", "WordPress", "Excel", "Notion"],
      other_soft_title: "Soft Skill",
      other_soft: ["Kreativitas", "Adaptabilitas", "Komunikasi", "Manajemen Waktu", "Kepemimpinan", "Rasa Ingin Tahu"],
      other_cert_title: "Sertifikasi",
      other_certs: [
        { name: "Google Digital Marketing", issuer: "Google · 2023" },
        { name: "UI/UX Design Essentials", issuer: "Udemy · 2022" },
        { name: "Content Strategy Course", issuer: "HubSpot · 2022" },
        { name: "Project Management Basics", issuer: "Coursera · 2021" }
      ],
      other_proj_title: "Pengalaman Proyek",
      other_projects: [
        { role: "Freelance", title: "Desain Identitas Brand", desc: "Merancang identitas brand lengkap termasuk logo, palet warna, dan panduan tipografi untuk startup F&B lokal menggunakan Figma dan Adobe Illustrator.", tags: ["Figma", "Branding", "Desain"] },
        { role: "Proyek Pribadi", title: "Website Blog", desc: "Membangun dan mengelola blog WordPress pribadi yang membahas topik teknologi dan gaya hidup, tumbuh hingga 500+ pengunjung bulanan dalam 3 bulan.", tags: ["WordPress", "SEO", "Konten"] },
        { role: "Sukarelawan", title: "Kampanye Media Sosial", desc: "Memimpin perencanaan dan pembuatan konten media sosial untuk kampanye penggalangan dana organisasi nirlaba, mencapai 150% dari target donasi.", tags: ["Instagram", "Canva", "Strategi"] }
      ],
    }
  };
  
  /* ======================================================
     TECH SKILL ICON MAP
  ====================================================== */
  const TECH_ICONS = {
    "Spreadsheet": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
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
     MAIN RENDER FUNCTION
  ====================================================== */
  function render() {
    const L = LANG[currentLang];
    const p = currentProf; // 'da', 'qa', 'other'
  
    // Theme
    document.documentElement.setAttribute('data-theme', p === 'da' ? '' : p);
  
    // Brand & nav buttons
    document.getElementById('nav-brand').textContent = L.brand;
    document.getElementById('btn-da').textContent = L.btn_da;
    document.getElementById('btn-qa').textContent = L.btn_qa;
    document.getElementById('btn-other').textContent = L.btn_other;
  
    // About
    document.getElementById('about-name').textContent = L[`${p}_name`];
    document.getElementById('about-role').textContent = L[`${p}_role`];
    document.getElementById('about-text').textContent = L[`${p}_about`];
    document.getElementById('btn-cv-design').textContent = L[`${p}_cv_design`];
    document.getElementById('btn-cv-ats').textContent = L[`${p}_cv_ats`];
    document.getElementById('btn-cv-design').href = L[`${p}_cv_design_url`];
    document.getElementById('btn-cv-ats').href = L[`${p}_cv_ats_url`];
  
    // Education
    document.getElementById('label-edu').textContent = L[`${p}_edu_title`];
    document.getElementById('edu-grid').innerHTML = L[`${p}_edu`].map(e => `
      <div class="edu-item">
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-school">${e.school}</div>
        <div class="edu-year">${e.year}</div>
      </div>`).join('');
  
    // Contact
    document.getElementById('label-contact').textContent = L[`${p}_contact_title`];
    const c = L[`${p}_contact`];
    const contactRow = document.getElementById('contact-row');
    contactRow.innerHTML = '';
    const contactItems = [
      { icon: 'icon-location', text: c.location, href: `https://maps.google.com?q=${c.location}` },
      { icon: 'icon-linkedin', text: 'LinkedIn', href: `https://${c.linkedin}` },
      { icon: 'icon-instagram', text: c.instagram, href: `https://instagram.com/${c.instagram.replace('@', '')}` },
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
        <img src="${TECH_ICONS[t] || 'https://placehold.co/28x28/eee/999?text=?'}" alt="${t}" title="${t}" />
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
  
    // Projects
    document.getElementById('label-proj').textContent = L[`${p}_proj_title`];
    document.getElementById('project-grid').innerHTML = L[`${p}_projects`].map(proj => `
      <div class="project-card">
        <div class="project-role">${proj.role}</div>
        <div class="project-title">${proj.title}</div>
        <div class="project-desc">${proj.desc}</div>
        <div class="project-tags">${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
      </div>`).join('');
  
    // Profile photo placeholder per theme
    const photoMap = {
      da:    'https://placehold.co/200x300/e0ede9/006D5B?text=Photo',
      qa:    'https://placehold.co/200x300/e6eaf0/192841?text=Photo',
      other: 'https://placehold.co/200x300/eaecee/36454F?text=Photo',
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