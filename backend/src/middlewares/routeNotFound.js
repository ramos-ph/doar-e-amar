module.exports = (req, _res, next) => next({
  status: 404,
  error: 'Resource not found',
  details: {
    URL: `The resource ${req.originalUrl} does not exists.`,
  },
});
