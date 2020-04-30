const bcrypt = require('bcryptjs');
const Donator = require('../models/Donator');

module.exports = {
  async store(req, res, next) {
    const { email, password } = req.body;

    try {
      const donator = await Donator.findOne({ where: { email } });

      if (!donator) {
        return res.status(404).send('User does not exists');
      }

      const { password: userPassword } = donator;

      const doesPasswordMatch = bcrypt.compareSync(password, userPassword);

      if (!doesPasswordMatch) {
        return res.status(404).send('Invalid password');
      }

      return res.status(200).json(donator);
    } catch (err) {
      return next(err);
    }
  },
};
