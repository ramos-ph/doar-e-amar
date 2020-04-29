const Donator = require('../models/Donator');

module.exports = {
  async store(req, res, next) {
    const { email, password } = req.body;

    try {
      const donator = await Donator.findOne({
        where: { email, password },
      });

      if (!donator) {
        return res.status(404).send('User does not exists');
      }

      return res.status(200).json(donator);
    } catch (err) {
      return next(err);
    }
  },
};
