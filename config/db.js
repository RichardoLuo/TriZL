let configIp = require('./ip');
module.exports = {
	mysql: {
		host: configIp.ip.database,
		user: 'root',
		password: '',
		database: 'bookstore',
		port: 3306
	},
	
	redis: {
		host: '127.0.0.1',
		port: '6379',
		db: 0,
		pass: '',
	}
};