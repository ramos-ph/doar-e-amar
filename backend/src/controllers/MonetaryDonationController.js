const Donator = require('../services/user-service');
const NGO = require('../services/ngo-service');
const Donation = require('../services/donation-service');

module.exports = {
  async store(req, res, next) {
    const { authorization: userId } = req.headers;
    const { value, title } = req.body;
    const { ngo_id: ngoId } = req.query;

    try {
      const donator = await Donator.findById(userId);
      const ngo = await NGO.findNgoById(ngoId);

      if (!donator || !ngo) {
        return next({
          status: 404,
          error: 'Not found.',
          details: {
            user: !donator && 'This user does not exists.',
            ngo: !ngo && 'This NGO does not exists.',
          },
        });
      }

      if (!ngo.cnpj) {
        return next({
          status: 403,
          error: 'Forbidden.',
          details: {
            ngo: 'This user is not a NGO.',
          },
        });
      }

      const monetaryDonation = await Donation.createMonetaryDonation({
        value,
        title,
        donator_id: userId,
        category_id: 3,
      }, ngoId);

      const targetSocket = req.connectedUsers[ngoId];

      req.io.to(targetSocket).emit('monetary_donation', {
        donation: {
          title,
          value,
          name: donator.name,
        },
      });

      return res
        .status(201)
        .send(monetaryDonation);
    } catch (err) {
      return next(err);
    }
  },
};
