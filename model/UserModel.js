/**
 * 创建一个user对象
 * @param name
 * @param address
 * @param phone
 * @param mail
 * @returns {{address: string, phone: string, name: string}}
 */
exports.build = function(name,address,phone,mail){
	return {
		name: name,
		address: address,
		phone: phone,
		mail: mail,
	};
};

/**
 * 将members tuple 转成 user
 * @param membersTuple
 * @returns {{address: *, mail: *, phone: *, name: *}}
 */
exports.change = function(membersTuple){
	return {
		name: membersTuple.MemberName,
		address: membersTuple.Address,
		phone: membersTuple.Phone,
		mail: membersTuple.Mail,
	}
};

exports.sql = function () {
	/**
	 * 根据用户名密码查询
	 * @param name string 用户名
	 * @param password 未加密的密码
	 */
	function checkPassword(name,password) {
		//密码加密
		let md5 = require('md5');
		let passWD = md5(password);
		return "SELECT Members.* FROM Members WHERE  MemberName = '{0}' AND PassWD= '{1}'".format(name,passWD);
	}
	
	/**
	 * 根据用户名查询
	 * @param name 用户名
	 */
	function selectMember(name) {
		return "SELECT Members.* FROM Members WHERE  MemberName = '{0}'".format(name);
	}
	
	/**
	 * 查询所有用户
	 * @returns {string}
	 */
	function selectMembersAll() {
		return "SELECT Members.* FROM Members";
	}
	
	/**
	 * 创建用户
	 * @param name string
	 * @param password string 未加密的password
	 * @param mail string
	 * @param phone string
	 * @param address string
	 * @returns {string}
	 */
	function createUser(name,password,mail,phone,address) {
		let md5 = require('md5');
		let pwd = md5(password);
		return "INSERT INTO Members (MemberName, PassWD, Mail, Phone, Address) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}')".format(name,pwd,mail,phone,address);
	}
	
	/**
	 * 根据用户名删除用户
	 * @param name
	 * @returns {string | ServerResponse | *}
	 */
	function deleteUser(name) {
		return "DELETE FROM Members WHERE (MemberName = '{0}')".format(name);
	}
	
	/**
	 * 根据新的用户信息 更新用户
	 * @param mail
	 * @param phone
	 * @param address
	 * @param name
	 */
	function updateUser(mail,phone,address,name) {
		return "UPDATE Members SET Mail='{0}', Phone = '{1}', Address = '{2}' WHERE MemberName = '{3}'".format(mail,phone,address,name);
	}
	
	/**
	 *
	 * @param name 用户名
	 * @param password 新的密码，未加密
	 * @returns {string}
	 */
	function changePassword(name,password) {
		let md5 = require('md5');
		let pwd = md5(password);
		return "UPDATE Members SET PassWD='{0}' WHERE MemberName = '{1}'".format(pwd,name);
	}
	return {
		selectMember: selectMember,
		selectMembersAll: selectMembersAll,
		checkPassword: checkPassword,
		createUser: createUser,
		deleteUser: deleteUser,
		updateUser: updateUser,
		changePassword: changePassword,
	}
};