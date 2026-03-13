/* ======================================================
   LANGUAGE & THEME DATA
====================================================== */
const LANG = {
  en: {
    brand: "My Portfolio",
    btn_da: "Data Analyst",
    btn_qa: "Quality Assurance",

    // ── DATA ANALYST ───────────────────────────
    da_about_title: "About Me",
    da_role: "Data Analyst",
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
    da_soft: ["Analytical Thinking", "Data Storytelling", "Attention to Detail", "Problem Solving", "Team Collaboration", "Curiosity"],
    da_cert_title: "Certifications",
    da_certs: [
      {
        name: "Full-stack Data Analytics",
        issuer: "RevoU", year: "Feb, 2026", logo: "img/RevoU.png",
        desc: ["Understanding Business Problem","Statistics & Spreadsheet","SQL","Python","Data Visualization","Data Communication","DEEPP (Data End-to-End Portfolio Project)"],
        descType: "bullets",
        certUrl: "https://certificates.revou.tech/?id=FSDA-2026-03-137291654889&name=Aria%20Bimantara"
      },
      {
        name: "Microsoft Excel Basic to Advance for Data Analysis",
        issuer: "MySkill", year: "Jun, 2022", logo: "img/MySkill.jpg",
        desc: ["Excel Basic Formula & Function","Data Formatting & Cleansing","Conditional IF ELSE and Formatting","Data Visualization","VLOOKUP & INDEX MATCH","Pivot Table","What If Analysis","Introduction and Practice Macro VBA"],
        descType: "bullets",
        certUrl: "https://drive.google.com/file/d/1jXSn8WYmOkJ6E09UAaHDa4n7ZekC-YtE/view?usp=sharing"
      }
    ],
    da_proj_title: "Project Experience",
    da_projects: [
      {
        role: "RevoU (DEEPP)",
        title: "An Analysis of Hotel Booking Cancellation Behavior",
        coverImg: "img/Banner01.jpg",
        // FIX 3: isi URL yang ada, kosongkan ("") yang tidak ada
        deckUrl: "https://docs.google.com/presentation/d/1RnhAT6BjbTF1w_Gf_0v3AUGh7nXnaOl2hsLMQ8VQLNg/present?token=AC4w5Vi-k8oA0Sd7TVAJbSh1GAfov4QUUA%3A1772645677394&includes_info_params=1&cros_files=false&nded=false&eisi=CKb3pd_jhpMDFdw7qQEd9dgaRg",
        codeUrl: "",
        dashboardUrl: "",
        tags: ["Excel", "Python", "Tableau"],
        desc: "Analyzed hotel booking cancellation patterns to identify high-risk segments and propose data-driven strategies to reduce overall cancellation rate.",
        sections: [
          { title: "Project Description", content: "This project analyzes hotel booking demand data from July 2015 to August 2017 for Strigiformotel Group, focusing on customer booking behavior and cancellation patterns across City Hotels and Resort Hotels. The analysis aims to uncover key drivers behind booking cancellations and identify actionable opportunities to improve booking retention.", type: "text" },
          { title: "Objective", content: "To identify customer segments and booking characteristics that contribute to high cancellation rates and propose data-driven strategies to reduce the overall hotel cancellation rate from 27.49% to approximately 23% within 6 months.", type: "text" },
          { title: "Key Metrics", content: ["Overall Cancellation Rate","Cancellation Rate by Hotel Type","Cancellation Rate by Market Segment","Cancellation Rate by Lead Time Bucket","Cancellation Rate by Customer Type (New vs Repeat Guests)"], type: "bullets" },
          { title: "Key Findings", content: ["Overall cancellation rate stands at 27.49% from 87,396 bookings.","City Hotels experience higher cancellations (30.0%) than Resort Hotels (23.5%).","Online Travel Agents (OTA) contribute the highest cancellation rate (35.35%) and volume.","Bookings with lead time >180 days show the highest cancellation rate (39.74%).","Repeat guests are significantly more stable, with only 7.64% cancellation rate.","Customer clustering reveals distinct high-risk segments driven by long lead times and OTA bookings."], type: "bullets" },
          { title: "Recommendations", content: "By focusing strategies on long lead time bookings, Online TA channels, and new guests, hotels can directly target the areas with the largest contribution to cancellations. This approach enables a realistic reduction in the cancellation rate toward the 23% target, without requiring extreme operational changes.", type: "text" }
        ]
      },
      {
        role: "RevoU (Assignment)",
        title: "RevoGrocers Sales Performance Analysis",
        coverImg: "img/Banner02.jpg",
        deckUrl: "https://docs.google.com/presentation/d/1f0zJarOXhduZ8gHUjYgwGwAIJqEiLmIQ04N9ExApUAk/present?token=AC4w5Vi6kW194LRcBUflqCYHqnTFG0dvsA%3A1772701116181&includes_info_params=1&cros_files=false&nded=false&eisi=CNy6yKKyiJMDFZ4XoAAdykop7A&slide=id.g1dc2b6f5be2_3_0",
        codeUrl: "",
        dashboardUrl: "",
        tags: ["SQL", "BigQuery"],
        desc: "Analyzed grocery sales data to identify sales trends, top products, and key revenue drivers to support data-driven decision making.",
        sections: [
          { title: "Project Description", content: "This project is a performance analysis of RevoGrocers, a fictional grocery retail business that operates across multiple locations and offers a wide variety of products. Prepared as part of an intermediate SQL assignment, the analysis utilizes a publicly available Kaggle dataset to derive business insights. The methodology involved using Google BigQuery to process large-scale data, designing complex SQL queries, and validating results to understand the retail entity's performance.", type: "text" },
          { title: "Objective", content: "The primary goal of this study is to leverage data-driven decision-making to optimize sales strategies and enhance the customer experience. It aims to identify which product categories drive the most revenue, assess the relationship between pricing and sales volume, and evaluate customer loyalty through repeat purchase patterns.", type: "text" },
          { title: "Key Metrics", content: ["Revenue After Discount","Total Units Sold","Unique Customers","Average Price (AVG_Price)","Contribution Percentage","Repeat Purchase Rate"], type: "bullets" },
          { title: "Key Findings", content: ["The 'Confections' category is the most significant contributor, accounting for 12.87% of total revenue and yielding the highest revenue after discounts.","Customer loyalty is exceptionally strong across all categories, with repeat purchase rates ranging between 93% and 99%.","Revenue is primarily driven by high sales volumes and a large customer base rather than high individual product prices.","Categories with higher average prices, such as Grain and Dairy, do not show a significant drop in unique buyers compared to cheaper categories like Produce.","Wayne Chan (Customer ID 94800) was identified as the top user, demonstrating consistent high-value transactions over time."], type: "bullets" },
          { title: "Recommendations", content: "The business should focus its marketing efforts on 'power categories' like Confections, Meat, and Poultry by enhancing stock availability and implementing cross-selling or bundling strategies. For underperforming areas like Shell Fish and Grain, RevoGrocers should evaluate pricing strategies and introduce targeted 'Try Something New' campaigns to boost engagement. Given that volume is the main revenue driver, the company should prioritize quantity-based promotions and personalized loyalty rewards based on purchase history to maintain the current high repeat purchase rates.", type: "text" }
        ]
      }
    ],

    // ── QUALITY ASSURANCE ──────────────────────
    qa_about_title: "About Me",
    qa_role: "Quality Assurance Engineer",
    qa_name: "Aria Bimantara",
    qa_about: "I am a detail-oriented Quality Assurance professional with over 5 years of experience in the banking industry. I specialize in core banking system validation, financial transaction testing, and SQL-based data verification to ensure data integrity and system reliability. My responsibilities include analyzing requirements, executing application testing, documenting test results, and reporting defects throughout the development lifecycle. I am experienced with tools such as Jira, Confluence, Postman, Katalon Studio, and AS400, working within both Waterfall and Agile environments. I bring strong analytical thinking, a quality-driven mindset, and collaborative communication to support stable and reliable system releases.",
    qa_cv_ats: "Download CV",
    qa_cv_ats_url: "#",
    qa_edu_title: "Education",
    qa_edu: [
      { degree: "Bachelor of Informatics", school: "Pamulang University", year: "Sep, 2016 – Apr, 2023", logo: "img/Unpam.png", prodi: "Bachelor of Informatics Engineering, GPA 3.34 / 4.00", tanggal: "Sep, 2016 – Apr, 2023", isi: "Thesis: Design and Implementation of an Information System Dashboard Using the Scrum Framework with Azure Boards (Case Study: PT Arranet Indonesia Sejahtera)", isiType: "text" }
    ],
    qa_contact_title: "Contact",
    qa_contact: { location: "South Tangerang, Banten", linkedin: "https://www.linkedin.com/in/aria-bimantara00a/", email: "aria.00a@gmail.com" },
    qa_tech_title: "Technical Skills",
    qa_tech: ["Jira", "Confluence", "Postman", "AS400", "Katalon Studio"],
    qa_soft_title: "Soft Skills",
    qa_soft: ["Critical Thinking", "Adaptability", "Attention to Detail", "Problem Solving", "Team Collaboration", "Curiosity"],
    qa_cert_title: "Certifications",
    qa_certs: [
      { name: "Awareness ISO 29119", issuer: "Narada Code", year: "2023", logo: "img/Narada Code.jpg", desc: ["Introduction to ISO/IEC 29119 software testing standards","Software testing principles and lifecycle","Test documentation and reporting standards","Test design techniques and defect management","Test planning and test process management"], descType: "bullets", certUrl: "https://drive.google.com/file/d/17SJrjRTacIrCJEk--6gd4rOuUnMVHBgr/view?usp=sharing" },
      { name: "Awareness Quality Assurance", issuer: "Narada Code", year: "2023", logo: "img/Narada Code.jpg", desc: ["Introduction to software quality assurance concepts","Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC)","Types of software testing and testing strategies","Defect lifecycle and bug tracking process","QA documentation and reporting practices"], descType: "bullets", certUrl: "https://drive.google.com/file/d/1sdXtgwcy5zAkkJwUqTbi4_JUczAAflFR/view?usp=sharing" }
    ],
    qa_proj_title: "Work Experience",
    // FIX 3: QA projects — TIDAK ADA deckUrl/codeUrl/dashboardUrl → tombol tidak muncul
    qa_projects: [
      {
        role: "Quality Assurance Analyst",
        title: "PT. Metrocom Jaddi Technology, Jakarta",
        coverImg: "",
        tags: ["Nov, 2025", "Jan, 2026"],
        desc: "PT Metrocom Jaddi Technology is an IT consulting and outsourcing company. Employed by PT Metrocom Jaddi Technology and assigned as a consultant to Bank Tabungan Negara (BTN).",
        sections: [
          { title: "Company Description", content: "PT Metrocom Jaddi Technology is an IT consulting and outsourcing company. Employed by PT Metrocom Jaddi Technology and assigned as a consultant to Bank Tabungan Negara (BTN).", type: "text" },
          { title: "Role", content: "Quality Assurance Analyst", type: "text" },
          { title: "Sector", content: "Banking", type: "text" },
          { title: "Job Description", content: ["Focused on the development and testing of Contact Center System applications using the Waterfall methodology.","Collaborated in project management activities using ClickUp and Tricentis throughout the SDLC.","Participated in Design & Code Reviews (D&CR) to support project objectives and quality standards.","Collaborated in designing test cases and test scenarios based on D&CR outcomes using Google Sheets.","Documented all testing results using Tricentis.","Supported the UAT phase by conducting system demos for end users.","Prepared formal test completion reports as official documentation for QA phase sign-off."], type: "bullets" }
        ]
      },
      {
        role: "QA Manual",
        title: "PT. Lawencon Internasional, Jakarta",
        coverImg: "",
        tags: ["Dec, 2021", "Sep, 2025"],
        desc: "PT. Lawencon Internasional is an IT consulting and outsourcing company. Employed by PT. Lawencon Internasional and assigned as a consultant to Bank Rakyat Indonesia (BRI).",
        sections: [
          { title: "Company Description", content: "PT. Lawencon Internasional is an IT consulting and outsourcing company. Employed by PT. Lawencon Internasional and assigned as a consultant to Bank Rakyat Indonesia (BRI)", type: "text" },
          { title: "Role", content: "QA Manual", type: "text" },
          { title: "Sector", content: "Banking", type: "text" },
          { title: "Job Description", content: ["Focused on the development and testing of Clearing applications using the Waterfall methodology.","Ensured debit and credit reconciliation accuracy within Core Banking systems (AS400 and Temenos).","Collaborated in project management activities using Jira and Confluence throughout the SDLC.","Participated in Design & Code Reviews (D&CR) to support project objectives and quality standards.","Collaborated in designing test cases and test scenarios based on D&CR outcomes using Google Sheets.","Reported defects in Jira with detailed documentation and coordinated with Development teams through resolution.","Documented all testing results using Confluence and Microsoft Word.","Performed manual testing on Web and API platforms using Postman during the SIT phase.","Executed SQL queries for test result validation, test data patching, and identification of pain points during SIT.","Conducted automated testing on Web platforms using Katalon Studio during the SIT phase.","Performed stress testing using JMeter during the SIT phase.","Supported the UAT phase by conducting system demos for end users.","Prepared formal test completion reports as official documentation for QA phase sign-off.","Supported Deployment and Piloting phases for production rollout."], type: "bullets" }
        ]
      },
      {
        role: "Software Quality Assurance",
        title: "PT. Arranet Indonesia Sejahtera, Jakarta",
        coverImg: "",
        tags: ["Oct, 2020", "Nov, 2021"],
        desc: "PT Arranet Indonesia Sejahtera (Arranet) is a financial technology (fintech) company specializing in digital payment systems, including payment gateway, switching services, and Mini ATM EDC agent networks to support banking and digital transactions, particularly in remote and underserved areas.",
        sections: [
          { title: "Company Description", content: "PT Arranet Indonesia Sejahtera (Arranet) is a financial technology (fintech) company specializing in digital payment systems, including payment gateway, switching services, and Mini ATM EDC agent networks to support banking and digital transactions, particularly in remote and underserved areas.", type: "text" },
          { title: "Role", content: "Software Quality Assurance", type: "text" },
          { title: "Sector", content: "Fintech (Financial Technology)", type: "text" },
          { title: "Job Description", content: ["Focused on the development and testing of PPOB applications using the Agile methodology.","Ensured transaction accuracy and integration consistency with third-party service providers.","Collaborated in project management activities using Azure DevOps throughout the SDLC.","Participated in Sprint Planning to support project goals and delivery timelines.","Collaborated in designing test cases and test scenarios based on Sprint Planning outcomes using Google Sheets and Azure DevOps.","Reported defects in Azure DevOps with detailed documentation and coordinated with Development teams through resolution.","Documented all testing results and activities using Azure DevOps.","Performed manual testing on Web, Mobile, and API platforms using Postman during the SIT phase.","Executed SQL queries for test result validation, test data patching, and identification of pain points during SIT.","Supported the UAT phase by conducting system demos for end users.","Supported Deployment and Piloting phases for production rollout."], type: "bullets" }
        ]
      }
    ]
  },

  id: {
    brand: "Portofolio Saya",
    btn_da: "Data Analyst",
    btn_qa: "Quality Assurance",

    // ── DATA ANALYST ───────────────────────────
    da_about_title: "Tentang Saya",
    da_role: "Data Analyst",
    da_name: "Aria Bimantara",
    da_about: "Saya adalah seorang profesional Quality Assurance yang berorientasi pada detail dengan pengalaman lebih dari 5 tahun di sektor perbankan, dan saat ini sedang beralih ke bidang Data Analytics. Selama menjalani berbagai siklus rilis sistem, saya membangun dasar yang kuat dalam menjaga akurasi, melakukan penilaian risiko, serta menyusun dokumentasi secara terstruktur. Berpengalaman dalam mengelola data pengujian dan memastikan kepatuhan terhadap standar perbankan, saya juga melakukan analisis pengujian secara mendalam untuk mengurangi bug setelah rilis dan meningkatkan stabilitas sistem. Dalam bidang analisis data, saya menguasai SQL untuk ekstraksi dan analisis data. Python dan Tableau juga saya gunakan dalam berbagai proyek portofolio untuk menganalisis dataset, mengidentifikasi tren, serta membangun dashboard interaktif. Dengan pendekatan analitis dan komitmen untuk terus belajar, saya berupaya menghasilkan keputusan bisnis yang andal dan berbasis data.",
    da_cv_ats: "Unduh CV",
    da_cv_ats_url: "https://drive.usercontent.google.com/u/0/uc?id=112ZK_ry7gHnTywV19FBgFqjMhl8-mIRw&export=download",
    da_edu_title: "Pendidikan",
    da_edu: [
      { degree: "S1 Teknik Informatika", school: "Universitas Pamulang", year: "Sep, 2016 – Apr, 2023", logo: "img/Unpam.png", prodi: "Sarjana Teknik Informatika, IPK 3.34 / 4.00", tanggal: "Sep, 2016 – Apr, 2023", isi: "Skripsi: Perancangan Dashboard Sistem Informasi Dengan Metode Scrum Menggunakan Azure Board (Studi Kasus : PT. Arranet Indonesia Sejahtera)", isiType: "text" },
      { degree: "Full-stack Data Analytics", school: "RevoU", year: "Okt, 2025 – Feb, 2026", logo: "img/RevoU.png", prodi: "Full-stack Data Analytics", tanggal: "Okt, 2025 – Feb, 2026", isi: ["Menganalisis dataset menggunakan SQL (BigQuery) untuk mengekstrak, membersihkan, dan mentransformasi data untuk analisis bisnis.","Melakukan eksplorasi data dan pemrosesan menggunakan Python (Google Colab) dan library terkait.","Membangun dashboard interaktif di Tableau sesuai kebutuhan stakeholder.","Menyusun masalah bisnis dalam kerangka analitik untuk mendukung pengambilan keputusan berbasis data.","Menyelesaikan Data End-to-End Portfolio Project (DEEPP), mengubah data mentah menjadi wawasan dan rekomendasi yang dapat ditindaklanjuti."], isiType: "bullets" }
    ],
    da_contact_title: "Kontak",
    da_contact: { location: "Tangerang Selatan, Banten", linkedin: "https://www.linkedin.com/in/aria-bimantara00a/", email: "aria.00a@gmail.com" },
    da_tech_title: "Keahlian Teknis",
    da_tech: ["Excel", "Spreadsheet", "SQL", "Python", "Tableau"],
    da_soft_title: "Keahlian Non-Teknis",
    da_soft: ["Berpikir Analitis", "Pemecahan Masalah", "Data Storytelling", "Perhatian terhadap Detail", "Kerja Tim", "Berpikir Kritis"],
    da_cert_title: "Sertifikasi",
    da_certs: [
      { name: "Full-stack Data Analytics", issuer: "RevoU", year: "Feb, 2026", logo: "img/RevoU.png", desc: ["Pemahaman Masalah Bisnis","Statistika & Pengolahan Spreadsheet","SQL","Python","Visualisasi Data","Komunikasi Data","Proyek Portofolio Data End-to-End (DEEPP)"], descType: "bullets", certUrl: "https://certificates.revou.tech/?id=FSDA-2026-03-137291654889&name=Aria%20Bimantara" },
      { name: "Microsoft Excel Basic to Advance for Data Analysis", issuer: "MySkill", year: "Jun, 2022", logo: "img/MySkill.jpg", desc: ["Dasar Formula & Fungsi Excel","Pemformatan dan Pembersihan Data","Logika IF dan Conditional Formatting","Visualisasi Data","VLOOKUP & INDEX MATCH","Pivot Table","Analisis What-If","Pengenalan dan Praktik Macro VBA"], descType: "bullets", certUrl: "https://drive.google.com/file/d/1jXSn8WYmOkJ6E09UAaHDa4n7ZekC-YtE/view?usp=sharing" }
    ],
    da_proj_title: "Pengalaman Proyek",
    da_projects: [
      {
        role: "RevoU (DEEPP)",
        title: "Analisis Perilaku Pembatalan Pemesanan Hotel",
        coverImg: "img/Banner01.jpg",
        deckUrl: "https://docs.google.com/presentation/d/1RnhAT6BjbTF1w_Gf_0v3AUGh7nXnaOl2hsLMQ8VQLNg/present?token=AC4w5Vi-k8oA0Sd7TVAJbSh1GAfov4QUUA%3A1772645677394&includes_info_params=1&cros_files=false&nded=false&eisi=CKb3pd_jhpMDFdw7qQEd9dgaRg",
        codeUrl: "",
        dashboardUrl: "",
        tags: ["Excel", "Python", "Tableau"],
        desc: "Menganalisis pola pembatalan pemesanan hotel untuk mengidentifikasi segmen berisiko tinggi dan mengusulkan strategi berbasis data.",
        sections: [
          { title: "Deskripsi Proyek", content: "Proyek ini menganalisis data permintaan pemesanan hotel dari Juli 2015 hingga Agustus 2017 untuk Strigiformotel Group, yang berfokus pada perilaku pemesanan pelanggan dan pola pembatalan di City Hotels dan Resort Hotels. Analisis ini bertujuan mengidentifikasi faktor utama penyebab pembatalan pemesanan serta menemukan peluang perbaikan untuk meningkatkan tingkat retensi pemesanan.", type: "text" },
          { title: "Tujuan", content: "Mengidentifikasi segmen pelanggan dan karakteristik pemesanan yang berkontribusi pada tingkat pembatalan tinggi, serta mengusulkan strategi berbasis data untuk mengurangi tingkat pembatalan dari 27,49% menjadi sekitar 23% dalam 6 bulan.", type: "text" },
          { title: "Metrik Utama", content: ["Tingkat Pembatalan Keseluruhan","Tingkat Pembatalan per Tipe Hotel","Tingkat Pembatalan per Segmen Pasar","Tingkat Pembatalan per Bucket Lead Time","Tingkat Pembatalan Berdasarkan Tipe Pelanggan (Tamu Baru vs Tamu Lama)"], type: "bullets" },
          { title: "Temuan Utama", content: ["Tingkat pembatalan keseluruhan 27,49% dari 87.396 pemesanan.","City Hotels lebih banyak dibatalkan (30,0%) dibanding Resort Hotels (23,5%).","Online Travel Agent (OTA) berkontribusi pembatalan tertinggi (35,35%).","Pemesanan dengan lead time >180 hari memiliki pembatalan 39,74%.","Tamu lama menunjukkan perilaku pemesanan yang jauh lebih stabil, dengan tingkat pembatalan hanya sebesar 7,64%.","Clustering pelanggan mengungkap segmen risiko tinggi dari lead time panjang dan pemesanan OTA."], type: "bullets" },
          { title: "Rekomendasi", content: "Dengan memfokuskan strategi pada pemesanan lead time panjang, channel Online TA, dan tamu baru, hotel dapat menargetkan area dengan kontribusi pembatalan terbesar dan mencapai target 23% secara realistis.", type: "text" }
        ]
      },
      {
        role: "RevoU (Assignment)",
        title: "Analisis Kinerja Penjualan RevoGrocers",
        coverImg: "img/Banner02.jpg",
        deckUrl: "https://docs.google.com/presentation/d/1f0zJarOXhduZ8gHUjYgwGwAIJqEiLmIQ04N9ExApUAk/present?token=AC4w5Vi6kW194LRcBUflqCYHqnTFG0dvsA%3A1772701116181&includes_info_params=1&cros_files=false&nded=false&eisi=CNy6yKKyiJMDFZ4XoAAdykop7A&slide=id.g1dc2b6f5be2_3_0",
        codeUrl: "",
        dashboardUrl: "",
        tags: ["SQL", "BigQuery"],
        desc: "Menganalisis data penjualan untuk mengidentifikasi tren penjualan, produk terlaris, serta faktor utama yang mendorong pendapatan guna mendukung pengambilan keputusan berbasis data.",
        sections: [
          { title: "Deskripsi Proyek", content: "Proyek ini merupakan analisis kinerja penjualan dari RevoGrocers, sebuah bisnis ritel bahan makanan fiktif yang beroperasi di berbagai lokasi dan menawarkan beragam jenis produk. Proyek ini disusun sebagai bagian dari tugas SQL tingkat menengah dengan memanfaatkan dataset publik dari Kaggle untuk menghasilkan wawasan bisnis. Metodologi yang digunakan meliputi pemrosesan data berskala besar menggunakan Google BigQuery, perancangan query SQL yang kompleks, serta validasi hasil analisis untuk memahami kinerja bisnis ritel tersebut.", type: "text" },
          { title: "Tujuan", content: "Tujuan utama dari studi ini adalah memanfaatkan pendekatan pengambilan keputusan berbasis data untuk mengoptimalkan strategi penjualan dan meningkatkan pengalaman pelanggan. Analisis ini berupaya mengidentifikasi kategori produk yang memberikan kontribusi pendapatan terbesar, mengevaluasi hubungan antara harga dan volume penjualan, serta menilai loyalitas pelanggan melalui pola pembelian berulang.", type: "text" },
          { title: "Metrik Utama", content: ["Pendapatan Setelah Diskon","Total Unit Terjual","Jumlah Pelanggan Unik","Harga Rata-rata (AVG_Price)","Persentase Kontribusi","Tingkat Pembelian Ulang"], type: "bullets" },
          { title: "Temuan Utama", content: ["Kategori 'Confections' menjadi kontributor terbesar dengan menyumbang 12,87% dari total pendapatan serta menghasilkan pendapatan setelah diskon tertinggi.","Loyalitas pelanggan tergolong sangat kuat di seluruh kategori produk, dengan tingkat pembelian ulang berkisar antara 93% hingga 99%.","Pendapatan terutama didorong oleh volume penjualan yang tinggi dan jumlah pelanggan yang besar, bukan oleh harga produk yang tinggi.","Kategori dengan harga rata-rata lebih tinggi seperti 'Grain' dan 'Dairy' tidak menunjukkan penurunan signifikan pada jumlah pembeli unik dibandingkan kategori dengan harga lebih rendah seperti 'Produce'.","Wayne Chan (Customer ID 94800) teridentifikasi sebagai pelanggan dengan nilai transaksi tertinggi, yang secara konsisten melakukan transaksi bernilai besar dari waktu ke waktu."], type: "bullets" },
          { title: "Rekomendasi", content: "Perusahaan sebaiknya memfokuskan upaya pemasaran pada kategori utama seperti 'Confections', 'Meat', dan 'Poultry' dengan meningkatkan ketersediaan stok serta menerapkan strategi cross-selling atau bundling produk. Untuk kategori dengan performa yang lebih rendah seperti 'Shell Fish' dan 'Grain', RevoGrocers disarankan mengevaluasi kembali strategi harga serta memperkenalkan kampanye bertema 'Coba Produk Baru' guna meningkatkan minat pelanggan. Mengingat bahwa volume penjualan merupakan penggerak utama pendapatan, perusahaan sebaiknya memprioritaskan promosi berbasis jumlah pembelian serta memberikan program loyalitas yang dipersonalisasi berdasarkan riwayat pembelian pelanggan.", type: "text" }
        ]
      }
    ],

    // ── QUALITY ASSURANCE ──────────────────────
    qa_about_title: "Tentang Saya",
    qa_role: "Quality Assurance Engineer",
    qa_name: "Aria Bimantara",
    qa_about: "Saya adalah seorang profesional Quality Assurance yang berorientasi pada detail dengan pengalaman lebih dari 5 tahun di industri perbankan. Saya memiliki spesialisasi dalam validasi sistem core banking, pengujian transaksi keuangan, serta verifikasi data berbasis SQL untuk memastikan integritas data dan keandalan sistem. Tanggung jawab saya meliputi menganalisis kebutuhan, melakukan pengujian aplikasi, mendokumentasikan hasil pengujian, serta melaporkan defect sepanjang siklus pengembangan sistem. Saya berpengalaman menggunakan berbagai tools seperti Jira, Confluence, Postman, Katalon Studio, dan AS400, serta bekerja dalam lingkungan pengembangan Waterfall maupun Agile. Saya memiliki kemampuan analisis yang kuat, pola pikir yang berorientasi pada kualitas, serta komunikasi kolaboratif untuk mendukung rilis sistem yang stabil dan andal.",
    qa_cv_ats: "Unduh CV",
    qa_cv_ats_url: "#",
    qa_edu_title: "Pendidikan",
    qa_edu: [
      { degree: "S1 Teknik Informatika", school: "Universitas Pamulang", year: "Sep, 2016 – Apr, 2023", logo: "img/Unpam.png", prodi: "S1 Teknik Informatika, IPK 3.34 / 4.00", tanggal: "Sep, 2016 – Apr, 2023", isi: "Skripsi: Perancangan dan Implementasi Dashboard Sistem Informasi Menggunakan Kerangka Kerja Scrum dengan Azure Boards (Studi Kasus: PT Arranet Indonesia Sejahtera)", isiType: "text" }
    ],
    qa_contact_title: "Kontak",
    qa_contact: { location: "Tangerang Selatan, Banten", linkedin: "https://www.linkedin.com/in/aria-bimantara00a/", email: "aria.00a@gmail.com" },
    qa_tech_title: "Keahlian Teknis",
    qa_tech: ["Jira", "Confluence", "Postman", "AS400", "Katalon Studio"],
    qa_soft_title: "Soft Skill",
    qa_soft: ["Perhatian terhadap Detail", "Berpikir Kritis", "Komunikasi", "Manajemen Waktu", "Adaptabilitas", "Kerja Tim"],
    qa_cert_title: "Sertifikasi",
    qa_certs: [
      { name: "Awareness ISO 29119", issuer: "Narada Code", year: "2023", logo: "img/Narada Code.jpg", desc: ["Introduction to ISO/IEC 29119 software testing standards","Software testing principles and lifecycle","Test documentation and reporting standards","Test design techniques and defect management","Test planning and test process management"], descType: "bullets", certUrl: "https://drive.google.com/file/d/17SJrjRTacIrCJEk--6gd4rOuUnMVHBgr/view?usp=sharing" },
      { name: "Awareness Quality Assurance", issuer: "Narada Code", year: "2023", logo: "img/Narada Code.jpg", desc: ["Introduction to software quality assurance concepts","Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC)","Types of software testing and testing strategies","Defect lifecycle and bug tracking process","QA documentation and reporting practices"], descType: "bullets", certUrl: "https://drive.google.com/file/d/1sdXtgwcy5zAkkJwUqTbi4_JUczAAflFR/view?usp=sharing" }
    ],
    qa_proj_title: "Pengalaman Kerja",
    qa_projects: [
      {
        role: "PT. Metrocom Jaddi Technology, Jakarta",
        title: "Quality Assurance Analyst",
        coverImg: "",
        tags: ["Nov, 2025", "Jan, 2026"],
        desc: "PT Metrocom Jaddi Technology adalah perusahaan konsultan dan outsourcing di bidang teknologi informasi. Bekerja di bawah PT Metrocom Jaddi Technology dan ditugaskan sebagai konsultan di Bank Tabungan Negara (BTN).",
        sections: [
          { title: "Deskripsi Perusahaan", content: "PT Metrocom Jaddi Technology adalah perusahaan konsultan dan outsourcing di bidang teknologi informasi. Bekerja di bawah PT Metrocom Jaddi Technology dan ditugaskan sebagai konsultan di Bank Tabungan Negara (BTN).", type: "text" },
          { title: "Posisi", content: "Quality Assurance Analyst", type: "text" },
          { title: "Sektor", content: "Banking", type: "text" },
          { title: "Deskripsi Pekerjaan", content: ["Berfokus pada pengembangan dan pengujian aplikasi Contact Center System menggunakan metodologi Waterfall.","Berkolaborasi dalam aktivitas manajemen proyek menggunakan ClickUp dan Tricentis sepanjang siklus pengembangan perangkat lunak (SDLC).","Berpartisipasi dalam kegiatan Design & Code Review (D&CR) untuk mendukung pencapaian tujuan proyek dan standar kualitas.","Berkolaborasi dalam merancang test case dan test scenario berdasarkan hasil D&CR menggunakan Google Sheets.","Mendokumentasikan seluruh hasil pengujian menggunakan Tricentis.","Mendukung fase User Acceptance Testing (UAT) dengan melakukan demo sistem kepada end user.","Menyusun laporan penyelesaian pengujian (test completion report) sebagai dokumentasi resmi untuk proses persetujuan akhir fase QA."], type: "bullets" }
        ]
      },
      {
        role: "PT. Lawencon Internasional, Jakarta",
        title: "QA Manual",
        coverImg: "",
        tags: ["Des, 2021", "Sep, 2025"],
        desc: "PT Lawencon Internasional adalah perusahaan konsultan dan outsourcing di bidang teknologi informasi. Bekerja di bawah PT Lawencon Internasional dan ditugaskan sebagai konsultan di Bank Rakyat Indonesia (BRI).",
        sections: [
          { title: "Deskripsi Perusahaan", content: "PT Lawencon Internasional adalah perusahaan konsultan dan outsourcing di bidang teknologi informasi. Bekerja di bawah PT Lawencon Internasional dan ditugaskan sebagai konsultan di Bank Rakyat Indonesia (BRI).", type: "text" },
          { title: "Posisi", content: "QA Manual", type: "text" },
          { title: "Sektor", content: "Banking", type: "text" },
          { title: "Deskripsi Pekerjaan", content: ["Berfokus pada pengembangan dan pengujian aplikasi Clearing menggunakan metodologi Waterfall.","Memastikan akurasi rekonsiliasi debit dan kredit dalam sistem Core Banking (AS400 dan Temenos).","Berkolaborasi dalam aktivitas manajemen proyek menggunakan Jira dan Confluence sepanjang SDLC.","Berpartisipasi dalam kegiatan Design & Code Review (D&CR) untuk mendukung tujuan proyek dan standar kualitas.","Berkolaborasi dalam merancang test case dan test scenario berdasarkan hasil D&CR menggunakan Google Sheets.","Melaporkan defect di Jira dengan dokumentasi yang detail serta berkoordinasi dengan tim Development hingga proses penyelesaian.","Mendokumentasikan seluruh hasil pengujian menggunakan Confluence dan Microsoft Word.","Melakukan manual testing pada platform Web dan API menggunakan Postman selama fase SIT.","Menjalankan query SQL untuk validasi hasil pengujian, patching data pengujian, serta mengidentifikasi pain points selama fase SIT.","Melakukan automated testing pada platform Web menggunakan Katalon Studio selama fase SIT.","Melakukan stress testing menggunakan JMeter selama fase SIT.","Mendukung fase UAT dengan melakukan demo sistem kepada end user.","Menyusun laporan penyelesaian pengujian sebagai dokumentasi resmi untuk proses persetujuan akhir fase QA.","Mendukung fase Deployment dan Piloting untuk proses peluncuran sistem ke produksi."], type: "bullets" }
        ]
      },
      {
        role: "PT. Arranet Indonesia Sejahtera, Jakarta",
        title: "Software Quality Assurance",
        coverImg: "",
        tags: ["Okt, 2020", "Nov, 2021"],
        desc: "PT Arranet Indonesia Sejahtera (Arranet) adalah perusahaan penyedia jasa dan teknologi sistem pembayaran digital (fintech), yang berfokus pada penyediaan layanan payment gateway, switching, dan agen EDC Mini ATM, terutama untuk memfasilitasi transaksi perbankan dan digital di daerah pelosok.",
        sections: [
          { title: "Deskripsi Perusahaan", content: "PT Arranet Indonesia Sejahtera (Arranet) adalah perusahaan penyedia jasa dan teknologi sistem pembayaran digital (fintech), yang berfokus pada penyediaan layanan payment gateway, switching, dan agen EDC Mini ATM, terutama untuk memfasilitasi transaksi perbankan dan digital di daerah pelosok.", type: "text" },
          { title: "Posisi", content: "Software Quality Assurance", type: "text" },
          { title: "Sektor", content: "Fintech (Financial Technology)", type: "text" },
          { title: "Deskripsi Pekerjaan", content: ["Berfokus pada pengembangan dan pengujian aplikasi PPOB (Payment Point Online Bank) menggunakan metodologi Agile.","Memastikan akurasi transaksi dan konsistensi integrasi dengan penyedia layanan pihak ketiga.","Berkolaborasi dalam aktivitas manajemen proyek menggunakan Azure DevOps sepanjang SDLC.","Berpartisipasi dalam kegiatan Sprint Planning untuk mendukung pencapaian target proyek dan jadwal pengiriman.","Berkolaborasi dalam merancang test case dan test scenario berdasarkan hasil Sprint Planning menggunakan Google Sheets dan Azure DevOps.","Melaporkan defect di Azure DevOps dengan dokumentasi yang detail serta berkoordinasi dengan tim Development hingga proses penyelesaian.","Mendokumentasikan seluruh hasil dan aktivitas pengujian menggunakan Azure DevOps.","Melakukan manual testing pada platform Web, Mobile, dan API menggunakan Postman selama fase SIT.","Menjalankan query SQL untuk validasi hasil pengujian, patching data pengujian, serta mengidentifikasi pain points selama fase SIT.","Mendukung fase UAT dengan melakukan demo sistem kepada end user.","Mendukung fase Deployment dan Piloting untuk proses peluncuran sistem ke produksi."], type: "bullets" }
        ]
      }
    ]
  }
};

/* ======================================================
   TECH SKILL ICON MAP
====================================================== */
const TECH_ICONS = {
  "Spreadsheet":    "https://img.icons8.com/color/48/google-sheets.png",
  "Excel":          "https://img.icons8.com/color/48/microsoft-excel-2019.png",
  "SQL":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Python":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Tableau":        "https://img.icons8.com/color/48/tableau-software.png",
  "Jira":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Postman":        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
  "Katalon Studio": "img/Katalon-logo-png.png",
  "AS400":          "https://img.icons8.com/color/48/ibm.png",
  "Confluence":     "https://img.icons8.com/color/48/confluence.png",
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

  const descEl = document.getElementById('cert-modal-desc');
  if (cert.descType === 'bullets' && Array.isArray(cert.desc)) {
    const ul = document.createElement('ul');
    cert.desc.forEach(item => { const li = document.createElement('li'); li.textContent = item; ul.appendChild(li); });
    descEl.innerHTML = ''; descEl.appendChild(ul);
  } else {
    descEl.textContent = cert.desc || '';
  }

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

  document.getElementById('proj-modal-title').textContent = proj.title;

  // FIX 3: render tombol kondisional — hanya tampil jika URL ada (tidak kosong)
  const btnsEl = document.getElementById('proj-modal-btns');
  btnsEl.innerHTML = '';
  const btnDefs = [
    { key: 'deckUrl',      label: 'View Deck' },
    { key: 'codeUrl',      label: 'View Code' },
    { key: 'dashboardUrl', label: 'View Dashboard' },
  ];
  btnDefs.forEach(def => {
    if (proj[def.key]) {
      const a = document.createElement('a');
      a.className = 'cv-btn cv-btn-primary';
      a.href = proj[def.key];
      a.target = '_blank';
      a.textContent = def.label;
      btnsEl.appendChild(a);
    }
  });

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

  document.getElementById('label-about').textContent = L[`${p}_about_title`];
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

  // Certifications
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

  // Projects
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
    ? 'img/Pas-Foto-DA.jpg'
    : 'img/Pas-Foto-QA.jpg';
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