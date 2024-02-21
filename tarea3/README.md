# Tarea 3: CRUD con base de datos

Utilizando la API de la tarea 2, se conectó a una colección en MongoDB utilizando Mongoose.

## Cómo correr el proyecto
Después de descargar la carpeta contenedora (tarea3), instalar las librerías necesarias (`package-lock.json`) con:
```
npm install
```
Si hay problemas con la versión de node, instalar la v16.20.1 o la que indique el campo "required" de npm.

Crear un archivo `.env` en la raíz del proyecto con las variables indicadas en el `.env.example`, sustituyendo el puerto y la URL de la conexión a Mongo.

Iniciar escucha del servidor:
```
node .
```

O en modo dev:
```
npm run dev
```

