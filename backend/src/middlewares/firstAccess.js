module.exports = {
  store(req, res, next) {
    const { firstName, lastName } = req.body;

    if (!firstName) {
      return res.status(400).json({ message: 'Informe seu nome' });
    }

    if (!lastName) {
      return res.status(400).json({ message: 'Informe seu sobrenome' });
    }

    const nome = `${firstName} ${lastName}`;
    req.validated = { nome };

    return next();
  },
};
