/* ======================================================
   LANGUAGE & THEME DATA
====================================================== */
const LANG = {
  en: {
    brand: "My Portfolio",
    btn_da: "Data Analyst",
    btn_qa: "Quality Assurance",

    // ── DATA ANALYST ───────────────────────────
    da_role: "Data Analystaa",
    da_name: "Aria Bimantara",
    da_about: "I am a detail-oriented Quality Assurance professional with over 5+ years of experience in the banking sector, currently transitioning into Data Analytics. With strong foundation in accuracy, risk assessment, and structured documentation across multiple system release cycles. Experienced in managing testing data, ensuring compliance with banking standards, and performing in-depth test analysis to reduce post-release defects and enhance system stability. Proficient in SQL for data extraction and analysis, with hands-on experience using Python and Tableau in portfolio projects to analyze datasets, identify trends, and develop interactive dashboards. Committed to applying analytical thinking and continuous learning to deliver reliable, data-driven business decisions.",
    da_cv_ats: "Download CV",
    da_cv_ats_url: "https://drive.usercontent.google.com/u/0/uc?id=112ZK_ry7gHnTywV19FBgFqjMhl8-mIRw&export=download",
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
      {
        name: "Full-stack Data Analytics",
        issuer: "RevoU", year: "Feb, 2026", logo: "img/RevoU.png",
        desc: "Understanding Business Problem | Statistics & Spreadsheet | SQL | Python | Data Visualization | Data Communication | DEEPP (Data End-to-End Portofolio Project)",
        certUrl: "#"
      },
      {
        name: "Microsoft Excel Basic to Advance for Data Analysis",
        issuer: "MySkill", year: "Jun, 2022", logo: "img/MySkill.jpg",
        desc: "Excel Basic Formula & Function | Data Formatting & Cleansing | Conditional IF ELSE and Formatting | Data Visualisasi | Vlookup & Index match | Pivot Table | What if analysis | Introduction and Practice Macro VBA",
        certUrl: "https://drive.google.com/file/d/1jXSn8WYmOkJ6E09UAaHDa4n7ZekC-YtE/view?usp=sharing"
      }
    ],
    da_proj_title: "Project Experience",
    da_projects: [
      {
        role: "DEEPP — RevoU",
        title: "An Analysis of Hotel Booking Cancellation Behavior",
        coverImg: "", // ganti: "https://drive.google.com/uc?export=view&id=YOUR_ID"
        deckUrl: "#",
        tags: ["Excel", "Python", "Tableau"],
        desc: "Analyzed hotel booking cancellation patterns to identify high-risk segments and propose data-driven strategies to reduce overall cancellation rate.",
        sections: [
          {
            title: "Project Description",
            content: "This project analyzes hotel booking demand data from July 2015 to August 2017 for Strigiformotel Group, focusing on customer booking behavior and cancellation patterns across City Hotels and Resort Hotels. The analysis aims to uncover key drivers behind booking cancellations and identify actionable opportunities to improve booking retention.",
            type: "text"
          },
          {
            title: "Objective",
            content: "To identify customer segments and booking characteristics that contribute to high cancellation rates and propose data-driven strategies to reduce the overall hotel cancellation rate from 27.49% to approximately 23% within 6 months.",
            type: "text"
          },
          {
            title: "Key Metrics",
            content: [
              "Overall Cancellation Rate",
              "Cancellation Rate by Hotel Type",
              "Cancellation Rate by Market Segment",
              "Cancellation Rate by Lead Time Bucket",
              "Cancellation Rate by Customer Type (New vs Repeat Guests)"
            ],
            type: "bullets"
          },
          {
            title: "Key Findings",
            content: [
              "Overall cancellation rate stands at 27.49% from 87,396 bookings.",
              "City Hotels experience higher cancellations (30.0%) than Resort Hotels (23.5%).",
              "Online Travel Agents (OTA) contribute the highest cancellation rate (35.35%) and volume.",
              "Bookings with lead time >180 days show the highest cancellation rate (39.74%).",
              "Repeat guests are significantly more stable, with only 7.64% cancellation rate.",
              "Customer clustering reveals distinct high-risk segments driven by long lead times and OTA bookings."
            ],
            type: "bullets"
          },
          {
            title: "Recommendations",
            content: "By focusing strategies on long lead time bookings, Online TA channels, and new guests, hotels can directly target the areas with the largest contribution to cancellations. This approach enables a realistic reduction in the cancellation rate toward the 23% target, without requiring extreme operational changes.",
            type: "text"
          }
        ]
      },
      {
        role: "Personal Project",
        title: "Customer Churn Analysis",
        coverImg: "",
        deckUrl: "#",
        tags: ["Python", "Pandas", "Scikit-learn"],
        desc: "Performed EDA and predictive modeling using Python to identify key drivers of customer churn with 82% model accuracy.",
        sections: [
          { title: "Project Description", content: "Built a machine learning pipeline to identify customers likely to churn based on behavioral and demographic data.", type: "text" },
          { title: "Objective", content: "Predict customer churn with high accuracy and provide actionable retention recommendations.", type: "text" },
          { title: "Key Findings", content: ["82% model accuracy achieved.", "Contract type and tenure are top churn predictors.", "Month-to-month customers churn 3x more than long-term."], type: "bullets" },
          { title: "Recommendations", content: "Offer incentives to month-to-month customers to upgrade to annual plans. Target early-tenure customers with loyalty programs.", type: "text" }
        ]
      },
      {
        role: "Academic Project",
        title: "Market Basket Analysis",
        coverImg: "",
        deckUrl: "#",
        tags: ["Python", "MLxtend", "Jupyter"],
        desc: "Applied Apriori algorithm on transactional data to discover product association rules, aiding cross-selling strategy for a local retailer.",
        sections: [
          { title: "Project Description", content: "Applied association rule mining on transactional data from a local retail store to discover product purchase patterns.", type: "text" },
          { title: "Objective", content: "Identify frequently co-purchased items to guide product placement and cross-selling strategies.", type: "text" },
          { title: "Key Findings", content: ["Found 47 strong association rules with lift > 1.5.", "Bread and butter show highest support (32%).", "Dairy products frequently co-purchased with bakery items."], type: "bullets" },
          { title: "Recommendations", content: "Rearrange store layout to place frequently co-purchased items near each other. Create bundling promotions based on top association rules.", type: "text" }
        ]
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
      { degree: "Bachelor of Informatics", school: "Pamulang University", year: "Sep, 2016 – Apr, 2023", logo: "", prodi: "Bachelor of Informatics Engineering, GPA 3.34 / 4.00", tanggal: "Sep, 2016 – Apr, 2023", isi: "Thesis: Design and Implementation of an Information System Dashboard Using the Scrum Framework with Azure Boards (Case Study: PT Arranet Indonesia Sejahtera)", isiType: "text" },
      { degree: "QA Automation Bootcamp", school: "Bootcamp Institution", year: "2023", logo: "", prodi: "QA Automation Bootcamp", tanggal: "2023", isi: ["Intensive QA automation training covering Selenium WebDriver and TestNG.", "Hands-on experience with Postman API testing and Newman CI/CD integration.", "Built automated test frameworks for web applications using page-object-model design pattern.", "Generated HTML test reports across multiple browser environments."], isiType: "bullets" }
    ],
    qa_contact_title: "Contact",
    qa_contact: { location: "South Tangerang, Banten", linkedin: "https://www.linkedin.com/in/aria-bimantara00a/", email: "aria.00a@gmail.com" },
    qa_tech_title: "Technical Skills",
    qa_tech: ["Jira", "Postman", "Selenium", "Cypress", "Excel"],
    qa_soft_title: "Soft Skills",
    qa_soft: ["Attention to Detail", "Critical Thinking", "Communication", "Time Management", "Adaptability", "Teamwork"],
    qa_cert_title: "Certifications",
    qa_certs: [
      { name: "ISTQB Foundation Level", issuer: "ISTQB", year: "2023", logo: "", desc: "International Software Testing Qualifications Board (ISTQB) Foundation Level certification covering fundamentals of software testing, test design techniques, and test management.", certUrl: "#" },
      { name: "Postman API Testing", issuer: "Postman", year: "2023", logo: "", desc: "Certification covering API testing fundamentals using Postman, including writing test scripts, running collections, and integrating with CI/CD pipelines via Newman.", certUrl: "#" },
      { name: "Selenium WebDriver with Java", issuer: "Udemy", year: "2022", logo: "", desc: "Comprehensive course on building automated UI test frameworks using Selenium WebDriver with Java, TestNG, and the page-object model design pattern.", certUrl: "#" },
      { name: "Agile Testing Certificate", issuer: "Coursera", year: "2022", logo: "", desc: "Covers agile testing principles, test-driven development (TDD), behavior-driven development (BDD), and QA integration within agile sprint cycles.", certUrl: "#" }
    ],
    qa_proj_title: "Project Experience",
    qa_projects: [
      { role: "Internship", title: "E-commerce Platform Testing", coverImg: "", deckUrl: "#", tags: ["Jira", "Manual Testing", "Regression"], desc: "Designed and executed 200+ test cases for a B2C e-commerce platform.", sections: [{ title: "Project Description", content: "End-to-end QA testing for a B2C e-commerce platform covering functional, regression, and user acceptance testing.", type: "text" }, { title: "Objective", content: "Ensure platform stability and zero critical bugs before each sprint release.", type: "text" }, { title: "Key Findings", content: ["200+ test cases designed and executed.", "32 critical bugs identified pre-release.", "Regression suite reduced re-testing time by 35%."], type: "bullets" }, { title: "Recommendations", content: "Automate repetitive regression test cases using Selenium to further reduce manual QA effort.", type: "text" }] },
      { role: "Freelance", title: "API Testing for Fintech App", coverImg: "", deckUrl: "#", tags: ["Postman", "Newman", "CI/CD"], desc: "Created automated API test scripts using Postman and Newman, reducing manual QA time by 40%.", sections: [{ title: "Project Description", content: "Designed and implemented automated API test suites for a fintech mobile application backend.", type: "text" }, { title: "Objective", content: "Automate API regression testing and integrate into CI/CD pipeline for continuous quality assurance.", type: "text" }, { title: "Key Findings", content: ["40% reduction in manual QA time.", "120 API endpoints covered.", "Pipeline integration reduced release cycle by 2 days."], type: "bullets" }, { title: "Recommendations", content: "Extend coverage to contract testing using Pact to catch API breaking changes earlier in the development cycle.", type: "text" }] },
      { role: "Personal Project", title: "Web Automation Framework", coverImg: "", deckUrl: "#", tags: ["Selenium", "TestNG", "Java"], desc: "Built a Selenium + TestNG page-object-model framework for automated UI testing across 3 browsers.", sections: [{ title: "Project Description", content: "Designed a reusable Selenium WebDriver + TestNG automation framework using the page-object-model design pattern.", type: "text" }, { title: "Objective", content: "Build a scalable, maintainable UI automation framework supporting cross-browser testing.", type: "text" }, { title: "Key Findings", content: ["Cross-browser support: Chrome, Firefox, Edge.", "60+ automated UI test cases.", "HTML reports auto-generated after each run."], type: "bullets" }, { title: "Recommendations", content: "Integrate with Jenkins or GitHub Actions to trigger test runs automatically on code push.", type: "text" }] }
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
    da_cv_ats_url: "https://drive.usercontent.google.com/u/0/uc?id=112ZK_ry7gHnTywV19FBgFqjMhl8-mIRw&export=download",
    da_edu_title: "Pendidikan",
    da_edu: [
      { degree: "S1 Teknik Informatika", school: "Universitas Pamulang", year: "Sep, 2016 – Apr, 2023", logo: "img/Unpam.png", prodi: "S1 Teknik Informatika, IPK 3.34 / 4.00", tanggal: "Sep, 2016 – Apr, 2023", isi: "Skripsi: Perancangan dan Implementasi Dashboard Sistem Informasi Menggunakan Kerangka Kerja Scrum dengan Azure Boards (Studi Kasus: PT Arranet Indonesia Sejahtera)", isiType: "text" },
      { degree: "Full-stack Data Analytics", school: "RevoU", year: "Okt, 2025 – Feb, 2026", logo: "img/RevoU.png", prodi: "Full-stack Data Analytics", tanggal: "Okt, 2025 – Feb, 2026", isi: ["Menganalisis dataset menggunakan SQL (BigQuery) untuk mengekstrak, membersihkan, dan mentransformasi data untuk analisis bisnis.", "Melakukan eksplorasi data dan pemrosesan menggunakan Python (Google Colab) dan library terkait.", "Membangun dashboard interaktif di Tableau sesuai kebutuhan stakeholder.", "Menyusun masalah bisnis dalam kerangka analitik untuk mendukung pengambilan keputusan berbasis data.", "Menyelesaikan Data End-to-End Portfolio Project (DEEPP), mengubah data mentah menjadi wawasan dan rekomendasi yang dapat ditindaklanjuti."], isiType: "bullets" }
    ],
    da_contact_title: "Kontak",
    da_contact: { location: "Tangerang Selatan, Banten", linkedin: "https://www.linkedin.com/in/aria-bimantara00a/", email: "aria.00a@gmail.com" },
    da_tech_title: "Keahlian Teknis",
    da_tech: ["Excel", "Spreadsheet", "SQL", "Python", "Tableau"],
    da_soft_title: "Soft Skill",
    da_soft: ["Berpikir Analitis", "Pemecahan Masalah", "Data Storytelling", "Perhatian terhadap Detail", "Kerja Tim", "Berpikir Kritis"],
    da_cert_title: "Sertifikasi",
    da_certs: [
      { name: "Google Data Analytics Certificate", issuer: "Google", year: "2023", logo: "", desc: "Sertifikat profesional yang mencakup seluruh proses analisis data: bertanya, menyiapkan, memproses, menganalisis, berbagi, dan bertindak. Topik meliputi pembersihan data, SQL, pemrograman R, dan visualisasi Tableau.", certUrl: "#" },
      { name: "SQL for Data Science", issuer: "Coursera", year: "2023", logo: "", desc: "Mencakup dasar-dasar SQL untuk pengambilan data, filter, agregasi, dan join tabel. Diterapkan pada dataset nyata untuk kasus analisis bisnis.", certUrl: "#" },
      { name: "Tableau Desktop Specialist", issuer: "Tableau", year: "2022", logo: "", desc: "Sertifikasi resmi Tableau yang memvalidasi keterampilan dalam menghubungkan data, membuat visualisasi, mengorganisir data, dan berbagi dashboard.", certUrl: "#" },
      { name: "Python for Everybody", issuer: "Coursera", year: "2022", logo: "", desc: "Kursus pemrograman Python dasar yang mencakup variabel, kondisional, perulangan, fungsi, dan bekerja dengan file dan database.", certUrl: "#" }
    ],
    da_proj_title: "Pengalaman Proyek",
    da_projects: [
      {
        role: "DEEPP — RevoU",
        title: "Analisis Perilaku Pembatalan Pemesanan Hotel",
        coverImg: "", deckUrl: "#",
        tags: ["Excel", "Python", "Tableau"],
        desc: "Menganalisis pola pembatalan pemesanan hotel untuk mengidentifikasi segmen berisiko tinggi dan mengusulkan strategi berbasis data.",
        sections: [
          { title: "Deskripsi Proyek", content: "Proyek ini menganalisis data permintaan pemesanan hotel dari Juli 2015 hingga Agustus 2017 untuk Strigiformotel Group, berfokus pada perilaku pemesanan pelanggan dan pola pembatalan di City Hotels dan Resort Hotels.", type: "text" },
          { title: "Tujuan", content: "Mengidentifikasi segmen pelanggan dan karakteristik pemesanan yang berkontribusi pada tingkat pembatalan tinggi, serta mengusulkan strategi berbasis data untuk mengurangi tingkat pembatalan dari 27,49% menjadi sekitar 23% dalam 6 bulan.", type: "text" },
          { title: "Metrik Utama", content: ["Tingkat Pembatalan Keseluruhan", "Tingkat Pembatalan per Tipe Hotel", "Tingkat Pembatalan per Segmen Pasar", "Tingkat Pembatalan per Bucket Lead Time", "Tingkat Pembatalan per Tipe Pelanggan (Baru vs Repeat)"], type: "bullets" },
          { title: "Temuan Utama", content: ["Tingkat pembatalan keseluruhan 27,49% dari 87.396 pemesanan.", "City Hotels lebih banyak dibatalkan (30,0%) dibanding Resort Hotels (23,5%).", "Online Travel Agent (OTA) berkontribusi pembatalan tertinggi (35,35%).", "Pemesanan dengan lead time >180 hari memiliki pembatalan 39,74%.", "Tamu repeat jauh lebih stabil, hanya 7,64% pembatalan.", "Clustering pelanggan mengungkap segmen risiko tinggi dari lead time panjang dan pemesanan OTA."], type: "bullets" },
          { title: "Rekomendasi", content: "Dengan memfokuskan strategi pada pemesanan lead time panjang, saluran OTA, dan tamu baru, hotel dapat menargetkan area dengan kontribusi pembatalan terbesar dan mencapai target 23% secara realistis.", type: "text" }
        ]
      },
      { role: "Proyek Pribadi", title: "Analisis Churn Pelanggan", coverImg: "", deckUrl: "#", tags: ["Python", "Pandas", "Scikit-learn"], desc: "Melakukan EDA dan pemodelan prediktif menggunakan Python untuk mengidentifikasi faktor utama churn dengan akurasi model 82%.", sections: [{ title: "Deskripsi Proyek", content: "Membangun pipeline machine learning untuk mengidentifikasi pelanggan yang berpotensi churn.", type: "text" }, { title: "Tujuan", content: "Memprediksi churn dengan akurasi tinggi dan memberikan rekomendasi retensi.", type: "text" }, { title: "Temuan Utama", content: ["Akurasi model 82%.", "Jenis kontrak dan tenure adalah prediktor utama.", "Pelanggan bulan-ke-bulan churn 3x lebih banyak."], type: "bullets" }, { title: "Rekomendasi", content: "Tawarkan insentif untuk beralih ke paket tahunan. Targetkan pelanggan awal dengan program loyalitas.", type: "text" }] },
      { role: "Proyek Akademik", title: "Market Basket Analysis", coverImg: "", deckUrl: "#", tags: ["Python", "MLxtend", "Jupyter"], desc: "Menerapkan algoritma Apriori pada data transaksi untuk menemukan aturan asosiasi produk.", sections: [{ title: "Deskripsi Proyek", content: "Menerapkan association rule mining pada data transaksi toko ritel lokal.", type: "text" }, { title: "Tujuan", content: "Mengidentifikasi item yang sering dibeli bersama untuk strategi cross-selling.", type: "text" }, { title: "Temuan Utama", content: ["47 aturan asosiasi kuat dengan lift > 1.5.", "Roti dan mentega memiliki support tertinggi (32%).", "Produk susu sering dibeli bersama produk roti."], type: "bullets" }, { title: "Rekomendasi", content: "Susun ulang tata letak toko dan buat promosi bundling berdasarkan aturan asosiasi teratas.", type: "text" }] }
    ],

    qa_role: "Quality Assurance Engineer",
    qa_name: "Aria Bimantara",
    qa_about: "QA Engineer yang teliti dengan pengalaman langsung dalam pengujian manual dan otomatis. Berkomitmen menghadirkan perangkat lunak berkualitas tinggi dengan mendeteksi cacat lebih awal dan memastikan cakupan pengujian yang solid di platform web dan mobile.",
    qa_cv_ats: "Unduh CV",
    qa_cv_ats_url: "#",
    qa_edu_title: "Pendidikan",
    qa_edu: [
      { degree: "S1 Teknik Informatika", school: "Universitas Pamulang", year: "Sep, 2016 – Apr, 2023", logo: "", prodi: "S1 Teknik Informatika, IPK 3.34 / 4.00", tanggal: "Sep, 2016 – Apr, 2023", isi: "Skripsi: Perancangan dan Implementasi Dashboard Sistem Informasi Menggunakan Kerangka Kerja Scrum dengan Azure Boards (Studi Kasus: PT Arranet Indonesia Sejahtera)", isiType: "text" },
      { degree: "Bootcamp QA Automation", school: "Nama Institusi", year: "2023", logo: "", prodi: "QA Automation Bootcamp", tanggal: "2023", isi: ["Pelatihan QA automation intensif mencakup Selenium WebDriver dan TestNG.", "Pengujian API menggunakan Postman dan integrasi CI/CD pipeline dengan Newman.", "Membangun framework pengujian otomatis dengan pola page-object-model.", "Menghasilkan laporan pengujian HTML di berbagai lingkungan browser."], isiType: "bullets" }
    ],
    qa_contact_title: "Kontak",
    qa_contact: { location: "Tangerang Selatan, Banten", linkedin: "https://www.linkedin.com/in/aria-bimantara00a/", email: "aria.00a@gmail.com" },
    qa_tech_title: "Keahlian Teknis",
    qa_tech: ["Jira", "Postman", "Selenium", "Cypress", "Excel"],
    qa_soft_title: "Soft Skill",
    qa_soft: ["Perhatian terhadap Detail", "Berpikir Kritis", "Komunikasi", "Manajemen Waktu", "Adaptabilitas", "Kerja Tim"],
    qa_cert_title: "Sertifikasi",
    qa_certs: [
      { name: "ISTQB Foundation Level", issuer: "ISTQB", year: "2023", logo: "", desc: "Sertifikasi ISTQB Foundation Level mencakup dasar-dasar pengujian perangkat lunak, teknik desain pengujian, dan manajemen pengujian.", certUrl: "#" },
      { name: "Postman API Testing", issuer: "Postman", year: "2023", logo: "", desc: "Sertifikasi pengujian API menggunakan Postman, penulisan skrip pengujian, dan integrasi CI/CD via Newman.", certUrl: "#" },
      { name: "Selenium WebDriver with Java", issuer: "Udemy", year: "2022", logo: "", desc: "Kursus membangun framework otomasi UI menggunakan Selenium WebDriver dengan Java, TestNG, dan pola page-object-model.", certUrl: "#" },
      { name: "Agile Testing Certificate", issuer: "Coursera", year: "2022", logo: "", desc: "Mencakup prinsip pengujian agile, TDD, BDD, dan integrasi QA dalam siklus sprint agile.", certUrl: "#" }
    ],
    qa_proj_title: "Pengalaman Proyek",
    qa_projects: [
      { role: "Magang", title: "Pengujian Platform E-commerce", coverImg: "", deckUrl: "#", tags: ["Jira", "Manual Testing", "Regression"], desc: "Merancang dan mengeksekusi 200+ test case untuk platform e-commerce B2C.", sections: [{ title: "Deskripsi Proyek", content: "Pengujian QA end-to-end untuk platform e-commerce B2C mencakup pengujian fungsional, regresi, dan UAT.", type: "text" }, { title: "Tujuan", content: "Memastikan stabilitas platform dan nol bug kritis sebelum setiap rilis sprint.", type: "text" }, { title: "Temuan Utama", content: ["200+ test case dieksekusi.", "32 bug kritis teridentifikasi.", "Suite regresi mengurangi waktu pengujian 35%."], type: "bullets" }, { title: "Rekomendasi", content: "Otomatisasi test case regresi berulang menggunakan Selenium.", type: "text" }] },
      { role: "Freelance", title: "API Testing Aplikasi Fintech", coverImg: "", deckUrl: "#", tags: ["Postman", "Newman", "CI/CD"], desc: "Membuat skrip otomasi API, mengurangi waktu QA manual sebesar 40%.", sections: [{ title: "Deskripsi Proyek", content: "Suite pengujian API otomatis untuk backend aplikasi mobile fintech.", type: "text" }, { title: "Tujuan", content: "Otomatisasi regresi API dan integrasi ke pipeline CI/CD.", type: "text" }, { title: "Temuan Utama", content: ["Pengurangan waktu QA manual 40%.", "120 endpoint API tercakup.", "Siklus rilis berkurang 2 hari."], type: "bullets" }, { title: "Rekomendasi", content: "Perluas ke contract testing menggunakan Pact.", type: "text" }] },
      { role: "Proyek Pribadi", title: "Framework Otomasi Web", coverImg: "", deckUrl: "#", tags: ["Selenium", "TestNG", "Java"], desc: "Membangun framework Selenium + TestNG dengan page-object-model.", sections: [{ title: "Deskripsi Proyek", content: "Framework otomasi Selenium WebDriver + TestNG dengan pola page-object-model.", type: "text" }, { title: "Tujuan", content: "Framework UI otomatis yang skalabel dengan dukungan lintas-browser.", type: "text" }, { title: "Temuan Utama", content: ["Dukungan: Chrome, Firefox, Edge.", "60+ test case UI terotomasi.", "Laporan HTML dibuat otomatis."], type: "bullets" }, { title: "Rekomendasi", content: "Integrasikan dengan Jenkins atau GitHub Actions.", type: "text" }] }
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
function makeInitials(str) {
  return str.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

/* ======================================================
   EDUCATION POPUP
====================================================== */
function openEduModal(edu) {
  const logoEl = document.getElementById('modal-logo');
  if (edu.logo) {
    logoEl.innerHTML = `<img src="${edu.logo}" alt="${edu.school}" />`;
  } else {
    logoEl.innerHTML = `<div class="modal-logo-placeholder">${makeInitials(edu.school)}</div>`;
  }
  document.getElementById('modal-judul').textContent = edu.school;
  document.getElementById('modal-prodi').textContent = edu.prodi;

  const tanggalEl = document.getElementById('modal-tanggal');
  tanggalEl.innerHTML = '';
  tanggalEl.appendChild(getIcon('icon-calendar'));
  const s = document.createElement('span'); s.textContent = edu.tanggal;
  tanggalEl.appendChild(s);

  const isiEl = document.getElementById('modal-isi');
  if (edu.isiType === 'bullets' && Array.isArray(edu.isi)) {
    const ul = document.createElement('ul');
    edu.isi.forEach(item => { const li = document.createElement('li'); li.textContent = item; ul.appendChild(li); });
    isiEl.innerHTML = ''; isiEl.appendChild(ul);
  } else {
    isiEl.textContent = edu.isi || '';
  }
  document.getElementById('edu-modal').classList.add('active');
}
function closeEduModal() { document.getElementById('edu-modal').classList.remove('active'); }
document.getElementById('edu-modal').addEventListener('click', function(e) { if (e.target === this) closeEduModal(); });
document.getElementById('modal-close-btn').addEventListener('click', closeEduModal);

/* ======================================================
   CERTIFICATION POPUP
====================================================== */
function openCertModal(cert) {
  const logoEl = document.getElementById('cert-modal-logo');
  if (cert.logo) {
    logoEl.innerHTML = `<img src="${cert.logo}" alt="${cert.name}" />`;
  } else {
    logoEl.innerHTML = `<div class="modal-logo-placeholder">${makeInitials(cert.issuer)}</div>`;
  }
  document.getElementById('cert-modal-judul').textContent = cert.name;
  document.getElementById('cert-modal-issuer').textContent = cert.issuer;

  const yearEl = document.getElementById('cert-modal-year');
  yearEl.innerHTML = '';
  yearEl.appendChild(getIcon('icon-award'));
  const s = document.createElement('span'); s.textContent = cert.year;
  yearEl.appendChild(s);

  document.getElementById('cert-modal-desc').textContent = cert.desc || '';
  document.getElementById('cert-view-btn').href = cert.certUrl || '#';
  document.getElementById('cert-modal').classList.add('active');
}
function closeCertModal() { document.getElementById('cert-modal').classList.remove('active'); }
document.getElementById('cert-modal').addEventListener('click', function(e) { if (e.target === this) closeCertModal(); });
document.getElementById('cert-close-btn').addEventListener('click', closeCertModal);

/* ======================================================
   PROJECT POPUP
====================================================== */
function openProjModal(proj) {
  // Cover
  const coverImg = document.getElementById('proj-cover-img');
  const placeholder = document.getElementById('proj-cover-placeholder');
  if (proj.coverImg) {
    coverImg.src = proj.coverImg;
    coverImg.style.display = 'block';
    placeholder.style.display = 'none';
  } else {
    coverImg.style.display = 'none';
    placeholder.style.display = 'flex';
    placeholder.textContent = proj.title;
  }

  // Judul
  document.getElementById('proj-modal-title').textContent = proj.title;

  // View Deck
  document.getElementById('proj-deck-btn').href = proj.deckUrl || 'docs.google.com/presentation/d/1RnhAT6BjbTF1w_Gf_0v3AUGh7nXnaOl2hsLMQ8VQLNg/present?token=AC4w5Vi-k8oA0Sd7TVAJbSh1GAfov4QUUA%3A1772645677394&includes_info_params=1&cros_files=false&nded=false&eisi=CKb3pd_jhpMDFdw7qQEd9dgaRg';

  // Tags — rata kanan
  const tagsEl = document.getElementById('proj-modal-tags');
  tagsEl.innerHTML = '';
  proj.tags.forEach(tag => {
    const pill = document.createElement('span');
    pill.className = 'proj-tag-pill';
    pill.appendChild(getIcon('icon-tag'));
    const span = document.createElement('span'); span.textContent = tag;
    pill.appendChild(span);
    tagsEl.appendChild(pill);
  });

  // Sections — 2 kolom
  const sectionsEl = document.getElementById('proj-sections');
  sectionsEl.innerHTML = '';
  (proj.sections || []).forEach(sec => {
    const div = document.createElement('div');
    div.className = 'proj-section';
    const title = document.createElement('div');
    title.className = 'proj-section-title';
    title.textContent = sec.title;
    div.appendChild(title);
    if (sec.type === 'bullets' && Array.isArray(sec.content)) {
      const ul = document.createElement('ul');
      ul.className = 'proj-section-list';
      sec.content.forEach(item => { const li = document.createElement('li'); li.textContent = item; ul.appendChild(li); });
      div.appendChild(ul);
    } else {
      const p = document.createElement('div');
      p.className = 'proj-section-text';
      p.textContent = sec.content;
      div.appendChild(p);
    }
    sectionsEl.appendChild(div);
  });

  document.getElementById('proj-modal').classList.add('active');
}
function closeProjModal() { document.getElementById('proj-modal').classList.remove('active'); }
document.getElementById('proj-modal').addEventListener('click', function(e) { if (e.target === this) closeProjModal(); });
document.getElementById('proj-close-btn').addEventListener('click', closeProjModal);

// Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeEduModal(); closeCertModal(); closeProjModal(); }
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
    btn.innerHTML = `<div class="edu-degree">${e.degree}</div><div class="edu-school">${e.school}</div><div class="edu-year">${e.year}</div>`;
    btn.addEventListener('click', () => openEduModal(e));
    eduGrid.appendChild(btn);
  });

  // Contact
  document.getElementById('label-contact').textContent = L[`${p}_contact_title`];
  const c = L[`${p}_contact`];
  const contactRow = document.getElementById('contact-row');
  contactRow.innerHTML = '';
  [
    { icon: 'icon-location', text: c.location, href: `https://maps.google.com?q=${c.location}` },
    { icon: 'icon-linkedin', text: 'LinkedIn', href: c.linkedin },
    { icon: 'icon-email', text: c.email, href: `mailto:${c.email}` },
  ].forEach(ci => {
    const a = document.createElement('a');
    a.className = 'contact-item'; a.href = ci.href; a.target = '_blank';
    a.appendChild(getIcon(ci.icon));
    const span = document.createElement('span'); span.textContent = ci.text;
    a.appendChild(span); contactRow.appendChild(a);
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

  // Certifications — tombol, klik buka popup
  document.getElementById('label-cert').textContent = L[`${p}_cert_title`];
  const certGrid = document.getElementById('cert-grid');
  certGrid.innerHTML = '';
  L[`${p}_certs`].forEach(cert => {
    const btn = document.createElement('button');
    btn.className = 'cert-item';
    btn.innerHTML = `<div class="cert-name">${cert.name}</div><div class="cert-issuer">${cert.issuer} · ${cert.year}</div>`;
    btn.addEventListener('click', () => openCertModal(cert));
    certGrid.appendChild(btn);
  });

  // Projects — tombol, klik buka popup
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
      <div class="project-tags">${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>`;
    btn.addEventListener('click', () => openProjModal(proj));
    projGrid.appendChild(btn);
  });

  // Profile photo
  document.getElementById('profile-photo').src = p === 'da'
    ? 'img/Pas-Foto.jpg'
    : 'https://placehold.co/200x300/e6eaf0/192841?text=Photo';
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

render();