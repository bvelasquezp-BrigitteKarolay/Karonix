/*MENU.JS*/

document.addEventListener("DOMContentLoaded", () => {
    setupActiveLinks();
    setupScrollBehavior();
    setupMobileMenu();
});

/*LINK ACTIVO POR RUTA*/
function setupActiveLinks() {
    const links = document.querySelectorAll(".nav-main a");
    const path = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === path) {
            link.classList.add("active");
        }
    });
}

/*NAV CON SCROLL SUAVE*/
function setupScrollBehavior() {
    const nav = document.querySelector(".nav-main");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const current = window.scrollY;

        if (current > 80) {
            nav.classList.add("nav-elevated");
        } else {
            nav.classList.remove("nav-elevated");
        }

        lastScroll = current;
    });
}

/*MENÚ MOBILE PREMIUM*/
function setupMobileMenu() {
    const nav = document.querySelector(".nav-main");
    const ul = nav.querySelector("ul");

    const btn = document.createElement("button");
    btn.className = "menu-toggle";
    btn.innerHTML = "<span></span><span></span><span></span>";
    nav.prepend(btn);

    btn.addEventListener("click", () => {
        btn.classList.toggle("open");
        nav.classList.toggle("open");
        ul.classList.toggle("open");
    });
    

    // Cerrar al hacer click
    ul.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            btn.classList.remove("open");
            nav.classList.remove("open");
            ul.classList.remove("open");
        });
    });
}
