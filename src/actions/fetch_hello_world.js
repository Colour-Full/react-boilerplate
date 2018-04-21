import HelloWorldApi from '../hello-world-api-client/index'

export const FETCH_HELLO_WORLD = 'FETCH_HELLO_WORLD'

export function fetchHelloWorld (data) {
  return {
    type: FETCH_HELLO_WORLD,
    data: data
  }
}

export function fetchData (url) {
  return function (dispatch) {
    return HelloWorldApi(url)
      .then((data) => {
        console.log('dispatching')
        dispatch(fetchHelloWorld(data))
      })
  }
}
