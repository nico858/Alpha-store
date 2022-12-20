'use strict';

const { OrderDateSchema, ORDER_DATE_TABLE } = require('./../models/orderDate.model');
const { OrderDetailSchema, ORDER_DETAIL_TABLE } = require('./../models/orderDetail.model');
const { RechargeSchema, RECHARGE_TABLE } = require('./../models/recharge.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORDER_DATE_TABLE, OrderDetailSchema);
    await queryInterface.createTable(ORDER_DETAIL_TABLE, OrderDetailSchema);
    await queryInterface.createTable(RECHARGE_TABLE, RechargeSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_DATE_TABLE);
    await queryInterface.dropTable(ORDER_DETAIL_TABLE);
    await queryInterface.dropTable(RECHARGE_TABLE);
  }
};
