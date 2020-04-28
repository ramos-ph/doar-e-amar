module.exports = (_req, _res, next) => {
  const err = new Error('Route not found');

  err.status = 404;

  return next(err);
};
