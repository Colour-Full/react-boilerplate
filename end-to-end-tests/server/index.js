import Logger from 'koa-logger'

import App from 'e2e/e2e-app'
import { createServer } from 'e2e/server-helpers'
import getTodo from './scenarios/getTodos'
import addTodo from './scenarios/addTodo'

const port = 9001

const app = App()
app.use(Logger())
app.use(getTodo.routes())
app.use(addTodo.routes())

createServer(app).listen(port)
console.log('Fake candidate service listening on', port)
