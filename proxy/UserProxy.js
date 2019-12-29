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
				if (err)
					return callback(err);
				

				if(rows.length === 0)
					return callback("no this name");
				else{
					return callback(null,rows[0]);
				}
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
				if (err)
					return callback(err);
				

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
				if (err)
					return callback(err);
				
				if(rows.length === 0)
					callback("用户名或密码错误");
				else
					return callback(null);
			});
		}
	});

};

/**
 *
 * @param name
 * @param address
 * @param phone
 * @param mail
 * @param password
 * @param callback
 * @returns {*}
 */
exports.createUser = function (name,address,phone,mail,password,callback) {
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(UserModel.sql().createUser(name,password,mail,phone,address), function(err, rows, fields) {
				if (err)
					return callback(err);
				
				
				return callback(null);
			});
		}
	});
};

/**
 * 删除用户
 * @param name 用户名
 * @param callback
 * @returns {*}
 */
exports.deleteUser = function (name,callback) {
	if(!name){
		return callback("name is null")
	}
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(UserModel.sql().deleteUser(name), function(err, rows, fields) {
				if (err)
					return callback(err);
				
				return callback(null);
			});
		}
	});
};

/**
 * 更新用户信息
 * @param mail
 * @param phone
 * @param address
 * @param name
 * @param callback
 */
exports.updateUser = function (mail,phone,address,name,callback) {
	//database
	pool.getConnection((err,connection)=>{
		if(err){
			return callback(err);
		}
		else{
			connection.query(UserModel.sql().updateUser(mail,phone,address,name), function(err, rows, fields) {
				if (err)
					return callback(err);
				
				return callback(null);
			});
		}
	});
};