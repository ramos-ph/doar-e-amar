const User = require('../models/User')
const Donation = require('../models/Donation')
const Offer = require('../models/Offer')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user_id
      const { page = 1 } = req.query

      const loggedUser = await User.findById(userId)

      if (loggedUser.tipo !== 'Pessoa jurídica') {
        return res
          .status(401)
          .json({ message: 'Você não têm autorização para isso' })
      }

      const offers = await Offer.paginate(
        {
          $and: [
            { estado: 'Pendente' },
            { recebedor: { $eq: undefined } }
          ]
        },
        {
          page,
          limit: 10,
          populate: 'doacao'
        }
      )

      return res.status(200).json(offers)
    } catch (err) {
      return res
        .status(500)
        .send(err.toString() || err.message)
    }
  },

  async store (req, res) {
    try {
      const userId = req.user_id
      const { donationId } = req.params

      const loggedUser = await User.findById(userId)

      const donation = await Donation.findOne({
        $and: [
          { _id: donationId },
          { dono: loggedUser._id }
        ]
      })

      if (!donation) {
        return res
          .status(401)
          .json({ message: 'Você não tem autorização para isso' })
      }

      const offer = await Offer.create({
        doacao: donation._id
      })

      await offer
        .populate('doacao')
        .execPopulate()

      return res.status(201).json(offer)
    } catch (err) {
      return res
        .status(500)
        .send(err.toString() || err.message)
    }
  }
}
