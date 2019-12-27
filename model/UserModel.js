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