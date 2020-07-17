/* eslint-disable no-throw-literal */
const Donation = require('../models/Donation');
const Donator = require('../models/Donator');
const CommonDonation = require('../models/CommonDonation');
const MonetaryDonation = require('../models/MonetaryDonation');
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

  async createMonetaryDonation(data, ngoId) {
    const monetaryDonation = await MonetaryDonation.create({
      receiver_ngo_id: ngoId,
      value: data.value,
    });

    return Donation.create({
      monetary_donation_id: monetaryDonation.id,
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
      }, {
        model: Donator,
        as: 'receiver',
      }],
    });
  },

  async acceptDonation(receiverId, donationId) {
    const donation = await Donation.findByPk(donationId, {
      include: [{
        model: CommonDonation,
        as: 'common_donation',
      }],
    });

    if (!donation) {
      throw {
        status: 404,
        error: 'Not found.',
        details: {
          donation: 'This donation does not exists.',
        },
      };
    }

    if (donation.receiver_id) {
      throw {
        status: 403,
        error: 'Forbidden.',
        details: {
          donation: 'This donation was already accepted.',
        },
      };
    }

    donation.receiver_id = Number(receiverId);
    donation.acceptance_date = Date.now();
    donation.common_donation.status = 'ACEITO';

    await donation.save();

    const commonDonation = await CommonDonation.findByPk(donation.common_donation_id);
    commonDonation.status = 'ACEITO';

    await commonDonation.save();

    return donation;
  },

  async receiveDonation(receiverId, donationId) {
    const donation = await Donation.findByPk(donationId, {
      include: [{
        model: CommonDonation,
        as: 'common_donation',
      }],
    });

    if (donation.receiver_id !== Number(receiverId)) {
      throw {
        status: 403,
        error: 'Forbidden.',
        details: {
          authorization: 'Operation not permitted.',
        },
      };
    }

    donation.receivement_date = Date.now();
    donation.common_donation.status = 'RECEBIDO';

    await donation.save();

    const commonDonation = await CommonDonation.findByPk(donation.common_donation_id);
    commonDonation.status = 'RECEBIDO';

    await commonDonation.save();

    return donation;
  },
};
