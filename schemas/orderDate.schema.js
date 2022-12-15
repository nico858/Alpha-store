const Joi = require('joi');


const orderId = Joi.number().integer();
const clientId = Joi.number().integer();
const dateOrder = Joi.string().isoDate(); //pendiente tipo dato fecha

const createUserSchema = Joi.object({
  orderId: orderId.required(),
  clientId: clientId.required(),
});

const updateUserSchema = Joi.object({
  orderId: orderId,
  clientId: clientId,
  dateOrder: dateOrder
});

const getOrderDateSchema = Joi.object({
  orderId: orderId.required(),
});

module.exports = { createOrderDateSchema, getOrderDateSchema }
