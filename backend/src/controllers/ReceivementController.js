/* eslint-disable camelcase */
const Donation = require('../models/Donation');
const CommonDonation = require('../models/CommonDonation');

module.exports = {
  async store(req, res, next) {
    const { offer_id } = req.params;
    const { authorization: receiver_id } = req.headers;

    try {
      const donation = await Donation.findByPk(offer_id, {
        include: [{
          model: CommonDonation,
          as: 'common_donation',
        }],
      });

      if (donation.receiver_id !== Number(receiver_id)) {
        return next({
          status: 403,
          error: 'Forbidden.',
          details: {
            authorization: 'Operation not permitted.',
          },
        });
      }

      donation.receivement_date = Date.now();
      donation.common_donation.status = 'RECEBIDO';

      await donation.save();

      const commonDonation = await CommonDonation.findByPk(donation.common_donation_id);
      commonDonation.status = 'RECEBIDO';

      await commonDonation.save();

      return res
        .status(200)
        .send(donation);
    } catch (err) {
      return next(err);
    }
  },
};
