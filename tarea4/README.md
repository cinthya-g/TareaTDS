# Tarea 4: App de noticias

Desarrollar una aplicación web para listar noticias de una API de terceros.
Se utilizó "newsapi" como proveedor de noticias.

## Cómo correr el proyecto
Después de descargar la carpeta contenedora (tarea4), instalar las librerías necesarias (`package-lock.json`) con:
```
npm install
```
Si hay problemas con la versión de node, instalar la v16.20.1 o la que indique el campo "required" de npm.

Crear un archivo `.env` en la raíz del proyecto con las variables indicadas en el `.env.example`, sustituyendo el puerto, URL de la conexión a Mongo y el API Key de NewsAPI.

Iniciar escucha del servidor:
```
node .
```

O en modo dev:
```
npm run dev
```

