const { Model, DataTypes, Sequelize } = require('sequelize');
const RECHARGE_TABLE = require('./recharge.model');

const USER_TABLE = 'users';

const UserSchema = {
  clientId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  userPassword: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  siuuPoints: {
    field: 'siuu_points',
    allowNull: true,
    type: DataTypes.DOUBLE,
    defaultValue: 0
  },
  recoveryToken: {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  }
}

class User extends Model {
  static associate(models) {
    this.hasMany(models.OrderDate, {
      as: 'orders',
      foreignKey: 'userId'
    });
    this.hasMany(models.Recharge, {
      as: 'recharges',
      foreignKey: 'rechargeId'
    })
    this.belongsTo(models.Address, {
      as: 'address'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User };
