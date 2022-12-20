'use strict';

const { AddressSchema, ADRESS_TABLE } = require('./../models/address.model');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ADRESS_TABLE, AddressSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ADRESS_TABLE);
  }
};

