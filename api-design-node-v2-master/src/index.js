import http from 'http'
// // import { execute, subscribe } from 'graphql'
import { createServer } from 'http'

import app from './server'
// import schema from './schema'

//Wrap our express server instance (app) in http module via http.createServer()
const server = http.createServer(app)
// Make a copy / placeholder to store the express app
let currentApp = app

// As usual, open server on a local host port, with sucess message for console.
server.listen(3000, () => {
	console.log('Thunderbirds are go on localhost:3000 !!!')
})

// Hot module nonsense, that requres http server stuff rather than / in addition to express
if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
