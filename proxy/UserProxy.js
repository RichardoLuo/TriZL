let UserModel = require('../model/UserModel');

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