'use strict';

const Order = (sequelize, DataTypes) => sequelize.define('Orders', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // this is just added for demo purposes - no need to create relationships in your lab yet :)
  customerId: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Order;