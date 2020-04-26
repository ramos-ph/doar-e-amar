const Sequelize = require('sequelize');
const config = require('../config/database');

const connection = new Sequelize(config);

// Definição dos models

module.exports = connection;
