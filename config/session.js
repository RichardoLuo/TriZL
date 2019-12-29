
// session redis require
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();

exports.options = {
	name: 'session',                        // 这里是cookie的name，默认是connect.sid
	secret: "granx",           // 建议使用 128 个字符的随机字符串
	resave: false,                          // 强制保存 session 即使它并没有变化,。
	saveUninitialized: false,
	store: new RedisStore({
		client: redisClient,
	}),
	cookie: {
		maxAge: 10*1000,                            //过期时间ms
	},
	rolling:false                             //在每次请求时强行设置 cookie，这将重置 cookie 过期时间
};

