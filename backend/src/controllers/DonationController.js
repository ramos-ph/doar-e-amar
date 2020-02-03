const User = require('../models/User')
const Donation = require('../models/Donation')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user_id
      const { page = 1 } = req.query

      const loggedUser = await User.findById(userId)

      const donations = await Donation.paginate(
        {
          $and: [
            { _id: { $in: loggedUser.doacoes } }
          ]
        },
        {
          page,
          limit: 10
        }
      )

      return res.status(200).json(donations)
    } catch (err) {
      return res
        .status(500)
        .send(err.toString() || err.message)
    }
  },

  async store (req, res) {
    try {
      const userId = req.user_id
      const { titulo, descricao, endereco, categoria, estado } = req.validated

      const loggedUser = await User.findById(userId)

      const donation = await Donation.create({
        titulo,
        descricao,
        foto: req.file.filename,
        endereco,
        categoria,
        estado
      })

      loggedUser.doacoes.push(donation._id)
      await loggedUser.save()

      return res.status(201).json(donation)
    } catch (err) {
      return res
        .status(500)
        .send(err.toString() || err.message)
    }
  },

  async show (req, res) {
    try {
      const userId = req.user_id
      const { donationId } = req.params

      const loggedUser = await User.findById(userId)

      const donation = await Donation.findOne({
        $and: [
          { _id: donationId },
          { _id: { $in: loggedUser.doacoes } }
        ]
      })

      return res.status(200).json(donation)
    } catch (err) {
      return res
        .status(500)
        .json(err.toString() || err.message)
    }
  },

  async update (req, res) {
    return res.send()
  },

  async delete (req, res) {
    try {
      const userId = req.user_id
      const { donationId } = req.validated

      const loggedUser = await User.findById(userId)

      await Donation.findOneAndDelete({
        $and: [{ _id: donationId }, { _id: { $in: loggedUser.doacoes } }]
      })

      loggedUser.doacoes.splice(loggedUser.doacoes.indexOf(donationId), 1)
      await loggedUser.save()

      return res
        .status(200)
        .send({
          message: 'Item excluído com sucesso!',
          donation: donationId,
          deleted: true
        })
    } catch (err) {
      return res
        .status(500)
        .json(err.toString() || err.message)
    }
  }
}
