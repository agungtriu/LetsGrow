const commentRoutes = require('./commentRoute')
const plantRoutes = require('./plantRoute')
const stepRoutes = require('./stepRoute')
const tutorialRoutes = require('./tutorialRoute')
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
routes.use('/tutorials', tutorialRoutes)
routes.use('/steps', stepRoutes)
routes.use('/comments', commentRoutes)

module.exports = routes