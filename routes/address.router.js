const express = require('express');

const AddressService = require('../services/address.service');
const validatorHandler = require('../middlewares/validator.handler');
const { updateAddressSchema, createAddressSchema, getAddressSchema } = require('../schemas/address.schema');

const router = express.Router();
const service = new AddressService();



router.get('/', async (req, res, next) => {
  try {
    const addresses = await service.find();
    res.json(addresses);
  } catch (error) {
    next(error);
  }
});

router.get('/:addressId',
  validatorHandler(getAddressSchema, 'params'),
  async (req, res, next) => {
    try {
      const { addressId } = req.params;
      const address = await service.findOne(addressId);
      res.json(address);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createAddressSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAddress = await service.create(body);
      res.status(201).json(newAddress);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:addressId',
  validatorHandler(getAddressSchema, 'params'),
  validatorHandler(updateAddressSchema, 'body'),
  async (req, res, next) => {
    try {
      const { addressId } = req.params;
      const body = req.body;
      const address = await service.update(addressId, body);
      res.json(address);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:addressId',
  validatorHandler(getAddressSchema, 'params'),
  async (req, res, next) => {
    try {
      const { addressId } = req.params;
      await service.delete(addressId);
      res.status(201).json({addressId});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
