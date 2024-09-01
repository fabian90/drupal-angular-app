# drupal-angular-app/Dockerfile
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación Angular
RUN npm run build

# Instalar un servidor HTTP para servir la aplicación
RUN npm install -g http-server

# Exponer el puerto de la aplicación
EXPOSE 8080

# Comando para iniciar el servidor
CMD ["http-server", "dist/drupal-angular-app", "-p", "8080"]
