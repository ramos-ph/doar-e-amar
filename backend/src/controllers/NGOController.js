const bcrypt = require('bcryptjs');
const Donator = require('../models/Donator');
const DonatorContact = require('../models/DonatorContact');
const validateEmail = require('../utils/validateEmail');

module.exports = {
  async store(req, res, next) {
    const {
      name, email, password, address, cnpj, landline, cellphone,
    } = req.body;
    const { filename: avatar } = req.file;

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
      const contact = await DonatorContact.create({
        landline,
        cellphone,
      });

      const hashedPassword = bcrypt.hashSync(password, 10);

      const ngo = await Donator.create({
        name,
        email,
        password: hashedPassword,
        avatar,
        address,
        cnpj,
        contact_id: contact.id,
      });

      return res.status(201).send(ngo);
    } catch (err) {
      return next(err);
    }
  },
};
