const Joi = require('joi');

const rechargeId = Joi.number().integer();
const clientId = Joi.number().integer();
const cash = Joi.number().integer();
const dateRecharge = Joi.date();

const createRechargeSchema = Joi.object({
  clientId: clientId.required(),
  cash: cash.required(),
});

const updateRechargeSchema = Joi.object({
  clientId: clientId,
  cash: cash,
});

const getRechargeSchema = Joi.object({
  rechargeId: rechargeId.required(),
});

module.exports = { createRechargeSchema, getRechargeSchema, updateRechargeSchema }
