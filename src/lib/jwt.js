import pkg from 'jsonwebtoken'
import { PRIVATE_KEY } from '../config.js'
const { sign, verify } = pkg


export default {
	sign: (payload) => sign(payload, PRIVATE_KEY),
	verify: (token) => verify(token, PRIVATE_KEY),
}

