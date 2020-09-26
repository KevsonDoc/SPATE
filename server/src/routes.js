const { Router } = require('express');

const routes = Router();

const UserController = require('./controllers/UserController');
const Auth = require('./middlewares/auth');

const auth = new Auth(); 
const userController = new UserController();

routes.post('/login', userController.login);

routes.post('/user', userController.create);
routes.get('/user/:cd_user', userController.show);
routes.delete('/user', auth.auth, userController.delete);
routes.put('/user', auth.auth, userController.update);

module.exports = routes;
