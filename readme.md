# CineTime - VueJS, Express & MongoDB movie application

## Antonin Barbier (antonin.barbier@outlook.com)

### Lancement

Cloner ou télécharger ce répertoire.

Dans le dossier téeléchargé:
* **npm install**
* **node_modules/.bin/webpack-dev-server --progress --open --hot --port 8080**
* **node src/node/app.js** OU **npm run dev**

Pour la base de données:
* Avoir MongoDB installé, l'exécuter (attention à la version de MongoDB, ici 4.0): "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"
* Mongoose devrait directement créer la base grâce au nom spécifié dans le fichier src/node/app.js (fonction mongoose.connect)
