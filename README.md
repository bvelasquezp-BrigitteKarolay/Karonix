# KARONIX – Creatividad & Tecnología
AUTORA: Velasquez Puma Brigitte Karolay

Proyecto web académico y profesional desarrollado, aplicando lo aprendido en el curso de IDWEB
KARONIX es una plataforma digital orientada a servicios de diseño gráfico, branding,
publicidad digital y desarrollo web, con una identidad visual elegante y moderna.


## Estructura del proyecto

KARONIX_WEB/
│
├── backend/
│   ├── server.py
│   ├── routes.py
│   ├── database.py
│   └── config.py
├── templates/
│   ├── index.html
│   ├── nosotros.html
│   ├── servicios.html
│   ├── portafolio.html
│   ├── contacto.html
│   └── admin.html
│
├── sql/
│   └── karonix.sql
├── static/
│   ├── css/
│   │   ├── admin.css
│   │   ├── forms.css
│   │   ├── layout.css
│   │   ├── main.css
│   ├── js/
│   │   ├── admin.js
│   │   ├── affects.js
│   │   ├── form.js
│   │   ├── menu.js
├── README.md
└── .gitignore

# Ejecución del proyecto en local

Para levantar la aplicación y probar su funcionamiento en tu computadora, sigue estos pasos:

# 1. Importar la base de datos
Ejecuta el script sql/karonix.sql en MySQL Workbench para crear la base de datos y la tabla de mensajes.

# 2.Configurar las credenciales
Edita backend/config.py con tu usuario, contraseña, host y nombre de la base de datos, asegurando que el backend pueda conectarse correctamente.

# 3.Iniciar el servidor
Abre una terminal en la carpeta backend y ejecuta:

python server.py


Esto levantará el servidor local en el puerto definido en la configuración.

# 4.Abrir la web
Accede desde tu navegador a:

http://localhost:8000


Podrás navegar por todas las secciones y probar la funcionalidad del formulario de contacto.

# 5. Acceder al panel administrativo
Ingresa a admin.html usando las credenciales configuradas para revisar los mensajes recibidos desde el formulario de contacto.

Con estos pasos, cualquier usuario puede ejecutar la aplicación localmente y experimentar la funcionalidad completa de KARONIX de manera simple y segura.
