const User = require('../models/User')
const Offer = require('../models/Offer')

module.exports = {
  async store (req, res) {
    try {
      const userId = req.user_id
      const { offerId } = req.params

      const loggedUser = await User.findById(userId)

      if (loggedUser.tipo !== 'Pessoa jurídica') {
        return res
          .status(401)
          .json({ message: 'Você não tem autorização para isso' })
      }

      const offer = await Offer.findById(offerId).select('+recebedor')

      if (offer.recebedor) {
        return res
          .status(400)
          .json({ message: 'Essa oferta já foi aceita' })
      }

      offer.estado = 'Aceito'
      offer.recebido = false
      offer.recebedor = loggedUser._id
      await offer.save()

      // TODO: emitir uma mensagem pelo socket.io

      await offer
        .populate('recebedor')
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
