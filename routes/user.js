let express = require('express');
let router = express.Router();

let UserController = require('../controller/UserController');

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       address:
 *         type: string
 *       phone:
 *         type: string
 */

/**
 * @swagger
 * /user/{name}:
 *   get:
 *     tags:
 *       - User
 *     description: 根据用户名获取用户信息
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: 用户名
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: ok
 *         schema:
 *           $ref: '#/definitions/User'
 *       500:
 *         description: error
 */
router.get('/:name',UserController.getUserByName);

/**
 * @swagger
 * /user/password:
 *   put:
 *     tags:
 *       - User
 *     description: 修改用户密码
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: 用户名
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: 密码
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: ok
 *       500:
 *         description: error
 */
router.put('/password',UserController.updatePassword);

module.exports = router;
