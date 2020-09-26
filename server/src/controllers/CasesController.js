const jwt = require('jsonwebtoken');

const knex = require('../models/connection');
const config = require('../config/config');

class CasesController {
  async create(request, response){
    const { title, description } = request.body;

    const trx = await knex.transaction();

    try {
      await trx('tb_cases').insert({title, description});
      await trx.commit();

      return response.status(201).json({
        succes: 'Registered successfully',
        data: {title, description},
      });
    } catch (err) {
      console.log(err);
      response.status(400).send({ error: 'Failed to register' });
    }
  }
}

module.exports = CasesController;