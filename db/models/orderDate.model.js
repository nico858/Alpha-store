const { Model, DataTypes, Sequelize } = require('sequelize');
//const { CUSTOMER_TABLE } = require('./customer.model');

const ORDER_DATE_TABLE = 'orderDates';

const OrderDateSchema = {
  orderId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  clientId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
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
    // this.belongsTo(models.Customer, {
    //   as: 'customer',
    // });
    // this.belongsToMany(models.Product, {
    //   as: 'items',
    //   through: models.OrderProduct,
    //   foreignKey: 'orderId',
    //   otherKey: 'productId'
    // });
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
