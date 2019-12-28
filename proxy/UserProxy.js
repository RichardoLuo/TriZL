let UserModel = require('../model/UserModel');

let mysql = require('mysql');
let configDb = require('../config/db');
let pool = mysql.createPool(configDb.mysql);

// todo
// pool.getConnection((err,connection)=>{
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		connection.query('select * from book', function(err, rows, fields) {
// 			if (err) throw err;
// 			console.log(rows)
// 		});
// 	}
// });
pool.getConnection((err,connection)=>{
	if(err){
		console.log(err);
	}
	else{
		connection.query('select * from actor', function(err, rows, fields) {
			if (err) throw err;

		});
	}
});

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
	//todo database
	let user = UserModel.build(name,Math.random()*1000,Math.random()*1000);
	callback(null,user);
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
	//todo database
	callback(null)
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
	//todo database
	let flag = name === "zxc" && pwd === "zxc";
	//如果正确
	if(flag){
		callback(null);
	}
	//如果不正确
	else{
		callback("name or password is wrong");
	}
};