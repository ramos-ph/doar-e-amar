module.exports = (err, _req, res, _next) => {
  const { status, ...error } = err;

  res.status(status || 500).send(error);
};
