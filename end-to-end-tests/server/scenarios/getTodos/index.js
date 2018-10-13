import { routerMiddleware as Router } from 'spa-server'
import todos from 'e2e/data-mock'

const getTodos = async (ctx, next) => {
  const { response } = ctx
  response.body = todos
}

const router = new Router()

router.get('/todos', getTodos)

export default router
