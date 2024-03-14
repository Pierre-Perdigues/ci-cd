// Connection a la base de données
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('monapp', 'user', 'password', {
  host: 'db', // Nom du conteneur docker
  dialect: 'mysql'
});

module.exports = sequelize;
