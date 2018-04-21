
// function something1(){

//   const response = await fetch(helloWorldURL)

//   if (error) logger.error('some error', { response.requestId })

// }

// function something2(){

//   const requestId = Logger.generateRequestId()

//   const responseFromEarth = await fetch(helloWorldURL, { requestId })
//   const responseFromMars = await fetch(helloMarsURL, { requestId })
//   // adds X-Request-Id header
// }


// // AuthApiClient.js
// function login(username, password, options){
//   const responseFromEarth = await fetch(helloWorldURL, { options.requestId })
//   const responseFromMars = await fetch(helloMarsURL, { options.requestId })
// }

// // UserApiClient.js
// function getUserProfile(userName, options){
//   const responseFromEarth = await fetch(helloWorldURL, { options.requestId })
//   const responseFromMars = await fetch(helloMarsURL, { options.requestId })
// }

// // routerHandler.js
// function doLogin (){
//   const requestId = Fetch.generateRequestId()

//   await login(username, password, { requestId })
//   const profile = await getUserProfile(userName, { requestId })

//   if (error) logger.error('some error', { requestId })  
// }


// // -----------------------------------------------------------------------


// // AuthApiClient.js
// function login(fetch, username, password){
//   const responseFromEarth = await fetch(helloWorldURL)
//   const responseFromMars = await fetch(helloMarsURL)
// }

// // UserApiClient.js
// function getUserProfile(fetch, userName){
//   const responseFromEarth = await fetch(helloWorldURL)
//   const responseFromMars = await fetch(helloMarsURL)
// }

// //--- Fetch.js
// import curry from 'lodash'

// const wrappedFetch = curry(
//   (requestId, uri, data) => {

//   // add the request
//   const data2 = { ...data }
//   data2.headers['X-Request-Id'] = requestId
//   data2.headers['X-Requested-With'] = 'XMLHttpRequest' // fake it for express.js

//   return fetch(uri, data2)  // returns the response promise
// })

// function generateRequestId() {
//   return someGUID
// }

// function Fetch () {
//   return wrappedFetch(generateRequestId()))
// }

// // --- routehandlerX.js

// function doLogin2 (){
//   const fetch = Fetch()

//   try {
//     await login(fetch, username, password)
//     const profileResponse = await getUserProfile(fetch, userName)
//   }
//   catch (error) {
//     if (error) logger.error('some error', { requestId: fetch.requestId })  
//   }
// }
