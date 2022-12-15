const Joi = require('joi');

const addressId = Joi.number().integer();
const clientId = Joi.number().integer();
const nomencature = Joi.string().min(10).max(40);
const detail = Joi.string().min().max();

const createAddressSchema = Joi.object({
  addressId: addressId.required(),
  clientId: clientId.required(),
  nomencature: nomencature.required(),
  detail: detail.required(),
});

const updateAddressSchema = Joi.object({
  nomencature: nomencature,
  detail: detail,
});

const getAddressSchema = Joi.object({
  addressId: addressId.required(),
});

module.exports = { createAddressSchema, updateAddressSchema, getAddressSchema }
