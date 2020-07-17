const router = require('express').Router();

router
  .use(require('./sessions'))
  .use(require('./users'))
  .use(require('./categories'))
  .use(require('./donations'))
  .use(require('./ngos'))
  .use(require('./email'));

module.exports = router;
