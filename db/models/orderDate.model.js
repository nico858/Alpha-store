const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const ORDER_DATE_TABLE = 'orderDates';

const OrderDateSchema = {
  orderId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  clientId: {
    field: 'client_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'clientId'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  dateOrder: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}


class OrderDate extends Model {

  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
    });
    this.belongsToMany(models.Product, {
      through: models.OrderDetail,
      as: 'items',
      foreignKey: 'orderId',
      otherKey: 'productId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_DATE_TABLE,
      modelName: 'OrderDate',
      timestamps: false
    }
  }
}

module.exports = { OrderDate, OrderDateSchema, ORDER_DATE_TABLE };
