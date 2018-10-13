import http from 'http'
import { format } from 'url'
import urlJoin from 'url-join'
import { promisify } from 'util'

export class NotListeningError extends Error { }

export const _url = (server, pathOffset = '/') => (...segments) => {
  if (!server.listening) throw new NotListeningError('Server not listening')
  const { port } = server.address()

  const baseUrl = format({
    protocol: 'http',
    hostname: 'localhost',
    port: port,
    pathname: pathOffset
  })
  return urlJoin(baseUrl, ...segments)
}

export const _listen = listen => (preferredPort = 0) => listen(preferredPort)

export const createServer = (app, pathOffset = '/') => {
  const server = http.createServer(app.callback())

  return {
    close: promisify(server.close.bind(server)),
    listen: _listen(promisify(server.listen.bind(server))),
    url: _url(server, pathOffset)
  }
}
