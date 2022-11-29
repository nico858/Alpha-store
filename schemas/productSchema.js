const Joi = require('joi');

//Valida que el id sea un string de tipo uuid
const id = Joi.string().uuid();
//Valida que el name sea un string alfanumerico de minimo 3 caracteres y máximo 10
const name = Joi.string()
                .min(3)
                .max(10);
//Valida que el precio se un número entero y que el valor minimo es 10
const price = Joi.number()
                 .integer()
                 .min(10);
const image = Joi.string()
                .uri();

//Espitula que es necesario un nombre y un precio para la creación del producto
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});
//No se necesita ningún dato en concreto, pero puede actualizar el precio o el nombre
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});
//Se necesita un ID para retornar un producto
const getProductSchema = Joi.object({
  id: id.required(),
});


module.exports = { createProductSchema, updateProductSchema, getProductSchema };
