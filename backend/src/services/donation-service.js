const Donation = require('../models/Donation');
const Donator = require('../models/Donator');
const CommonDonation = require('../models/CommonDonation');
const Category = require('../models/Category');

module.exports = {
  async getOffers() {
    return Donation.findAll({
      where: {
        monetary_donation_id: null,
      },
      include: [{
        model: CommonDonation,
        as: 'common_donation',
        where: {
          status: 'PENDENTE',
        },
      }, {
        model: Category,
        as: 'category',
      }],
      attributes: {
        exclude: [
          'common_donation_id',
          'category_id',
        ],
      },
    });
  },

  async getOfferById(offerId) {
    return Donation.findByPk(offerId, {
      include: [{
        model: CommonDonation,
        as: 'common_donation',
        where: {
          status: 'PENDENTE',
        },
      }, {
        model: Donator,
        as: 'donator',
        attributes: {
          exclude: [
            'password',
            'cpf',
            'address',
            'member',
            'contact_id',
          ],
        },
      }, {
        model: Category,
        as: 'category',
      }],
      attributes: {
        exclude: [
          'donator_id',
          'common_donation_id',
          'category_id',
        ],
      },
    });
  },

  async createCommonDonation(objectInfo, data) {
    const commonDonation = await CommonDonation.create(objectInfo);

    return Donation.create({
      common_donation_id: commonDonation.id,
      ...data,
    });
  },

  async findById(donationId) {
    return Donation.findByPk(donationId);
  },

  async findUserDonations(donatorId) {
    return Donation.findAll({
      where: {
        donator_id: donatorId,
      },
      include: [{
        model: CommonDonation,
        as: 'common_donation',
      }, {
        model: Category,
        as: 'category',
      }],
    });
  },

  async findUserDonationById(donatorId, donationId) {
    return Donation.findOne({
      where: {
        id: donationId,
        donator_id: donatorId,
      },
      include: [{
        model: CommonDonation,
        as: 'common_donation',
      }, {
        model: Category,
        as: 'category',
      }],
    });
  },
};
