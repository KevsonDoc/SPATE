const axios = require('axios');

const api = axios.create({
  baseURL: 'http://192.168.0.107:3333'
})

module.exports = api;
