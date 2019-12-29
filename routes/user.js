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
 *       mail:
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
 *       - name: body
 *         description: 用户名
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             name:
 *               type: string
 *             password:
 *               type: string
 *
 *     responses:
 *       200:
 *         description: ok
 */
router.put('/password',UserController.updatePassword);

/**
 * @swagger
 * /user/session:
 *   post:
 *     tags:
 *       - User
 *     description: 用户登录
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: 用户名以及密码
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             name:
 *               type: string
 *             password:
 *               type: string
 *
 *     responses:
 *       200:
 *         description: ok
 */
router.post('/session',UserController.login);

/**
 * @swagger
 * /user/session:
 *   delete:
 *     tags:
 *       - User
 *     description: 退出登录
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: ok
 */
router.delete('/session',UserController.logout);

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - User
 *     description: 注册用户
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: 用户信息和密码
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             name:
 *               type: string
 *             address:
 *               type: string
 *             phone:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: ok
 */
router.post('/',UserController.logup);

module.exports = router;
