const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORDER_DATE_TABLE, OrderDate } = require('./orderDate.model');
const { PRODUCT_TABLE } = require('./product.model');

const ORDER_DETAIL_TABLE = 'orderDetail';

const OrderDetailSchema = {
  orderDetailId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'order_detail_id'
  },
  orderId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'order_id',
    reference: {
      model: ORDER_DATE_TABLE,
      key: 'orderId'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'product_id',
    reference: {
      model: PRODUCT_TABLE,
      key: 'productId'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  quantity: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class OrderDetail extends Model {
  static associate(models) {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_DETAIL_TABLE,
      modelName: 'OrderDetail',
      timestamps: false
    }
  }
}


module.exports = { ORDER_DETAIL_TABLE, OrderDetailSchema, OrderDetail }
