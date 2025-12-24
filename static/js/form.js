/*FORM.JS*/

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form form");

    if (!form) return;

    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.parentElement.classList.add("focus");
        });

        input.addEventListener("blur", () => {
            if (!input.value.trim()) {
                input.parentElement.classList.remove("focus");
            }
        });
    });

    form.addEventListener("submit", e => {
        e.preventDefault();

        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.borderColor = "#c0392b";
            } else {
                input.style.borderColor = "rgba(212,175,55,.6)";
            }
        });

        showContactMessage(
            valid
                ? "Mensaje enviado correctamente ✨"
                : "Completa todos los campos",
            valid ? "success" : "error"
        );

        if (valid) form.reset();
    });
});

function showContactMessage(text, type) {
    let msg = document.querySelector(".contact-message");

    if (!msg) {
        msg = document.createElement("div");
        msg.className = "contact-message";
        document.querySelector(".contact-form").appendChild(msg);
    }

    msg.textContent = text;
    msg.style.color =
        type === "success"
            ? "var(--dorado-principal)"
            : "#e74c3c";
}
