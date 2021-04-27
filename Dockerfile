# On nomme l'image (de node)
FROM node:14-slim

# On crée un dossier pour notre application
WORKDIR /usr/src/app

# On copie le code source (le répertoire courant au répertoire courant)
COPY . .

# On installe les modules nécessaires pour lancer notre serveur
RUN npm install

# Expose un port précis du container afin de pouvoir communiquer avec lui
EXPOSE 5000

# On lance notre serveur
CMD ["npm", "start"]