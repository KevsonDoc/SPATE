const jwt = require('jsonwebtoken');

const knex = require('../models/connection');
const config = require('../config/config');

const checkField = require('../utils/index');

function getIdFromToken (authHeader) {
  try {
    const [, token] = authHeader.split(' ');
    const decoded = jwt.verify(token, config.APP_SECRET);

    return decoded.id;
  } catch (err) {
    return false;
  }
}
class PointsController {
  async create(request, response) {
    const { title, description, longitude, latitude, id_cases } = request.body;
    const authHeader = request.headers.authorization;

    const titleExisting = await checkField('tb_points', 'title', title);
    const descriptionExisting = await checkField('tb_points', 'description', description);

    if (titleExisting === true || descriptionExisting === true) {
      return response.status(409).send({ error: 'Conflict between fields !' });
    }

    if (!authHeader) {
      return response.status(401).json({
        message: 'Token is require',
      })
    }

    const id_user = getIdFromToken(authHeader);

    const point = {
      title,
      description,
      longitude,
      latitude, 
      id_cases,
      id_user
    };

    const trx = await knex.transaction();

    try {
      await trx('tb_points').insert(point);
      await trx.commit();

      return response.status(201).json({
        succes: 'Registered successfully',
        data: point,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register point' });
    }
  }
  async show(request, response) {
    const { cd_point } = request.params;

    const pointVerification = await checkField('tb_points', 'cd_point', cd_point);

    if (pointVerification === false) {
      return response.status(404).send({ error: 'Point not found' });
    }

    const point = await knex('tb_points').
      where('cd_point', cd_point).
      first().
      select('title', 'description', 'id_cases', 'latitude', 'longitude');

    return response.json({ point });
  }
  async delete(request, response) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return response.status(401).json({
        message: 'Token is require',
      })
    }

    const cd_user = getIdFromToken(authHeader);
    
    if (cd_user === false) {
      return response.status(401).json({
        message: 'Token invalid',
      })
    }

    try {
      await knex('tb_user')
        .where('cd_user', cd_user)
        .delete();

      return response.sendStatus(200).send({
        success: `Successfully deleting the user with id ${ cd_user }`,
      });
    } catch (err) {
      console.log(err);

      return response.status(400).send({ error: 'error when deleting the record' });
    }
  }
  async update(request, response) {
    const { name, cpf, password, email } = request.body;

    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return response.status(401).json({
        message: 'Token is require',
      })
    }

    const cd_user = getIdFromToken(authHeader);
    
    if (cd_user === false) {
      return response.status(401).json({
        message: 'Token invalid',
      })
    }

    try {
      await knex('tb_user')
        .update({
          name,
          email,
          password,
          cpf
        })
        .where({ cd_user });

      return response.status(200).send({ success: 'Updated successfully' });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to update'});
    }
  }
}

module.exports = PointsController;
