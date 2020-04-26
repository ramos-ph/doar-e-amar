const User = require('../models/User');
const Donation = require('../models/Donation');

module.exports = {
  async index(req, res) {
    try {
      const userId = req.user_id;
      const { page = 1 } = req.query;

      const loggedUser = await User.findById(userId);

      const donations = await Donation.paginate(
        {
          $and: [
            { dono: loggedUser._id },
          ],
        },
        {
          page,
          limit: 10,
        },
      );

      return res.status(200).json(donations);
    } catch (err) {
      return res
        .status(500)
        .send(err.toString() || err.message);
    }
  },

  async store(req, res) {
    try {
      const userId = req.user_id;
      const {
        titulo, descricao, rua, numero, cep, cidade, categoria,
      } = req.body;

      const loggedUser = await User.findById(userId);

      const donation = await Donation.create({
        titulo,
        descricao,
        foto: req.file.filename,
        endereco: {
          rua,
          numero,
          cep,
          cidade,
        },
        categoria,
        dono: loggedUser._id,
      });

      return res.status(201).json(donation);
    } catch (err) {
      return res
        .status(500)
        .send(err.toString() || err.message);
    }
  },

  async show(req, res) {
    try {
      const userId = req.user_id;
      const { donationId } = req.params;

      const loggedUser = await User.findById(userId);

      const donation = await Donation.findOne({
        $and: [
          { _id: donationId },
          { dono: loggedUser._id },
        ],
      });

      return res.status(200).json(donation);
    } catch (err) {
      return res
        .status(500)
        .json(err.toString() || err.message);
    }
  },
};
