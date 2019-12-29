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
			res.json({user,err:err});
		}
		else{
			//失败
			res.json({err:err});
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
			res.json({err:err})
		}
		else{
			res.json({err:err})
		}
	})
};

/**
 * 根据用户名和密码进行登录
 * @param req
 * @param res
 * @param next
 */
exports.login = function (req, res, next) {
	let name = req.body.name;
	let password = req.body.password;

	if(req.session.name){
		//两个至少有一个就行
		res.json({err:name+"已经登录"});
		return;
	}
	//会话到期，即两者全部失效
	//登录
	UserProxy.checkPassword(name,password,function (err) {
		if(!err){
			//用户名密码一致
			req.session.regenerate(function(err) {
				if(err){
					return res.json({err:err});
				}
				else{
					req.session.name = name;
					
					res.send("登录成功")
				}
			});
			
		}
		else{
			//登录失败
			res.json({err:err})
		}
	})
};

/**
 * 退出登录
 * @param req
 * @param res
 * @param next
 */
exports.logout = function (req, res, next) {
	//todo
	req.session.destroy(function (err) {
		if(err){
			//失败
			res.json({err:err});
			return;
		}
		//成功
		res.json({err:null});
	})

};

/**
 * 注册用户
 * @param req
 * @param res
 * @param next
 */
exports.logup = function (req, res, next) {
	//todo
	
	//成功
	res.json({err:null})
};


