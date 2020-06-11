const {Router} = require('express')

const RegisterController = require('./controllers/RegisterController')
const LoginController = require('./controllers/LoginController')

const routes = new Router()

//register routes
routes.post('/signup', RegisterController.create)
routes.put('/verified/:id', RegisterController.isVerified)
routes.patch('/update/:id', RegisterController.update)

//login routes
routes.post('/login', LoginController.login)

module.exports = routes