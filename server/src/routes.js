const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => {
  response.status(200).json({ success: 'success' });
});

module.exports = routes;
