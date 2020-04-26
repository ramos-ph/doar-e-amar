const router = require('express').Router();

router.get('/test', (req, res) => res.send('Hello, World! The API is working!'));

module.exports = router;
