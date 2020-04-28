module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: 'No token provided' });
  }

  const parts = token.split(' ');

  if (parts.length !== 2) {
    return res.status(401).send({ message: 'Malformed token' });
  }

  const [scheme, key] = parts;

  // Magia. Não toque.
  if (!/^Basic$/i.test(scheme)) {
    return res.status(401).send({ message: 'Invalid token scheme' });
  }

  req.locals = { key };

  return next();
};
