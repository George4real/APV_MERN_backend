# Proyecto APV - Backend

Este proyecto es el backend de una aplicación de administración de pacientes veterinarios, desarrollado con la pila tecnológica MERN (MongoDB, Express, React, Node.js) y otras tecnologías como Tailwind y React Router Dom.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para aplicaciones web en Node.js.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB y Node.js.
- **JWT (jsonwebtoken)**: Para autenticación y autorización.
- **bcrypt**: Para el hashing de contraseñas.
- **nodemailer**: Para el envío de correos electrónicos.
- **dotenv**: Para la gestión de variables de entorno.
- **cors**: Para permitir solicitudes desde diferentes orígenes.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/George4real/APV_MERN_backend.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd APV_MERN_backend
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto y añade tus configuraciones:
    ```env
    MONGO_URI=tu_mongo_uri
    JWT_SECRET=tu_jwt_secret
    EMAIL_USER=tu_correo
    EMAIL_PASS=tu_contraseña
    ```

5. Inicia el servidor en modo desarrollo:
    ```bash
    npm run dev
    ```

## Endpoints

- **Autenticación y Usuarios**
    - `POST /api/users/register`: Registrar un nuevo usuario.
    - `POST /api/users/login`: Iniciar sesión de usuario.
    - `GET /api/users/profile`: Obtener el perfil del usuario autenticado.

- **Pacientes**
    - `GET /api/pacientes`: Obtener todos los pacientes.
    - `POST /api/pacientes`: Crear un nuevo paciente.
    - `GET /api/pacientes/:id`: Obtener un paciente por ID.
    - `PUT /api/pacientes/:id`: Actualizar un paciente por ID.
    - `DELETE /api/pacientes/:id`: Eliminar un paciente por ID.

## Contribuciones

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia ISC.
