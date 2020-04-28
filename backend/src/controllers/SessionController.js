const Donator = require('../models/Donator');

module.exports = {
  async store(req, res, next) {
    const { email, password } = req.body;

    try {
      const donator = await Donator.findOne({
        where: { email, password },
      });

      return res.status(200).json(donator);
    } catch (err) {
      return next(err);
    }
  },
};
