const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('monapp', 'user', 'password', {
  host: 'db',
  dialect: 'mysql'
});

module.exports = sequelize;
