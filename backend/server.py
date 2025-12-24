from flask import Flask
from routes import routes
from database import inicializar_db
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app = Flask(
    __name__,
    template_folder=os.path.join(BASE_DIR, "templates"),
    static_folder=os.path.join(BASE_DIR, "static")
)

app.register_blueprint(routes)

if __name__ == "__main__":
    inicializar_db()
    app.run(debug=True)
