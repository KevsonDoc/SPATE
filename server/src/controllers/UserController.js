const md5 = require('md5');

const knex = require('../models/connection');
const config = require('../config/config');

class UserController {
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
}

module.exports = UserController;
