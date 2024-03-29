const Joi = require('joi');

const productId = Joi.number().integer();
const name = Joi.string().max(100);
const description = Joi.string().max(500);
const price = Joi.number().integer();
const stock = Joi.number().integer();
const urlImage = Joi.string().uri()
const category = Joi.string().max(20);

const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  stock: stock.required(),
  urlImage: urlImage.required(),
  category: category.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  description: description,
  price: price,
  stock: stock,
  urlImage: urlImage,
  category: category,
});

const getProductSchema = Joi.object({
  productId: productId.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
