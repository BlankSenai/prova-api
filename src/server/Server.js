import e from 'express'
import cors from 'cors'
import router from './Routes.js'

const server = e()

server.use(cors())
server.use(e.json())
server.use(router)

export default server