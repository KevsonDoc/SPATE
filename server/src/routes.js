const { Router } = require('express');

const routes = Router();

const UserController = require('./controllers/UserController');
const CasesController = require('./controllers/CasesController');
const PointsController = require('./controllers/PointsController');

const Auth = require('./middlewares/auth');

const auth = new Auth(); 

const userController = new UserController();
const casesController = new CasesController();
const pointsController = new PointsController();

routes.post('/login', userController.login);

routes.post('/user', userController.create);
routes.get('/user/:cd_user', userController.show);
routes.delete('/user', auth.auth, userController.delete);
routes.put('/user', auth.auth, userController.update);

routes.post('/cases', auth.auth, casesController.create);
routes.delete('/cases/:cd_cases', auth.auth, casesController.delete);
routes.get('/cases', casesController.index);

routes.get('/point', pointsController.index);
routes.post('/point', auth.auth, pointsController.create);
routes.get('/point/:cd_point', pointsController.show);
routes.delete('/point/:cd_point', auth.auth, pointsController.delete);

module.exports = routes;
