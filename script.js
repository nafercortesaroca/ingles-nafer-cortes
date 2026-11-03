/* ==========================================
   PORTFOLIO - NAFER CORTES AROCA
   Bilingual English / Spanish
========================================== */

const ES = {
  "nav.home": "INICIO",
  "nav.about": "SOBRE MÍ",
  "nav.skills": "HABILIDADES",
  "nav.resume": "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact": "CONTACTO",

  "hero.role": "Desarrollador Web · Estudiante de programación",

  "about.title": "Sobre mí",
  "about.text": "Soy estudiante de programación web y me interesa crear aplicaciones útiles. Estoy desarrollando mis habilidades en PHP, Laravel, MySQL y desarrollo frontend.",
  "about.infoTitle": "Información",
  "about.labelLocation": "Ubicación",
  "about.valueLocation": "Colombia",
  "about.labelEmail": "Contacto",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (en formación)",
  "about.labelStatus": "Disponibilidad",
  "about.valueStatus": "Abierto a oportunidades",

  "about.interestsTitle": "Intereses",
  "interest.1": "PROGRAMACIÓN",
  "interest.2": "DESARROLLO WEB",
  "interest.3": "TECNOLOGÍA",
  "interest.4": "APRENDIZAJE",

  "skills.title": "Habilidades",
  "skills.technical": "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",

  "skill.support": "Soporte al usuario",
  "skill.teamwork": "Trabajo en equipo",
  "skill.problem": "Resolución de problemas",
  "skill.english": "Inglés técnico",

  "resume.title": "Formación y experiencia",
  "resume.education": "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text": "Estoy aprendiendo programación, desarrollo web, bases de datos y creación de aplicaciones.",

  "edu.2.title": "Aprendizaje independiente",
  "edu.2.text": "Practico desarrollo web mediante proyectos personales y ejercicios de programación.",

  "exp.1.title": "Desarrollador Web – Proyecto personal",
  "exp.1.text": "Estoy desarrollando una aplicación web para administrar repuestos, clientes, proveedores, compras y ventas utilizando Laravel, PHP, MySQL y Bootstrap.",

  "exp.2.title": "Proyectos académicos de desarrollo web",
  "exp.2.text": "Creo y pruebo páginas web mientras practico HTML, CSS, JavaScript y diseño adaptable.",

  "portfolio.title": "Proyectos",

  "project.1.title": "Sistema de gestión de inventario de repuestos para motocicletas",
  "project.1.text": "Laravel · PHP · MySQL · Bootstrap 5",

  "project.2.title": "Proyectos académicos web",
  "project.2.text": "HTML · CSS · JavaScript",

  "project.3.title": "Prácticas de programación",
  "project.3.text": "PHP · MySQL",

  "contact.title": "Contacto",
  "contact.intro": "¿Tienes una oportunidad o un proyecto en mente? Puedes contactarme a través de mis perfiles profesionales.",
  "contact.linkedinValue": "Perfil profesional de LinkedIn",

  "footer.note": "Nafer Cortes Aroca · Estudiante de Programación Web · UniEspinal"
};


/* ==========================================
   ENGLISH VERSION
========================================== */

const EN = {
  "nav.home": "HOME",
  "nav.about": "ABOUT",
  "nav.skills": "SKILLS",
  "nav.resume": "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact": "CONTACT",

  "hero.role": "Web Developer · Programming Student",

  "about.title": "About Me",
  "about.text": "I am a web programming student interested in building useful applications. I am developing my skills in PHP, Laravel, MySQL and frontend development.",
  "about.infoTitle": "Information",
  "about.labelLocation": "Location",
  "about.valueLocation": "Colombia",
  "about.labelEmail": "Contact",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (currently learning)",
  "about.labelStatus": "Availability",
  "about.valueStatus": "Open to opportunities",

  "about.interestsTitle": "Interests",
  "interest.1": "PROGRAMMING",
  "interest.2": "WEB DEVELOPMENT",
  "interest.3": "TECHNOLOGY",
  "interest.4": "LEARNING",

  "skills.title": "Skills",
  "skills.technical": "Technical Skills",
  "skills.professional": "Professional Skills",

  "skill.support": "User Support",
  "skill.teamwork": "Teamwork",
  "skill.problem": "Problem Solving",
  "skill.english": "Technical English",

  "resume.title": "Education and Experience",
  "resume.education": "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text": "I am learning programming, web development, databases and application development.",

  "edu.2.title": "Independent Learning",
  "edu.2.text": "I practice web development through personal projects and programming exercises.",

  "exp.1.title": "Web Developer – Personal Project",
  "exp.1.text": "I am developing a web application to manage spare parts, customers, suppliers, purchases and sales using Laravel, PHP, MySQL and Bootstrap.",

  "exp.2.title": "Academic Web Development Projects",
  "exp.2.text": "I build and test web pages while practicing HTML, CSS, JavaScript and responsive design.",

  "portfolio.title": "Projects",

  "project.1.title": "Motorcycle Spare Parts Inventory Management System",
  "project.1.text": "Laravel · PHP · MySQL · Bootstrap 5",

  "project.2.title": "Academic Web Projects",
  "project.2.text": "HTML · CSS · JavaScript",

  "project.3.title": "Programming Practice",
  "project.3.text": "PHP · MySQL",

  "contact.title": "Contact",
  "contact.intro": "Do you have an opportunity or a project in mind? You can contact me through my professional profiles.",
  "contact.linkedinValue": "Professional LinkedIn Profile",

  "footer.note": "Nafer Cortes Aroca · Web Programming Student · UniEspinal"
};


/* ==========================================
   LANGUAGE SWITCHER
========================================== */

const DICCIONARIOS = {
  es: ES,
  en: EN
};

let idiomaActual = "en";

function aplicarIdioma(idioma) {

  const textos = DICCIONARIOS[idioma];

  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {

    const clave = elemento.getAttribute("data-i18n");

    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    }

  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");

  if (boton) {

    const otro = idioma === "es" ? "en" : "es";

    boton.innerHTML =
      '<span class="idioma-activo">' + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase() + '</span>';

    boton.setAttribute(
      "aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español"
    );
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {

  aplicarIdioma(idiomaActual === "es" ? "en" : "es");

}


/* ==========================================
   RESPONSIVE MENU
========================================== */

let menuVisible = false;

function mostrarOcultarMenu() {

  const nav = document.getElementById("nav");

  menuVisible = !menuVisible;

  nav.className = menuVisible ? "responsive" : "";

}

function cerrarMenu() {

  document.getElementById("nav").className = "";

  menuVisible = false;

}


/* ==========================================
   SKILL BARS
========================================== */

function animarHabilidades() {

  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {

    const porcentaje = barra.getAttribute("data-percent") || "0";

    barra.style.width = porcentaje + "%";

    const etiqueta = barra.querySelector("span");

    if (etiqueta) {
      etiqueta.textContent = porcentaje + "%";
    }

  };

  if (!("IntersectionObserver" in window)) {

    barras.forEach(mostrar);

    return;

  }

  const observador = new IntersectionObserver((entradas, obs) => {

    entradas.forEach(entrada => {

      if (entrada.isIntersecting) {

        mostrar(entrada.target);

        obs.unobserve(entrada.target);

      }

    });

  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));

}


/* ==========================================
   START
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  aplicarIdioma("en");

  animarHabilidades();

});
