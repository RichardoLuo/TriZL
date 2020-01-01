let BookModel = require('../model/BookModel');

let mysql = require('mysql');
let configDb = require('../config/db');
//建立连接池
let pool = mysql.createPool(configDb.mysql);

/**
 * 查询所有书的所有信息
 * @param callback err bookList
 *
 */
exports.selectBookAll = function (callback) {
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(BookModel.sql().selectBookAll(), function(err, rows, fields) {
				connection.release();
				if (err)
					return callback(err);
				
				if(rows.length === 0)
					return callback("no book here");
				else{
					let bookList = [];
					for (let i = 0; i < rows.length; i++) {
						bookList.push(BookModel.change(rows[i]));
					}
					return callback(null,bookList);
				}
			});
		}
	});
};

/**
 * isbn
 * @param isbn
 * @param callback
 */
exports.selectBookISBN = function (isbn,callback) {
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(BookModel.sql().selectBookISBN(isbn), function(err, rows, fields) {
				connection.release();
				if (err)
					return callback(err);
				
				if(rows.length === 0)
					return callback("no book here");
				else{
					let bookList = [];
					for (let i = 0; i < rows.length; i++) {
						bookList.push(BookModel.change(rows[i]));
					}
					return callback(null,bookList);
				}
			});
		}
	});
};

/**
 * 按书名查询书所有信息
 * @param name
 * @param callback
 */
exports.selectBookName = function (name,callback) {
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(BookModel.sql().selectBookName(name), function(err, rows, fields) {
				connection.release();
				if (err)
					return callback(err);
				
				if(rows.length === 0)
					return callback("no book here");
				else{
					let bookList = [];
					for (let i = 0; i < rows.length; i++) {
						bookList.push(BookModel.change(rows[i]));
					}
					return callback(null,bookList);
				}
			});
		}
	});
};

/**
 * 按作者查询书所有信息
 * @param author
 * @param callback
 */
exports.selectBookAuthor = function (author,callback) {
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(BookModel.sql().selectBookAuthor(author), function(err, rows, fields) {
				connection.release();
				if (err)
					return callback(err);
				
				if(rows.length === 0)
					return callback("no book here");
				else{
					let bookList = [];
					for (let i = 0; i < rows.length; i++) {
						bookList.push(BookModel.change(rows[i]));
					}
					return callback(null,bookList);
				}
			});
		}
	});
};

/**
 * 新增书信息
 * @param isbn
 * @param name
 * @param author
 * @param releaseTime datetime
 * @param price float
 * @param repertory int
 * @param introduction
 * @param picture
 * @param soleNum int
 * @param callback
 */
exports.insertBook = function (isbn,name,author,releaseTime,price,repertory,introduction,picture,soleNum,callback) {
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(BookModel.sql().insertBook(isbn,name,author,releaseTime,price,repertory,introduction,picture,soleNum), function(err, rows, fields) {
				connection.release();
				if (err)
					return callback(err);
				
				callback(null);
			});
		}
	});
};

/**
 * 按isbn删除书信息
 * @param isbn
 * @param callback
 */
exports.deleteBook = function (isbn,callback) {
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(BookModel.sql().deleteBook(isbn), function(err, rows, fields) {
				connection.release();
				if (err)
					return callback(err);
				
				callback(null);
			});
		}
	});
};

/**
 * 按isbn更新书的信息
 * @param callback
 * @param isbn
 * @param name
 * @param author
 * @param releaseTime datetime
 * @param price float
 * @param repertory int
 * @param introduction
 * @param picture
 * @param soleNum int
 */
exports.updateBook = function (name,author,releaseTime,price,repertory,introduction,picture,soleNum,isbn,callback) {
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(BookModel.sql().updateBook(name,author,releaseTime,price,repertory,introduction,picture,soleNum,isbn), function(err, rows, fields) {
				connection.release();
				if (err)
					return callback(err);
				
				callback(null);
			});
		}
	});
};