let express = require('express');
let router = express.Router();

let OrderController = require('../controller/OrderController');

/**
 * @swagger
 * /order:
 *   get:
 *     tags:
 *       - Order
 *     description: 根据orderID获取订单
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: orderID
 *         description: 订单号
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: ok
 */
router.get('/',OrderController.selectOrder);

/**
 * @swagger
 * /order:
 *   post:
 *     tags:
 *       - Order
 *     description: 创建订单
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description:
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             orderID:
 *               type: string
 *             ISBN:
 *               type: string
 *             perchaseNum:
 *               type: string
 *             customerName:
 *               type: string
 *             customerPhone:
 *               type: string
 *             customerAddr:
 *               type: string
 *     responses:
 *       200:
 *         description: ok
 */
router.post('/',OrderController.insertOrder);

/**
 * @swagger
 * /order:
 *   delete:
 *     tags:
 *       - Order
 *     description: 按订单号删除
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description:
 *         in: path
 *         required: true
 *         schema:
 *           properties:
 *             orderID:
 *               type: string
 *
 *     responses:
 *       200:
 *         description: ok
 */
router.delete('/',OrderController.deleteOrder);


/**
 * @swagger
 * /order:
 *   put:
 *     tags:
 *       - Order
 *     description: 按订单号更新状态
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description:
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             orderID:
 *               type: string
 *             state:
 *               type: string
 *     responses:
 *       200:
 *         description: ok
 */
router.put('/',OrderController.updateOrder);