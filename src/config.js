import os from 'os'
const host = 'localhost'
// const host = os.networkInterfaces()['Wi-Fi'].find(wifi => wifi.family === 'IPv4' && wifi.internal === false).address
const PORT = process.env.PORT || 4000
const PRIVATE_KEY = 'PRIVATE'

export {
	PRIVATE_KEY,
	host,
	PORT
}