const Sequelize = require('sequelize');
const sequelize = require('./db_init');

const Cards = sequelize.define('Cards', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  card_id: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
      timestamps: false,
      underscored: true
});

module.exports = Cards;
