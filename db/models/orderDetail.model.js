const { Model, DataTypes, Sequelize } = require('sequelize');

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
    field: 'order_id'
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'product_id'
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
    // this.hasOne(models.Customer, {
    //   as: 'customer',
    //   foreignKey: 'userId'
    // });
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
