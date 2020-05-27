const bcrypt = require('bcryptjs');
const User = require('../services/user-service');
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

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        avatar,
        address,
        cpf,
      });

      return res.status(201).send(user);
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    const { user_id: userId } = req.params;

    try {
      const user = await User.findById(userId);

      return res.status(200).send(user);
    } catch (err) {
      return next(err);
    }
  },
};
