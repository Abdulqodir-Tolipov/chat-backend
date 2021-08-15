import http from 'http'
import path from 'path'
import fs from 'fs'
import Express from './lib/express.js'
import { PORT, host } from './config.js'
import { REGISTER, LOGIN } from './modules/authController.js'
import { GET } from './modules/getController.js'
import { POST } from './modules/postController.js'
import { DELETE } from './modules/deleteController.js'
import { PUT } from './modules/putController.js'

const server = http.createServer( (req, res) => {
	res.setHeader('Access-Control-Allow-Origin','*')
	res.setHeader("Access-Control-Allow-Credentials", "true")
  	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
  	res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, token");
	if(req.method.toUpperCase() == 'OPTIONS') return res.end()

	const app = new Express(req, res)

	app.post('/login', LOGIN)
	app.post('/register', REGISTER)

	// todos
	app.get('/todos', GET)
	app.post('/todos', POST)
	app.delete('/todos', DELETE)
	app.put('/todos', PUT)
})

server.listen(PORT, () => console.log('http://' + host + ':' + PORT))


