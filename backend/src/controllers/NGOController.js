const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const Donator = require('../models/Donator');
const DonatorContact = require('../models/DonatorContact');
const validateEmail = require('../utils/validateEmail');

const NGO = require('../services/ngo-service');

require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env',
});

module.exports = {
  async index(_req, res, next) {
    try {
      const ngos = await NGO.getNgos();

      return res.status(200).send(ngos);
    } catch (err) {
      return next(err);
    }
  },

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

      const hashedId = bcrypt.hashSync(String(ngo.id), 6);

      // To refactor.
      const message = {
        from: 'contato@doareamar.com',
        to: ngo.email,
        subject: 'Confirme seu e-mail na Doar & Amar',
        html: `<p>Olá, ${ngo.name}!</p>
        <br/>
        Por favor, acesse o link abaixo para confirmar seu e-mail.
        <br/><br/>
        <a href="http://localhost:3001/api/doareamar/v1/confirm/?token=${hashedId}&?id=${ngo.id}">Acesse aqui.</a>`,
      };

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      transporter.sendMail(message);

      return res.status(201).send(ngo);
    } catch (err) {
      return next(err);
    }
  },
};
