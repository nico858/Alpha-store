const { Model, DataTypes, Sequelize } = require('sequelize');

const RECHARGE_TABLE = 'recharge';

const RechargeSchema = {
  rechargeId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'recharge_id'
  },
  clientId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'client_id'
  },
  cash: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  dateRecharge: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'date_recharge',
    defaultValue: Sequelize.NOW
  }
}

class Recharge extends Model {
  static associate(models) {
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECHARGE_TABLE,
      modelName: 'Recharge',
      timestamps: false
    }
  }
}


module.exports = { RECHARGE_TABLE, RechargeSchema, Recharge }
