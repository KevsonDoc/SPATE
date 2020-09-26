const jwt = require('jsonwebtoken');
const config = require('../config/config');

class Auth {
  async auth(request, response, next){
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return response.status(401).json({
        message: 'Token is require',
      })
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = jwt.verify(token, config.APP_SECRET);

      next();
    } catch (err) {
      return response.status(401).json({
        message: 'Token invalid',
      })
    }
  }
}

module.exports = Auth;
