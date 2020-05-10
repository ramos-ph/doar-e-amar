const bcrypt = require('bcryptjs');
const Donator = require('../models/Donator');

module.exports = {
  async store(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password) {
      return next({
        status: 403,
        error: 'Invalid payload.',
        details: {
          email: !email ? 'This field is required.' : undefined,
          password: !password ? 'This field is required.' : undefined,
        },
      });
    }

    try {
      const donator = await Donator.findOne({ where: { email } });

      if (!donator) {
        return next({
          status: 403,
          error: 'User not found.',
        });
      }

      const { password: userPassword } = donator;

      const doesPasswordMatch = bcrypt.compareSync(password, userPassword);

      if (!doesPasswordMatch) {
        return next({
          status: 403,
          error: 'Invalid payload.',
          details: {
            password: 'The password is invalid.',
          },
        });
      }

      donator.password = undefined;

      return res.status(200).json({ user: { donator } });
    } catch (err) {
      return next(err);
    }
  },
};
