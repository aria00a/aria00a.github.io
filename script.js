let currentLang = "en";
let currentProfession = "da";

function switchProfession(type) {
    currentProfession = type;

    if (type === "da") {
        document.documentElement.style.setProperty('--primary', '#006D5B');
        document.documentElement.style.setProperty('--accent', '#FFBF00');
    }
    if (type === "qa") {
        document.documentElement.style.setProperty('--primary', '#192841');
        document.documentElement.style.setProperty('--accent', '#B87333');
    }
    if (type === "other") {
        document.documentElement.style.setProperty('--primary', '#36454F');
        document.documentElement.style.setProperty('--accent', '#CCFF00');
    }
}

function switchLanguage(lang) {
    currentLang = lang;

    if (lang === "id") {
        document.getElementById("about-title").innerText = "Tentang Saya";
        document.getElementById("education-title").innerText = "Pendidikan";
        document.getElementById("contact-title").innerText = "Kontak";
        document.getElementById("tech-title").innerText = "Keahlian Teknis";
        document.getElementById("soft-title").innerText = "Keahlian Non Teknis";
        document.getElementById("cert-title").innerText = "Sertifikasi";
        document.getElementById("project-title").innerText = "Pengalaman Proyek";
    } else {
        document.getElementById("about-title").innerText = "About Me";
        document.getElementById("education-title").innerText = "Education";
        document.getElementById("contact-title").innerText = "Contact";
        document.getElementById("tech-title").innerText = "Technical Skills";
        document.getElementById("soft-title").innerText = "Soft Skills";
        document.getElementById("cert-title").innerText = "Certification";
        document.getElementById("project-title").innerText = "Project Experience";
    }
}
