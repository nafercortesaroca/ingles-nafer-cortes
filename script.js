const ES = {
    "nav.home": "INICIO",
    "nav.about": "SOBRE MÍ",
    "nav.skills": "HABILIDADES",
    "nav.resume": "FORMACIÓN",
    "nav.portfolio": "PROYECTOS",
    "nav.contact": "CONTACTO",

    "hero.role": "Desarrollador Web · Soporte Técnico",

    "about.title": "Sobre Mí",
    "about.text": "Soy estudiante interesado en el desarrollo web, la programación y la creación de aplicaciones. Me gusta aprender nuevas tecnologías y desarrollar soluciones informáticas.",
    "about.infoTitle": "Información",
    "about.labelLocation": "Ubicación",
    "about.valueLocation": "[Ciudad], Colombia",
    "about.labelEmail": "Correo",
    "about.labelLanguages": "Idiomas",
    "about.valueLanguages": "Español (nativo) · Inglés ([nivel])",
    "about.labelStatus": "Disponibilidad",
    "about.valueStatus": "Abierto a prácticas",
    "about.interestsTitle": "Intereses",

    "interest.1": "CÓDIGO",
    "interest.2": "SOPORTE",
    "interest.3": "LECTURA",
    "interest.4": "JUEGOS",

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
    "edu.1.text": "[Una o dos frases sobre lo que aprendes aquí.]",
    "edu.2.title": "[Curso o certificación]",
    "edu.2.text": "[Qué aprendiste y para qué te sirve.]",

    "exp.1.title": "[Rol o tipo de proyecto]",
    "exp.1.text": "[Qué hiciste, con qué herramientas y qué resultado tuvo.]",
    "exp.2.title": "[Rol o tipo de proyecto]",
    "exp.2.text": "[Qué hiciste, con qué herramientas y qué resultado tuvo.]",

    "portfolio.title": "Proyectos",
    "project.1.title": "[Nombre del proyecto]",
    "project.1.text": "[Tecnologías usadas]",
    "project.2.title": "[Nombre del proyecto]",
    "project.2.text": "[Tecnologías usadas]",
    "project.3.title": "[Nombre del proyecto]",
    "project.3.text": "[Tecnologías usadas]",

    "contact.title": "Contacto",
    "contact.intro": "[Una frase invitando a escribirte.]",
    "contact.emailLabel": "Correo",
    "contact.linkedinValue": "[Tu perfil profesional]",

    "footer.note": "[Tu nombre] · Técnico Profesional en Programación Web · UniEspinal"
};

const EN = {
    "nav.home": "HOME",
    "nav.about": "ABOUT ME",
    "nav.skills": "SKILLS",
    "nav.resume": "EDUCATION",
    "nav.portfolio": "PROJECTS",
    "nav.contact": "CONTACT",

    "hero.role": "Web Developer · Technical Support",

    "about.title": "About Me",
    "about.text": "I am a student interested in web development, programming and building applications. I enjoy learning new technologies and developing computer solutions.",
    "about.infoTitle": "Information",
    "about.labelLocation": "Location",
    "about.valueLocation": "[City], Colombia",
    "about.labelEmail": "Email",
    "about.labelLanguages": "Languages",
    "about.valueLanguages": "Spanish (native) · English ([level])",
    "about.labelStatus": "Availability",
    "about.valueStatus": "Open to internships",
    "about.interestsTitle": "Interests",

    "interest.1": "CODING",
    "interest.2": "SUPPORT",
    "interest.3": "READING",
    "interest.4": "GAMES",

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
    "edu.1.text": "[One or two sentences about what you are learning.]",
    "edu.2.title": "[Course or Certification]",
    "edu.2.text": "[What you learned and how it helps you.]",

    "exp.1.title": "[Role or Project Type]",
    "exp.1.text": "[What you did, which tools you used and the result.]",
    "exp.2.title": "[Role or Project Type]",
    "exp.2.text": "[What you did, which tools you used and the result.]",

    "portfolio.title": "Projects",
    "project.1.title": "[Project Name]",
    "project.1.text": "[Technologies Used]",
    "project.2.title": "[Project Name]",
    "project.2.text": "[Technologies Used]",
    "project.3.title": "[Project Name]",
    "project.3.text": "[Technologies Used]",

    "contact.title": "Contact",
    "contact.intro": "[A sentence inviting people to contact you.]",
    "contact.emailLabel": "Email",
    "contact.linkedinValue": "[Your professional profile]",

    "footer.note": "[Your name] · Professional Technician in Web Programming · UniEspinal"
};

const DICCIONARIOS = {
    es: ES,
    en: EN
};

let idiomaActual = "es";

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

let menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");

    if (!nav) return;

    menuVisible = !menuVisible;
    nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
    const nav = document.getElementById("nav");

    if (!nav) return;

    nav.className = "";
    menuVisible = false;
}

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
    }, {
        threshold: 0.4
    });

    barras.forEach(barra => observador.observe(barra));
}

document.addEventListener("DOMContentLoaded", () => {
    aplicarIdioma("es");
    animarHabilidades();
});
