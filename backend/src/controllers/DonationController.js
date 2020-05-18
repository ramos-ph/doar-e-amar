const Donation = require('../models/Donation');
const CommonDonation = require('../models/CommonDonation');
const Donator = require('../models/Donator');
const Category = require('../models/Category');

module.exports = {
  async store(req, res, next) {
    const { title, address } = req.body;
    const { authorization: donator_id } = req.headers;
    const { category_id } = req.query;
    const { filename: picture } = req.file;

    try {
      const commonDonation = await CommonDonation.create({
        pickup_address: address,
        picture,
        status: 'PENDENTE',
      });

      const donation = await Donation.create({
        title,
        donator_id,
        category_id,
        common_donation_id: commonDonation.id,
      });

      return res.status(201).send(donation);
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    const { authorization: donator_id } = req.headers;

    try {
      const donations = await Donation.findAll({
        where: {
          donator_id,
        },
        include: [{
          model: CommonDonation,
          as: 'common_donation',
        }, {
          model: Donator,
          as: 'donator',
          attributes: {
            exclude: [
              'email',
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
      });

      return res.status(200).send(donations);
    } catch (err) {
      return next(err);
    }
  },
};
