const express = require('express');
const cors = require('cors');
const db = require('./database');
const app = express();

// Importation des routes
const prenomRoutes = require("./prenom/route-prenom");
const citationRoutes = require('./citation/route-citation');

// Middleware
app.use(cors());
app.use(express.json());

// Routes de base
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend' });
});

// Utilisation des routeurs pour les chemins spécifiques
app.use('/prenom', prenomRoutes);
app.use('/citation', citationRoutes);

// Exportez l'instance app pour l'utiliser dans les tests et dans server.js
module.exports = app;
