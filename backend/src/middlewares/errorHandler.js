module.exports = (_req, res, _next, err) => {
  const { status, message } = err;

  return res.status(status || 500).send(message);
};
