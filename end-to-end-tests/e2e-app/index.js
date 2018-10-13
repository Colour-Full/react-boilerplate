import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import expectedCalls, { logCallsMiddleware, setupCallLog } from 'e2e/expected-calls'


const App = () => {
  const app = new Koa()

  setupCallLog(app)

  // TODO ↓ consider middleware to specifically include if needed
  app.use(bodyparser())
  app.use(logCallsMiddleware)
  app.use(async (ctx, next) => {
    ctx.response.set('Access-Control-Allow-Origin', '*')
    ctx.response.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    await next()
  })

  app.use(expectedCalls.routes())
  app.use(expectedCalls.allowedMethods())
  app.use(bodyparser({
    extendTypes: {
      json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string
    },
    enableTypes: ['text', 'json', 'form']
  }))
  return app
}

export default App
