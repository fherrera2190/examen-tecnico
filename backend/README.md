# Examen Técnico Backend

Bienvenido al proyecto de backend para el examen técnico. Aquí encontrarás todo lo necesario para ponerlo en marcha y comenzar a desarrollar.

## Requisitos

- Node.js >= 18
- Docker (opcional, para base de datos)
- PostgreSQL

## Instalación y ejecución en desarrollo

1. **Clona el repositorio**
   ```sh
   git clone <url-del-repositorio>
   ```

2. **Configura las variables de entorno**
   - Copia el archivo `.env.template` y renómbralo a `.env`.
   - Modifica las variables según tu entorno local.

3. **Instala las dependencias**
   ```sh
   npm install
   ```

4. **Levanta la base de datos**
   ```sh
   docker-compose up -d
   ```
5. **Aplica migraciones y genera el cliente Prisma**

   ```sh
   npx prisma migrate dev
   ```

6. **Ejecuta el proyecto en modo desarrollo**
   ```sh
   npm run dev
   ```
