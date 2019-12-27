let UserProxy = require('../proxy/UserProxy');

/**
 * 根据用户名查询用户
 * @param req
 * @param res
 * @param next
 */
exports.getUserByName = function (req, res, next) {
	let userName = req.params.name;
	UserProxy.getUserByName(userName,function (err,user) {
		if(!err){
			res.json({user});
		}
		else{
			res.status(500);
			res.send(err);
		}
	});
};

/**
 * 使用用户名和新密码更新密码
 * @param req
 * @param res
 * @param next
 */
exports.updatePassword = function (req, res, next) {
	let userName = req.body.name;
	let userPwd = req.body.password;
	UserProxy.updatePassword(userName,userPwd,function (err) {
		if(!err){
			res.end();
		}
		else{
			res.status(500);
			res.send(err);
		}
	})
};