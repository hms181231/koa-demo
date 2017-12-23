const Router = require('koa-router');
const Api = require('./api.js');

const routes = new Router();

routes.use('/api', Api.routes(), routes.allowedMethods());

module.exports = routes;
