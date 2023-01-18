const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { DataRowMessage } = require('pg-protocol/dist/messages');

const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.userPassword, 10);
    const newUser = await models.User.create({
      ...data,
      userPassword: hash
    });
    return newUser;
  }

  async find() {
    const response = await models.User.findAll();
    return response;
  }

  async findByUsername(username) {
    const response = await models.User.findOne({
      where: { username }
    });
    return response;
  }

  async findByEmail(email) {
    const response = await models.User.findOne({
      where: { email }
    });
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include: ['recharges']
    });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = await user.update(changes);
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
