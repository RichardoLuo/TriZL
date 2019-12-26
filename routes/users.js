var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       path:
 *         type: string
 */
router.get('/fuck', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/fuck', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
