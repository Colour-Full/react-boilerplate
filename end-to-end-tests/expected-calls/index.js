import { routerMiddleware as Router } from 'spa-server'


const prefix = '/_expected-calls'

const whiteListRequest = request => {
  const { url, method, header, body } = request
  const { accept, 'content-length': contentLength, 'content-type': contentType } = header
  return {
    url,
    method,
    header: {
      accept,
      contentLength,
      contentType
    },
    body
  }
}

const whiteListResponse = response => {
  const { status, message, header } = response
  const { 'content-length': contentLength, 'content-type': contentType } = header
  return {
    status,
    message,
    header: {
      contentLength,
      contentType
    }
  }
}

const logCall = (callLog, request, response) => {
  if (request.url === prefix) return
  if (request.method === 'OPTIONS') return

  return callLog.push({
    request: whiteListRequest(request),
    response: whiteListResponse(response)
  })
}

export const setupCallLog = app => {
  app.context.callLog = []
}

export const logCallsMiddleware = async (ctx, next) => {
  await next()

  ctx.callLog = ctx.callLog || []
  logCall(ctx.callLog, ctx.request, ctx.response)
}

export const getExpectedCalls = async (ctx, next) => {
  const { response } = ctx
  response.status = 200
  response.body = ctx.callLog
}

export const emptyCallLog = async (ctx, next) => {
  const { response } = ctx
  ctx.callLog = []
  response.status = 200
  response.body = {}
}

const router = new Router({ prefix })

router
  .get('/', getExpectedCalls)
  .delete('/', emptyCallLog)

export default router
