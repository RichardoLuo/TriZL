// swagger init
let swaggerDefinition = {
	info: {
		title: 'Node Swagger API',
		version: '1.0.0',
		description: 'book 接口文档',
	},
	// host: 'localhost:3000',
	host: '10.203.197.66:3000',
	basePath: '/',
};

// options for the swagger docs
exports.swaggerOptions = {
	// import swaggerDefinitions
	swaggerDefinition: swaggerDefinition,
	// path to the API docs
	apis: ['./routes/*.js'],
};
