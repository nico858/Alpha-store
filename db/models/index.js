const { Address, AddressSchema } = require('./address.model');
const { OrderDate, OrderDateSchema } = require('./orderDate.model');
const { OrderDetail, OrderDetailSchema } = require('./orderDetail.model');
const { Product, ProductSchema } = require('./product.model');
const { Recharge, RechargeSchema } = require('./recharge.model');
const { User, UserSchema } = require('./user.model');


function setupModels(sequelize) {
  Address.init(AddressSchema, Address.config(sequelize));
  OrderDate.init(OrderDateSchema, OrderDate.config(sequelize));
  OrderDetail.init(OrderDetailSchema, OrderDetail.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Recharge.init(RechargeSchema, Recharge.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  // Address.associate(sequelize.models);
  OrderDate.associate(sequelize.models);
  OrderDetail.associate(sequelize.models);
  Product.associate(sequelize.models);
  Recharge.associate(sequelize.models);
  User.associate(sequelize.models);


}

module.exports = setupModels;
