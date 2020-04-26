const Sequelize = require('sequelize');
const config = require('../config/database');

const connection = new Sequelize(config);

const Donator = require('../models/Donator');
const DonatorContact = require('../models/DonatorContact');

Donator.init(connection);
DonatorContact.init(connection);

Donator.associate(connection.models);
DonatorContact.associate(connection.models);

module.exports = connection;
