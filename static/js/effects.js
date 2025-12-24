/*EFFECTS.JS */

document.addEventListener("DOMContentLoaded", () => {
    revealOnScroll();
    parallaxHero();
    socialLuxuryHover();
});

/*REVEAL CON RITMO VISUAL*/
function revealOnScroll() {
    const elements = document.querySelectorAll(
        ".card, .service-item, .hero-right, .hero-left"
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition =
                        "opacity 1s ease, transform 1s ease";
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.15 }
    );

    elements.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(el);
    });
}

/*PARALLAX SUAVE HERO */
function parallaxHero() {
    const hero = document.querySelector(".hero");

    if (!hero) return;

    window.addEventListener("scroll", () => {
        const offset = window.scrollY * 0.25;
        hero.style.backgroundPositionY = `${offset}px`;
    });
}

/*REDES SOCIALES*/
function socialLuxuryHover() {
    const icons = document.querySelectorAll(".social-icons a");

    icons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transition =
                "transform .4s ease, box-shadow .4s ease";
            icon.style.transform = "translateY(-8px) scale(1.1)";
            icon.style.boxShadow =
                "0 18px 35px rgba(212,175,55,.35)";
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "translateY(0) scale(1)";
            icon.style.boxShadow = "none";
        });
    });
}
