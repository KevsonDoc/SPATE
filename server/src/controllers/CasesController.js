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
  async delete(request, response) {
    const { cd_cases } = request.params;

    try {
      await knex('tb_cases')
        .where('cd_cases', cd_cases)
        .delete();

      return response.sendStatus(200).send({
        success: `Successfully deleting the case with id ${ cd_cases }`,
      });
    } catch (err) {
      console.log(err);

      return response.status(400).send({ error: 'error when deleting the record' });
    }
  }
}

module.exports = CasesController;