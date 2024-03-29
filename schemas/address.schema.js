const Joi = require('joi');

const addressId = Joi.number().integer();
const clientId = Joi.number().integer();
const nomecature = Joi.string().min(10).max(40);
const detail = Joi.string().min(5).max(20);

const createAddressSchema = Joi.object({
  clientId: clientId.required(),
  nomecature: nomecature.required(),
  detail: detail.required(),
});

const updateAddressSchema = Joi.object({
  nomecature: nomecature,
  detail: detail,
});

const getAddressSchema = Joi.object({
  addressId: addressId.required(),
});

module.exports = { createAddressSchema, updateAddressSchema, getAddressSchema }
