const Donator = require('../models/Donator');
const DonatorContact = require('../models/DonatorContact');

module.exports = {
  async store(req, res) {
    const {
      name, email, password, landline, cellphone, cpf, address,
    } = req.body;
    const avatar = req.file.filename;

    try {
      const contact = await DonatorContact.create({
        landline,
        cellphone,
      });

      const donator = await Donator.create({
        name,
        email,
        password,
        avatar,
        address,
        cpf,
        contact_id: contact.id,
      });

      return res.status(201).json(donator);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
