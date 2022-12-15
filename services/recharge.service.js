const express = require('express');

const rechargeService = require('./../services/recharge.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateRechargeSchema, createOrderDetailSchema, getOrderDetailSchema } = require('./../schemas/recharge.schema');

const router = express.Router();
const service = new rechargeService();



router.get('/', async (req, res, next) => {
  try {
    const orderDetail = await service.find();
    res.json(orderDetail);
  } catch (error) {
    next(error);
  }
});

router.get('/:orderDetailId',
  validatorHandler(getOrderDetailSchema, 'params'),
  async (req, res, next) => {
    try {
      const { orderDetailId } = req.params;
      const orderDetail = await service.findOne(orderDetailId);
      res.json(orderDetail);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createOrderDetailSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrderDetail = await service.create(body);
      res.status(201).json(newOrderDetail);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:orderDetailId',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateRechargeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { orderDetailId } = req.params;
      const body = req.body;
      const orderDetail = await service.update(orderDetailId, body);
      res.json(orderDetail);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:orderDetailId',
  validatorHandler(getOrderDetailSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(orderDetailId);
      res.status(201).json({orderDetailId});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
