const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

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
    field: 'client_id',
    unique: false,
    references: {
      model: USER_TABLE,
      key: 'clientId'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
    this.belongsTo(models.User, {
      as: 'user',
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
