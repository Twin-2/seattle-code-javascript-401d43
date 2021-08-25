'use strict';

const POSTGRES_URI = process.env.POSTGRES_URI;

const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./lib/collection.js');

const customerSchema = require('./customer.schema.js');
const orderSchema = require('./order.schema.js');

let sequelize = process.env.NODE_ENV === 'test' ? new Sequelize('sqlite:memory:') : new Sequelize(POSTGRES_URI);

const customerModel = customerSchema(sequelize, DataTypes);
const orderModel = orderSchema(sequelize, DataTypes);

const customerCollection = new Collection(customerModel);
const orderCollection = new Collection(orderModel);

// NOTE: you do not need to implement relationships in your lab -> this is for conversation and setup
customerModel.hasMany(orderModel, { foriegnKey: 'customerId', sourceKey: 'id' });
orderModel.belongsTo(customerModel, { foriegnKey: 'customerId', targetKey: 'id' });

module.exports = {
  db: sequelize,
  Orders: orderCollection,
  Customers: customerCollection
}