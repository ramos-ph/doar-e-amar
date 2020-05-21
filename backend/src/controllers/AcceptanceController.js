/* eslint-disable camelcase */
const Donation = require('../models/Donation');
const Donator = require('../models/Donator');

module.exports = {
  async store(req, res, next) {
    const { offer_id } = req.params;
    const { authorization: receiver_id } = req.headers;

    try {
      const receiver = await Donator.findByPk(receiver_id);

      if (!receiver.cnpj || !receiver.member) {
        return next({
          status: 403,
          error: 'Forbidden.',
          details: {
            authorization: 'Unauthorized operation.',
          },
        });
      }

      const donation = await Donation.findByPk(offer_id);

      if (!donation) {
        return next({
          status: 404,
          error: 'Not found.',
          details: {
            donation: 'This donation does not exists.',
          },
        });
      }

      if (donation.receiver_id) {
        return next({
          status: 403,
          error: 'Forbidden.',
          details: {
            donation: 'This donation was already accepted.',
          },
        });
      }

      donation.receiver_id = receiver_id;
      donation.acceptance_date = Date.now();

      await donation.save();

      return res
        .status(200)
        .send(donation);
    } catch (err) {
      return next(err);
    }
  },
};
