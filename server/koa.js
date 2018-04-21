// import 'babel-polyfill'
import dotenv from 'dotenv'
import Koa from 'koa'
import Router from 'koa-router'
import webpackHmrMidleware from 'koa-webpack'
import webpackConfig from './webpack.dev'
import createLogger, {ctxSerializer} from 'rulsoft-server-logger'
import SpaServer, {router} from 'spa-server'

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

const httpPort = 9000

const app = SpaServer({
  hotModuleReplacement: false,
  webpackConfig: webpackConfig
})

// Adding router
app.use(router.routes())

// Routes with params
router.get('/users/:id', (ctx, next) => {
  ctx.body = 'Hello User ' + ctx.params.id
})

// Routes with params
router.get('/users/:id', (ctx, next) => {
  ctx.body = 'Hello User ' + ctx.params.id
})

app.listen(httpPort)

console.log('SPA is running on port 9000 ')
