/**
 * 创建一个user对象
 * @param name
 * @param address
 * @param phone
 * @returns {{address: string, phone: string, name: string}}
 */
exports.build = function(name,address,phone){
	return {
		name: name,
		address: address,
		phone: phone,
	};
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
		return "SELECT Members.* FROM Members WHERE  MemberName = {0} AND PassWD= {1}".format(name,passWD);
	}
	
	/**
	 * 根据用户名查询
	 * @param name 用户名
	 */
	function selectMember(name) {
		return "SELECT Members.* FROM Members WHERE  MemberName = {0}".format(name);
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
	 * @param password string
	 * @param mail string
	 * @param phone string
	 * @param address string
	 * @returns {string}
	 */
	function createUser(name,password,mail,phone,address) {
		let md5 = require('md5');
		let pwd = md5(password);
		return "INSERT INTO Members (MemberName, PassWD, Mail, Phone, Address) VALUES ({0}, {1}, {2}, {3}, {4})".format(name,pwd,mail,phone,address);
	}
	
	return {
		selectMember: selectMember,
		selectMembersAll: selectMembersAll,
		checkPassword: checkPassword,
		createUser: createUser,
	}
};