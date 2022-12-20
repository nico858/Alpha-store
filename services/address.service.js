const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class AddressService {
  constructor() {}

  async create(data) {
    const newAddress = await models.Address.create(data);
    return newAddress;
  }

  async find() {
    const response = await models.Address.findAll();
    return response;
  }

  async findOne(id) {
    const address = await models.Address.findByPk(id);
    if (!address) {
      throw boom.notFound('Address not found');
    }
    return address;
  }

  async update(id, changes) {
    const address = await this.findOne(id);
    const response = await address.update(changes);
    return response;
  }

  async delete(id) {
    const address = await this.findOne(id);
    await address.destroy();
    return { id };
  }
}

module.exports = AddressService;
