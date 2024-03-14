const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database'); 

class Prenom extends Model {}

Prenom.init({
  // Attributs du modèle, qui correspondent aux colonnes de la table
  idPrenom: { // Colonne idPrenom
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  valeurPrenom: { // Colonne valeurPrenom
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, // instance de connexion
  modelName: 'Prenom', // Nom du modèle
  tableName: 'prenom', // Nom de la table
  timestamps: false, // Evite d'avoir dans la requette created_at, update_at
});

module.exports = Prenom;
