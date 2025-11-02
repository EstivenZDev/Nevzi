# Usa Node.js versión 22 --- Basado en Alpine Linux
FROM node:22-alpine

#Establece el directorio de trabajo dentro del contenedor. Todo lo que copies o ejecutes después de esta línea ocurrirá dentro de /app.
WORKDIR /app

# copia package.json y package-lock para instalar deps
COPY package.json package-lock.json* ./

#Para instalar las dependencias dentro del contenedor. (npm ci usa exactamente las versiones del package-lock.json)
RUN npm ci

# Copia todo el contenido de mi proyecto (archivos, carpetas, código fuente) desde tu máquina local al contenedor, dentro del directorio /app
COPY . .

#Le dice a Docker que este contenedor va a escuchar en el puerto 3000
EXPOSE 3000

#Define el comando por defecto que se ejecutará cuando el contenedor arranque.
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]

#Si no agregas -H 0.0.0.0, tu aplicación solo funcionaría dentro del contenedor y no podrías acceder desde tu navegador en localhost
