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
          { categoria: { $in: loggedUser.interesses } }
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
  }
}
