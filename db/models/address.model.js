const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const ADRESS_TABLE = 'address';

const AddressSchema = {
  adressId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  clientId: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'client_id',
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'clientId'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  nomecature: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  detail: {
    allowNull: true,
    type: DataTypes.STRING,
  },
}

class Address extends Model {
  static associate(models) {
    this.belongsTo(models.User, {as: 'user'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ADRESS_TABLE,
      modelName: 'Address',
      timestamps: false
    }
  }
}


module.exports = { ADRESS_TABLE, AddressSchema, Address }
