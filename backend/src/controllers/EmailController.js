const NGO = require('../services/ngo-service');

module.exports = {
  async show(req, res, next) {
    const { id } = req.query;

    if (!id) {
      return next({
        status: 401,
        error: 'Unauthorized.',
        details: {
          authorization: 'Operation not permitted.',
        },
      });
    }

    try {
      const validatedNgo = await NGO.confirmMembership(id);

      return res
        .status(200)
        .send({
          ngo: validatedNgo,
          message: 'E-mail confirmado!',
        });
    } catch (err) {
      return next(err);
    }
  },
};
