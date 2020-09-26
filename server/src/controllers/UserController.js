const jwt = require('jsonwebtoken');
const md5 = require('md5');

const knex = require('../models/connection');
const config = require('../config/config');

const Auth = require('../middlewares/auth');

class UserController {
  async login(request, response){
    const { email, password } = request.body;

    const student = await knex('tb_user').
      where('email', email).
      first().
      select();

    if (student) {
      if (password === student.password) {
        const token = jwt.sign({ id: student.cd_user }, config.APP_SECRET, {
          expiresIn: '1d'
        });
        const data = {
          name: student.name,
          email: student.email,
          cpf: student.cpf, 
          id: student.cd_user,
          token
        };
        return response.status(200).json(data);
      } else {
        return response.status(404).json({
          message: 'User not found',
        });
      }
    } else {
      return response.status(404).json({
        message: 'User not found',
      });
    }
  }

  async create(request, response) {
    const { name, email, password, cpf } = request.body;

    const encryptedPassword = md5(password + config.md5HashKey);

    const user = {
      name,
      email,
      password: encryptedPassword,
      cpf,
    };

    const trx = await knex.transaction();

    try {
      await trx('tb_user').insert(user);
      await trx.commit();

      return response.status(201).json({
        succes: 'Registered successfully',
        data: user,
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' });
    }
  }
  async show(request, response) {
    const { cd_user } = request.params;

    const user = await knex('tb_user').
      where('cd_user', cd_user).
      first().
      select('name', 'email', 'cpf');

    return response.json({ user });
  }
  async delete(request, response) {
    const { cd_user } = request.params;

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

    const [, token] = authHeader.split(' ');

    try {
      const decoded = jwt.verify(token, config.APP_SECRET);

      var cd_user = decoded.id;
    } catch (err) {
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

module.exports = UserController;
