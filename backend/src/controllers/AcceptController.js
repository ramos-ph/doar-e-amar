const User = require('../models/User')
const Donation = require('../models/Donation')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user_id

      const loggedUser = await User.findById(userId)

      if (loggedUser.tipo !== 'Organização') {
        return res
          .status(400)
          .json({
            message: 'Você não tem autorização para isso'
          })
      }

      const donations = await Donation.find({
        $and: [
          { _id: { $in: loggedUser.doacoesRecebidas } }
        ]
      })

      return res
        .status(200)
        .json(donations)
    } catch (err) {
      return res
        .status(500)
        .send(err.toString() || err.message)
    }
  },

  async store (req, res) {
    try {
      const userId = req.user_id
      const donationId = req.params

      const loggedUser = await User.findById(userId)

      if (loggedUser.tipo !== 'Organização') {
        return res
          .status(400)
          .json({
            message: 'Você não tem autorização para isso'
          })
      }

      loggedUser.doacoesRecebidas.push(donationId)
      await loggedUser.save()

      return res
        .status(200)
        .json(loggedUser)
    } catch (err) {
      return res
        .status(500)
        .send(err.toString() || err.message)
    }
  }
}
