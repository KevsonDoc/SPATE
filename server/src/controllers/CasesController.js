const jwt = require('jsonwebtoken');

const knex = require('../models/connection');

const checkField = require('../utils/index');

class CasesController {
  async create(request, response){
    const { title, description } = request.body;

    const trx = await knex.transaction();

    const userEmailExisting = await checkField('tb_cases', 'title', title);
    const userCpfExisting = await checkField('tb_cases', 'description', description);

    if (userEmailExisting === true || userCpfExisting === true) {
      return response.status(409).send({ error: 'Conflict between fields !' });
    }

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

    const userVerification = await checkField('tb_cases', 'cd_case', cd_case);

    if (userVerification === false) {
      return response.status(404).send({ error: 'Case not found' });
    }

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
  async index(request, response) {
    try {
      const cases = await knex.select('*').table('tb_cases');

      return response.status(200).json({
        data: cases
      });
    } catch (err) {
      console.log(err);

      return response.status(400).send({ error: 'error when search the record' });
    }
  }
}

module.exports = CasesController;