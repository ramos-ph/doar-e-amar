const bcrypt = require('bcryptjs');
const Donator = require('../models/Donator');
const DonatorContact = require('../models/DonatorContact');

module.exports = {
  async store(req, res, next) {
    const {
      name, email, password, address, cnpj, landline, cellphone,
    } = req.body;
    const { filename: avatar } = req.file;

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
