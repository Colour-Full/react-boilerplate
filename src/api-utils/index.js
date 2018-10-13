import fetch from 'cross-fetch'

import {
  getJSON,
  postJSON
} from './utils'

export { buildUrl, extractJSON } from './utils'

const boundGetJSON = getJSON(fetch)
const boundPostJSON = postJSON(fetch)

export {
  boundGetJSON as getJSON,
  boundPostJSON as postJSON
}
