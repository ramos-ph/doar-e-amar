const User = require('../models/User')

module.exports = {
  async store (req, res) {
    try {
      const userId = req.user_id
      const { nome } = req.validated

      const loggedUser = await User.findById(userId)

      if (loggedUser.nome) {
        return res
          .status(400)
          .json({ message: 'Este usuário já tem um nome' })
      }

      loggedUser.nome = nome
      loggedUser.avatar = req.file.filename
      await loggedUser.save()

      return res.status(200).json(loggedUser)
    } catch (err) {
      return res
        .status(500)
        .json(err.toString() || err.message)
    }
  }
}
