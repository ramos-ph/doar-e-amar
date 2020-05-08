const Sequelize = require('sequelize');
const config = require('../config/database');

const connection = new Sequelize(config);

const Donator = require('../models/Donator');
const DonatorContact = require('../models/DonatorContact');
const Category = require('../models/Category');
const Donation = require('../models/Donation');
const CommonDonation = require('../models/CommonDonation');

Donator.init(connection);
DonatorContact.init(connection);
Category.init(connection);
Donation.init(connection);
CommonDonation.init(connection);

DonatorContact.associate(connection.models);
Donator.associate(connection.models);
Donation.associate(connection.models);

module.exports = connection;
