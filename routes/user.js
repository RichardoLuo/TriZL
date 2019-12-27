var express = require('express');
var router = express.Router();


/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       age:
 *         type: integer
 */

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *       - User
 *     description: get a user info
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: user's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: ok
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get('/:id', function(req, res, next) {
  res.json(req.params.id);
});

module.exports = router;
