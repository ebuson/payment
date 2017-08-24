const Sequelize = require('sequelize');
const sequelize = require('./db_init');

const Credits = sequelize.define('Credits', {
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
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  amount: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
  },
  exp_date: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
  }
}, {
    timestamps: false,
    underscored: true
  });


module.exports = Credits;
