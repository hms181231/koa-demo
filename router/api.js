const Router = require('koa-router');
const Login = require('./controller/login.js');
const GetTable = require('./controller/getTable.js');

const routes = new Router();

routes.post('/login', Login).get('/getTable', GetTable);

module.exports = routes;
