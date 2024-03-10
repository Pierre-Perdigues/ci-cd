const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Assurez-vous que ce chemin mène à votre fichier de configuration Sequelize

class Prenom extends Model {}

Prenom.init({
  // Spécifiez les attributs du modèle, qui correspondent aux colonnes de la table
  idPrenom: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  valeurPrenom: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, // instance de connexion
  modelName: 'Prenom', // Nom du modèle
  tableName: 'prenom', // Nom de la table
  timestamps: false,
});

module.exports = Prenom;
