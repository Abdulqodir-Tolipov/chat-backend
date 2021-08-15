import jwt from '../lib/jwt.js'
import fs from 'fs'
import path from 'path'

const GET  = (req, res) => {
	try {
		if(!req.headers.token) throw 'The token required!'
		let payload = jwt.verify(req.headers.token)
		let { userId } = payload
		let todos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'todos.json'), 'UTF-8')
		todos = todos ? JSON.parse(todos) : []

		// let userTodos = todos.filter( (todo) => todo.user_id == userId )

		// console.log(todos)

		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.write(
			JSON.stringify({
				status: 200,
				message: 'Success!',
				data: todos
			})
		)
		return res.end()

	} catch(error) {
		res.writeHead(500, { 'Content-Type': 'application/json' })
		res.write(
			JSON.stringify({
				status: 500,
				message: error
			})
		)
		return res.end()
	}
}

export {
	GET
}