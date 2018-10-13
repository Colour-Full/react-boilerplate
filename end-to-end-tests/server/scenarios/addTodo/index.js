import { routerMiddleware as Router } from 'spa-server'
import todos from 'e2e/data-mock'
import bodyparser from 'koa-bodyparser'

const addTodo = async (ctx, next) => {
  console.log('Request', ctx.request.body)
  const { body } = ctx.request
  const todo = {
    id: todos.length,
    text: body.text,
    completed: false
  }
  todos.push(todo)
  ctx.body = todo
}

const router = new Router()

router.post('/addTodo', bodyparser(), addTodo)

export default router
