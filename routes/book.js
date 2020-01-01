let express = require('express');
let router = express.Router();

let BookController = require('../controller/BookController');

/**
 * 按照不同的查找方式分配
 * @param req
 * @param res
 * @param next
 */
let selectFilter = function(req,res,next){
	let method = req.params.method;
	if(method === "all"){
		BookController.selectBookAll(req,res,next);
	}else if (method === "ISBN"){
		BookController.selectBookISBN(req,res,next);
	}else if (method === "name"){
		BookController.selectBookName(req,res,next);
	}else if (method === "author"){
		BookController.selectBookAuthor(req,res,next);
	}else{
		//bug fix no answer
		res.json({err:"no this method"});
	}
};
/**
 * @swagger
 * /book/{method}/{id}:
 *   get:
 *     tags:
 *       - Book
 *     description: 查询索引下的书的所有信息
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: method
 *         description: method can be all, ISBN, name, author, 对应不同的查找方式
 *         in: path
 *         required: true
 *       - name: id
 *         description: 索引id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: ok
 *
 */
router.get('/:method/:id',selectFilter);
router.get('/:method',selectFilter);

/**
 * @swagger
 * /book:
 *   post:
 *     tags:
 *       - Book
 *     description: 新增书信息
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: 书信息
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             ISBN:
 *               type: string
 *             name:
 *               type: string
 *             author:
 *               type: string
 *             releaseTime:
 *               type: string
 *             price:
 *               type: string
 *             repertory:
 *               type: string
 *             introduction:
 *               type: string
 *             picture:
 *               type: string
 *             soleNum:
 *               type: string
 *     responses:
 *       200:
 *         description: ok
 */
router.post('/',BookController.insertBook);


/**
 * @swagger
 * /book:
 *   delete:
 *     tags:
 *       - Book
 *     description: 按ISBN删除书信息
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description:
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             ISBN:
 *               type: string
 *
 *     responses:
 *       200:
 *         description: ok
 */
router.delete('/',BookController.deleteBook);


/**
 * @swagger
 * /book:
 *   put:
 *     tags:
 *       - Book
 *     description: 按ISBN更新书的信息
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: 书信息
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             ISBN:
 *               type: string
 *             name:
 *               type: string
 *             author:
 *               type: string
 *             releaseTime:
 *               type: string
 *             price:
 *               type: string
 *             repertory:
 *               type: string
 *             introduction:
 *               type: string
 *             picture:
 *               type: string
 *             soleNum:
 *               type: string
 *     responses:
 *       200:
 *         description: ok
 */
router.put('/',BookController.updateBook);

module.exports = router;