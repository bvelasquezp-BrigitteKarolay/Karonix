from flask import Blueprint, render_template, request, jsonify
from database import conectar

routes = Blueprint("routes", __name__)


# PÁGINAS

@routes.route("/")
def index():
    return render_template("index.html")


@routes.route("/nosotros")
def nosotros():
    return render_template("nosotros.html")


@routes.route("/servicios")
def servicios():
    return render_template("servicios.html")


@routes.route("/portafolio")
def portafolio():
    return render_template("portafolio.html")



# CONTACTO 
@routes.route("/contacto", methods=["GET", "POST"])
def contacto():
    if request.method == "POST":
        nombre = request.form.get("nombre")
        email = request.form.get("email")
        mensaje = request.form.get("mensaje")

        conn = conectar()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)",
            (nombre, email, mensaje)
        )
        conn.commit()
        conn.close()

        return jsonify({
            "status": "ok",
            "message": "Mensaje guardado correctamente"
        })

    return render_template("contacto.html")



# ADMIN 

@routes.route("/admin")
def admin():
    return render_template("admin.html")
