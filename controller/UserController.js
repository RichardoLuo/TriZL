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
			//返回用户
			res.json({user});
		}
		else{
			//失败
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
	let name = req.body.name;
	let password = req.body.password;
	UserProxy.updatePassword(name,password,function (err) {
		if(!err){
			//修改成功
			res.end();
		}
		else{
			//修改失败
			res.status(500);
			res.send(err);
		}
	})
};

/**
 * 根据用户名和密码进行登录
 * @param req
 * @param res
 * @param next
 */
exports.checkPassword = function (req, res, next) {
	let name = req.body.name;
	let password = req.body.password;
	UserProxy.checkPassword(name,password,function (err) {
		if(!err){
			//登录成功
			
			//todo 登录态保存
			res.end();
		}
		else{
			//登录失败
			res.status(500);
			res.send(err);
		}
	})
};