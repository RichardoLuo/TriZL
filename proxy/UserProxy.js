let UserModel = require('../model/UserModel');

let mysql = require('mysql');
let configDb = require('../config/db');
//建立连接池
let pool = mysql.createPool(configDb.mysql);


/**
 * 根据用户名查询用户
 * callback:
 * - err, 数据库异常
 * - User, 用户
 * @param name 用户名
 * @param callback 回调函数
 */
exports.getUserByName = function (name,callback) {
	if (!name || name.length === 0) {
		return callback("name is null or the length is 0", []);
	}
	
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(UserModel.sql().selectMember(name), function(err, rows, fields) {
				if (err) throw err;
				
				//todo
				return callback(null);
			});
		}
	});
	
	
};

/**
 * 更新密码
 * callback:
 * - err
 * @param name
 * @param pwd
 * @param callback
 * @returns {*}
 */
exports.updatePassword = function (name,pwd,callback) {
	if (!name || name.length === 0) {
		return callback("name is null or the length is 0");
	}
	if (!pwd || pwd.length === 0) {
		return callback("pwd is null or the length is 0");
	}
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(UserModel.sql().changePassword(name,pwd), function(err, rows, fields) {
				if (err) throw err;
				
				//todo
				return callback(null);
			});
		}
	});

};

/**
 * 判断密码
 * callback:
 * - err
 * @param name 用户名
 * @param pwd 密码
 * @param callback
 * @returns {*}
 */
exports.checkPassword = function (name,pwd,callback) {
	if (!name || name.length === 0) {
		return callback("name is null or the length is 0");
	}
	if (!pwd || pwd.length === 0) {
		return callback("pwd is null or the length is 0");
	}
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(UserModel.sql().checkPassword(name,pwd), function(err, rows, fields) {
				if (err) throw err;
				
				//todo
				callback("name or password is wrong");
				return callback(null);
			});
		}
	});

};