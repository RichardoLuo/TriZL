
// session redis require
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();

//签名secret
exports.secret = "granx";

exports.options = {
	name: 'session',                        // 这里是cookie的name，默认是connect.sid
	secret: this.secret,           // 建议使用 128 个字符的随机字符串
	resave: false,                          // 强制保存 session 即使它并没有变化,。
	saveUninitialized: false,
	store: new RedisStore({
		client: redisClient,
	}),
	cookie: {
		maxAge: 1000*60*60*24*7,                            //登录过期时间7天
	},
	rolling:false                             //在每次请求时强行设置 cookie，这将重置 cookie 过期时间
};

