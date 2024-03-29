boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class OrderDateService {
  constructor() {}

  async create(data) {
    const newOrderDate = await models.OrderDate.create(data);
    return newOrderDate;
  }

  async find() {
    const response = await models.OrderDate.findAll();
    return response;
  }

  async findOne(id) {
    const orderDate = await models.OrderDate.findByPk(id);
    if (!orderDate) {
      throw boom.notFound('OrderDate not found');
    }
    return orderDate;
  }

  async update(id, changes) {
    const orderDate = await this.findOne(id);
    const response = await orderDate.update(changes);
    return response;
  }

  async delete(id) {
    const orderDate = await this.findOne(id);
    await orderDate.destroy();
    return { id };
  }
}

module.exports = OrderDateService;
