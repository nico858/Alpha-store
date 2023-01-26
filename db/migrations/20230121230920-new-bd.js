'use strict';

const { AddressSchema, ADRESS_TABLE } = require('./../models/address.model');
const { OrderDateSchema, ORDER_DATE_TABLE } = require('./../models/orderDate.model');
const { OrderDetailSchema, ORDER_DETAIL_TABLE } = require('./../models/orderDetail.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { RechargeSchema, RECHARGE_TABLE } = require('./../models/recharge.model');
const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ADRESS_TABLE, AddressSchema);
    await queryInterface.createTable(ORDER_DATE_TABLE, OrderDetailSchema);
    await queryInterface.createTable(ORDER_DETAIL_TABLE, OrderDetailSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(RECHARGE_TABLE, RechargeSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ADRESS_TABLE);
    await queryInterface.dropTable(ORDER_DATE_TABLE);
    await queryInterface.dropTable(ORDER_DETAIL_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(RECHARGE_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  }
};;
