const { Op } = require('sequelize');

const Donation = require('../models/Donation');
const CommonDonation = require('../models/CommonDonation');
const Donator = require('../models/Donator');
const Category = require('../models/Category');

module.exports = {
  async index(req, res, next) {
    const { category } = req.query;

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
          where: category ? {
            name: {
              [Op.iLike]: `%${category}%`,
            },
          } : {},
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

  async show(req, res, next) {
    const { offer_id } = req.params;

    try {
      const donation = await Donation.findByPk(offer_id, {
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

      if (!donation) {
        return next({
          status: 404,
          error: 'Donation not found.',
          details: {
            offer: `The offer with id ${offer_id} does not exists`,
          },
        });
      }

      return res.status(200).send(donation);
    } catch (err) {
      return next(err);
    }
  },
};
