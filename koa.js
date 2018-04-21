'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaWebpack = require('koa-webpack');

var _koaWebpack2 = _interopRequireDefault(_koaWebpack);

var _webpack = require('./webpack.dev');

var _webpack2 = _interopRequireDefault(_webpack);

var _rulsoftServerLogger = require('rulsoft-server-logger');

var _rulsoftServerLogger2 = _interopRequireDefault(_rulsoftServerLogger);

var _spaServer = require('spa-server');

var _spaServer2 = _interopRequireDefault(_spaServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dotenv.config()

// export const htmlBody = `
//     <!doctype html>
//         <html>
//         <head>
//           <title>Server React App</title>
//         </head>

//         <body>
//           <div id="root">

//           </div>
//         </body>
//         <script type="text/javascript" src="./dist/bundle.js"></script>
//       </html>
//     `

// const httpPort = 9000
// const app = new Koa()
// const router = new Router()

// const serviceName = 'rulsoft-front-end'
// const loggingMode = process.env.LOGGING_MODE
// const logstashHost = process.env.LOGSTASH_HOST
// const appLogger = createLogger(serviceName, loggingMode, 'info', {logstashHost: logstashHost, serializers: {ctx: ctxSerializer}})

// // Use webpack hot module middleware in development
// if (process.env.NODE_ENV === 'development') {
// // Adding Webpack middleware
//   app.use(webpackHmrMidleware({
//     config: webpackConfig
//   }))
// } else {
//   // Adding router
//   app.use(router.routes())

//   // Routes with params
//   router.get('/users/:id', (ctx, next) => {
//     ctx.body = 'Hello User ' + ctx.params.id
//   })

//   router.get('/', async (ctx, next) => {
//     appLogger.info({ctx: ctx}, 'Hi')
//     ctx.type = 'html'
//     ctx.body = htmlBody
//     await (next)
//   })
// }
// app.listen(httpPort)

var httpPort = 9000; // import 'babel-polyfill'


var app = (0, _spaServer2.default)({
  hotModuleReplacement: false,
  webpackConfig: _webpack2.default
});

// Adding router
app.use(_spaServer.router.routes());

// Routes with params
_spaServer.router.get('/users/:id', function (ctx, next) {
  ctx.body = 'Hello User ' + ctx.params.id;
});

// Routes with params
_spaServer.router.get('/users/:id', function (ctx, next) {
  ctx.body = 'Hello User ' + ctx.params.id;
});

app.listen(httpPort);

console.log('SPA is running on port 9000 ');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(httpPort, 'httpPort', 'server/koa.js');

  __REACT_HOT_LOADER__.register(app, 'app', 'server/koa.js');
}();

;