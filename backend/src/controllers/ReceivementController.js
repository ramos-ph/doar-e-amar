const DonationService = require('../services/donation-service');

module.exports = {
  async store(req, res, next) {
    const { donation_id: donationId } = req.params;
    const { authorization } = req.headers;

    try {
      const donation = await DonationService.receiveDonation(authorization, donationId);

      return res
        .status(200)
        .send(donation);
    } catch (err) {
      return next(err);
    }
  },
};
