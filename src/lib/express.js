export default class {
	constructor (req, res) {
		this.req = req
		this.res = res

		this.res.json = function (jsonObject) {
			this.writeHead(200, { 'Content-Type': 'application/json' })
			this.write( jsonObject )
			return this.end()
		}
	}

	get (path, callback) {
		if(this.req.url.toLowerCase() === path.toLowerCase() && this.req.method.toUpperCase() === 'GET') {
			return callback(this.req, this.res)
		} 
		// else if( this.req.method.toUpperCase() === 'GET' ) {
		// 	return this.res.end('Cannot get ' + this.req.url)
		// }
	}

	post (path, callback) {
		if(this.req.url.toLowerCase() === path.toLowerCase() && this.req.method.toUpperCase() === 'POST') {
			return callback(this.req, this.res)
		} 
		// else if( this.req.method.toUpperCase() === 'POST' ) {
		// 	return this.res.end('Cannot post ' + this.req.url)
		// }
	}

	put (path, callback) {
		if(this.req.url.toLowerCase() === path.toLowerCase() && this.req.method.toUpperCase() === 'PUT') {
			return callback(this.req, this.res)
		} 
		// else if( this.req.method.toUpperCase() === 'PUT' ) {
		// 	return this.res.end('Cannot put ' + this.req.url)
		// }
	}

	delete (path, callback) {
		if(this.req.url.toLowerCase() === path.toLowerCase() && this.req.method.toUpperCase() === 'DELETE') {
			return callback(this.req, this.res)
		} 
		// else if( this.req.method.toUpperCase() === 'DELETE' ) {
		// 	return this.res.end('Cannot delete ' + this.req.url)
		// }
	}
}

