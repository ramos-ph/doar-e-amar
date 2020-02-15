const User = require('../models/User')
const Donation = require('../models/Donation')
const Offer = require('../models/Offer')

module.exports = {
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
