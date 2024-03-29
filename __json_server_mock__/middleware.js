import { create, router as _router, defaults } from 'json-server'
const server = create()
const router = _router('db.json')
const middlewares = defaults()

server.use(middlewares)
server.use((req, res, next) => {
  next() // continue to JSON Server router
})
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
