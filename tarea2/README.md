# Tarea 2: Middlewares

Utilizando la API de la tarea 1, se implementaron dos middlewares:
- auth
- role

## Cómo correr el proyecto
Después de descargar la carpeta contenedora (tarea2), instalar las siguientes librerías:
```
npm install axios dotenv express
```
Iniciar escucha del servidor (3001->env ó 3000):
`node .`

### Si hay problemas para correr dependencias
Borrar la carpeta node_modules (si fue creada en una ejecución previa) y el archivo package-lock.json y reinstalarlas:
```
rm -rf node_modules
rm pacakge-lock.json
npm install
```
