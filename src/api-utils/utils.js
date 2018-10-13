// import { request } from 'http'

// @flow

export const buildUrl = (urlTemplate: string): ((Object) => any) => (tokens: Object): string => {
  if (Object.keys(tokens).length === 0) return urlTemplate
  return Object.keys(tokens).reduce(
    (result: string, token: string): string => (result.replace(`:${token}`, tokens[token])),
    urlTemplate)
}

type FetchGETData = {
  method: string,
  headers: {
    Accept: string
  }
}

type FetchPOSTData = {
  method: string,
  body: string,
    headers: {
      'Accept': string,
      'Content-Type': string
    }
}

type FetchPUTData = {
  method: string,
  body: string,
  headers: {
    'Accept': string,
    'Content-Type': string
  }
}

export const getJSON = (fetch: ((string, FetchGETData) => any)): ((string) => any) => async (url: string): any => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    return response
  } catch (error) {
    const response = {
      status: 500
    }
    return response
  }
}

export const postJSON = (fetch: ((string, FetchPOSTData) => Object)): ((string, Object) => any) => async (url: string, body: Object): any => {
  try {
    console.log('URL', url)
    console.log('BODY', body)
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return response
  } catch (error) {
    // We can log the error (in production this might be logged in something like Kibana)
    console.log(error)
    // THen we set the response to 500 so we can handle it for the end user
    const response = {
      status: 500
    }
    return response
  }
}


export const putJSON = (fetch: ((string, FetchPUTData) => Object)): ((string, Object) => Object) => async (url: string, body: Object): Object => {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return response
}

export const extractJSON = async (response: Object): string | Object => {
  if (!response && typeof response.json !== 'function') return

  try {
    const json: Object = await response.json()
    return json
  } catch (error) {
    return error
  }
}
