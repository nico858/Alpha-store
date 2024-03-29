const { Model, DataTypes, Sequelize } = require('sequelize');

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
    // this.hasMany(models.Address, {
    //   as: 'address',
    //   foreignKey: 'userId'
    // });
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
