/*ADMIN.JS */

document.addEventListener("DOMContentLoaded", () => {
    initAdminMenu();
    initCardsHover();
    initTableHighlight();
});

/* MENÚ ACTIVO (SIDEBAR)*/
function initAdminMenu() {
    const links = document.querySelectorAll(".admin-menu a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

/* ANIMACIÓN DE CARDS */
function initCardsHover() {
    const cards = document.querySelectorAll(".admin-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * 6;
            const rotateY = ((x / rect.width) - 0.5) * -6;

            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });
}

/* TABLAS – HIGHLIGHT FILA */
function initTableHighlight() {
    const rows = document.querySelectorAll(".admin-table tbody tr");

    rows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            row.style.background = "rgba(212,175,55,.08)";
        });

        row.addEventListener("mouseleave", () => {
            row.style.background = "transparent";
        });
    });
}

/*(CRUD) */
function adminAlert(message, type = "success") {
    const alert = document.createElement("div");
    alert.className = `admin-alert ${type}`;
    alert.textContent = message;

    document.body.appendChild(alert);

    setTimeout(() => alert.classList.add("show"), 100);

    setTimeout(() => {
        alert.classList.remove("show");
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}
