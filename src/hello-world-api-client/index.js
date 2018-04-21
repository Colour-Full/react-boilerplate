// import { curry } from 'lodash'
import fetchMock from 'fetch-mock'
import JSON from './JSON.js'

fetchMock.get('http://example.com/helloWorld', JSON).spy()

const getHelloWorld = async (helloWorldURL, stringID) => {
  const response = await fetch(helloWorldURL)
  const data = await response.json()
  return data
}
fetchMock.reset()
// the 'public' API for candidate
export default getHelloWorld
