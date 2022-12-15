const express = require('express');

const OrderDateService = require('./../services/orderDate.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateOrderDateSchema, createOrderDateSchema, getOrderDateSchema } = require('./../schemas/orderDate.schema');

const router = express.Router();
const service = new OrderDateService();



router.get('/', async (req, res, next) => {
  try {
    const orderDates = await service.find();
    res.json(orderDates);
  } catch (error) {
    next(error);
  }
});

router.get('/:orderDateId',
  validatorHandler(getOrderDateSchema, 'params'),
  async (req, res, next) => {
    try {
      const { orderDateId } = req.params;
      const orderDate = await service.findOne(orderDateId);
      res.json(orderDate);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createOrderDateSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrderDate = await service.create(body);
      res.status(201).json(newOrderDate);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:orderDateId',
  validatorHandler(getOrderDateSchema, 'params'),
  validatorHandler(updateOrderDateSchema, 'body'),
  async (req, res, next) => {
    try {
      const { orderDateId } = req.params;
      const body = req.body;
      const orderDate = await service.update(orderDateId, body);
      res.json(orderDate);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:orderDateId',
  validatorHandler(getOrderDateSchema, 'params'),
  async (req, res, next) => {
    try {
      const { orderDateId } = req.params;
      await service.delete(orderDateId);
      res.status(201).json({orderDateId});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
