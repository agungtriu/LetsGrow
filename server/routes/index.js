const commentRoutes = require('./commentRoute')
const plantRoutes = require('./plantRoute')
const postRoutes = require('./postRoute')
const storageRoutes = require('./storageRoute')
const userRoutes = require('./userRoute')

const routes = require('express').Router()

routes.get('/', (req, res) => {
  res.status(200).json({
    status: true,
    message: 'Lets Grow'
  })
})
routes.use('/users', userRoutes)
routes.use('/plants', plantRoutes)
routes.use('/storages', storageRoutes)
routes.use('/posts', postRoutes)
routes.use('/comments', commentRoutes)

module.exports = routes