const elasticsearch = require('elasticsearch')
const Transport = require('winston-transport')
// const util = require('util')

//
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
//
module.exports = class ElasticsearchTrans extends Transport {
  log (info, callback) {
    setImmediate(function () {
      const Transport = new elasticsearch.Transport({
        host: 'http://devdocker03:12202/'
      })
      Transport.request({
        method: 'PUT',
        path: '/json',
        body: info,
        headers: {
          'content-type': 'application/json'
        }
      })
    })

    // Perform the writing to the remote service
    callback()
  }
}
