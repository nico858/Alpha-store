const { Model, DataTypes, Sequelize } = require('sequelize');

// const { CATEGORY_TABLE } = require('./category.model');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  productId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  urlImage: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    //onUpdate: 'CASCADE',
    //onDelete: 'SET NULL'
}



class Product extends Model {

  static associate(models) {
    // this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { Product, ProductSchema, PRODUCT_TABLE };
