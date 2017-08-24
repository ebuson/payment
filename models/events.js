const Sequelize = require('sequelize');
const sequelize = require('./db_init');

const Events = sequelize.define('Events', {
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
  payment_type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Credit_id: {
      type: Sequelize.STRING,
      allowNull: true
  },
  amount: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
  },
  status: {
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


module.exports = Events;
