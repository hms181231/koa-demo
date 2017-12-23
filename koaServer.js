const Koa = require('koa');
const path = require('path');
const compress = require('koa-compress');
const routers = require('./router/router.js');
const logger = require('koa-logger');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const Static = require('koa-static');
const cors = require('@koa/cors');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const config = require('./config/config.js');
require('./mongodb/mongodb.js');

const app = new Koa();

app.keys = ['mongodbLogin'];

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
  }
});

app.use(cors());

app.use(logger());

app.use(session(app));

app.use(
  compress({
    flush: require('zlib').Z_SYNC_FLUSH
  })
);

app.use(conditional());

app.use(etag());

app.use(bodyParser());

app.use(Static(__dirname));

app.use(routers.routes()).use(routers.allowedMethods());

app.listen(config.port);
