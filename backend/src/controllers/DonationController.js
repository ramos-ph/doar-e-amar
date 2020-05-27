const DonationService = require('../services/donation-service');
const NGOService = require('../services/ngo-service');

module.exports = {
  async index(req, res, next) {
    const { authorization } = req.headers;

    try {
      let donations;

      if (/self/.test(req.path)) {
        donations = await DonationService.findUserDonations(authorization);
      } else {
        const ngo = await NGOService.findNgoById(authorization);

        if (!ngo.member) {
          return next({
            status: 403,
            error: 'Forbidden.',
            details: {
              authorization: 'Operation not permitted.',
            },
          });
        }

        donations = await DonationService.getOffers();
      }

      return res.status(200).send(donations);
    } catch (err) {
      return next(err);
    }
  },

  async store(req, res, next) {
    const { title, address } = req.body;
    const { authorization: donatorId } = req.headers;
    const { category_id: categoryId } = req.query;
    const { filename: picture } = req.file;

    try {
      const donation = await DonationService.createCommonDonation({
        picture,
        pickup_address: address,
      }, {
        title,
        donator_id: donatorId,
        category_id: categoryId,
        picture,
      });

      return res.status(201).send(donation);
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    const { authorization } = req.headers;
    const { donation_id: donationId } = req.params;

    let donation;

    try {
      if (/self/.test(req.path)) {
        donation = await DonationService.findUserDonationById(authorization, donationId);
      } else {
        const ngo = await NGOService.findNgoById(authorization);

        if (!ngo.member) {
          return next({
            status: 403,
            error: 'Forbidden.',
            details: {
              authorization: 'Operation not permitted.',
            },
          });
        }

        donation = await DonationService.getOfferById(donationId);
      }

      if (!donation) {
        return next({
          status: 404,
          error: 'Donation not found.',
        });
      }

      return res.status(200).send(donation);
    } catch (err) {
      return next(err);
    }
  },
};
