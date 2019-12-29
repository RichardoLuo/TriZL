let BookProxy = require('../proxy/BookProxy');


/**
 * 查询所有书的所有信息
 * @param req
 * @param res
 * @param next
 */
exports.selectBookAll = function (req, res, next) {
	BookProxy.selectBookAll(function (err,bookList) {
		if(err){
			return res.json({err:err});
		}
		else{
			return res.json({err:err,bookList:bookList});
		}
	});
};

/**
 * 按ISBN查询书所有信息
 * @param req
 * @param res
 * @param next
 */
exports.selectBookISBN = function (req, res, next) {
	let id = req.params.id;
	BookProxy.selectBookISBN(id,function (err,bookList) {
		if(err){
			return res.json({err:err});
		}
		else{
			return res.json({err:err,bookList:bookList});
		}
	});
};

/**
 * 按书名查询书所有信息
 * @param req
 * @param res
 * @param next
 */
exports.selectBookName = function (req, res, next) {
	let id = req.params.id;
	BookProxy.selectBookName(id,function (err,bookList) {
		if(err){
			return res.json({err:err});

		}
		else{
			return res.json({err:err,bookList:bookList});

		}
	});
};

/**
 * 按作者查询书所有信息
 * @param req
 * @param res
 * @param next
 */
exports.selectBookAuthor = function (req, res, next) {
	let id = req.params.id;
	BookProxy.selectBookAuthor(id,function (err,bookList) {
		if(err){
			return res.json({err:err});

		}
		else{
			return res.json({err:err,bookList:bookList});

		}
	});
};

/**
 * 新增书信息
 * @param req
 * @param res
 * @param next
 */
exports.insertBook = function (req, res, next) {
	let ISBN = req.body.ISBN;
	let name = req.body.name;
	let author = req.body.author;
	let releaseTime = req.body.releaseTime;
	let price = req.body.price;
	let repertory = req.body.repertory;
	let introduction = req.body.introduction;
	let picture = req.body.picture;
	let soleNum = req.body.soleNum;
	BookProxy.insertBook(ISBN,name,author,releaseTime,price,repertory,introduction,picture,soleNum,function (err) {
		if(err){
			return res.json({err:err});
		}
		else{
			return res.json({err:err});
		}
	});
};

/**
 * 按ISBN删除书信息
 * @param req
 * @param res
 * @param next
 */
exports.deleteBook = function (req, res, next) {
	let isbn = req.body.ISBN;
	BookProxy.deleteBook(isbn,function (err) {
		if(err){
			return res.json({err:err});
		}
		else{
			return res.json({err:err});
		}
	});
};

/**
 * 按ISBN更新书的信息
 * @param req
 * @param res
 * @param next
 */
exports.updateBook = function (req, res, next) {
	let ISBN = req.body.ISBN;
	let name = req.body.name;
	let author = req.body.author;
	let releaseTime = req.body.releaseTime;
	let price = req.body.price;
	let repertory = req.body.repertory;
	let introduction = req.body.introduction;
	let picture = req.body.picture;
	let soleNum = req.body.soleNum;
	BookProxy.updateBook(name,author,releaseTime,price,repertory,introduction,picture,soleNum,ISBN,function (err) {
		if(err){
			return res.json({err:err});
		}
		else{
			return res.json({err:err});
		}
	});
};
