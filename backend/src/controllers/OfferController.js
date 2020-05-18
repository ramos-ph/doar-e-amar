const Donation = require('../models/Donation');
const CommonDonation = require('../models/CommonDonation');
const Donator = require('../models/Donator');
const Category = require('../models/Category');

module.exports = {
  async index(req, res, next) {
    try {
      const donations = await Donation.findAll({
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

      return res.status(200).send(donations);
    } catch (err) {
      return next(err);
    }
  },
};
