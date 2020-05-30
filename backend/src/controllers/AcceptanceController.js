const NGOService = require('../services/ngo-service');
const DonationService = require('../services/donation-service');

module.exports = {
  async store(req, res, next) {
    const { donation_id: donationId } = req.params;
    const { authorization } = req.headers;

    try {
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

      const donation = await DonationService.acceptDonation(authorization, donationId);

      req.io.emit('donation_accepted', { id: donationId });

      return res
        .status(200)
        .send(donation);
    } catch (err) {
      return next(err);
    }
  },
};
