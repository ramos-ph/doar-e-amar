const Sequelize = require('sequelize');
const config = require('../config/database');

const connection = new Sequelize(config);

const Donator = require('../models/Donator');
const DonatorCommon = require('../models/DonatorCommon');
const DonatorNGO = require('../models/DonatorNGO');
const DonatorContact = require('../models/DonatorContact');

Donator.init(connection);
DonatorCommon.init(connection);
DonatorNGO.init(connection);
DonatorContact.init(connection);

Donator.associate(connection.models);
DonatorCommon.associate(connection.models);
DonatorNGO.associate(connection.models);
DonatorContact.associate(connection.models);

module.exports = connection;
