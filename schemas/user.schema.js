const Joi = require('joi');

const clientId = Joi.number().integer();
const firstName = Joi.string().max(40);
const lastName = Joi.string().max(60);
const username = Joi.string().min(5).max(15);
const userPassword = Joi.string().min(8);
const email = Joi.string().email();
const phone = Joi.string().min(10).max(10);
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  username: username.required(),
  userPassword: userPassword.required(),
  email: email.required(),
  phone: phone.required(),
});

const updateUserSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  username: username,
  userPassword: userPassword,
  email: email,
  phone: phone,
  role: role,
});

const getUserSchema = Joi.object({
  clientId: clientId.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
