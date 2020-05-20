const bcrypt = require('bcryptjs');
const Donator = require('../models/Donator');
const validateEmail = require('../utils/validateEmail');

module.exports = {
  async store(req, res, next) {
    const {
      name, email, password, cpf, address,
    } = req.body;
    const avatar = req.file.filename;

    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      return next({
        status: 400,
        error: 'Invalid payload.',
        details: {
          email: 'This field is not properly formed.',
        },
      });
    }

    try {
      const hashedPassword = bcrypt.hashSync(password, 10);

      const donator = await Donator.create({
        name,
        email,
        password: hashedPassword,
        avatar,
        address,
        cpf,
      });

      return res.status(201).send(donator);
    } catch (err) {
      return next(err);
    }
  },
};
