const Sequelize = require('sequelize');
const winston = require('winston');
const env = require('../env_provider');

const sequelize = new Sequelize(env.DB_NAME, 'root', null, {
  host: env.DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 3,
    min: 0,
    idle: 10000
  },
  logging: winston.silly
});

module.exports = sequelize;
