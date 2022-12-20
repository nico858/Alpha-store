const express = require('express');

const addressRouter = require('./address.router');
const orderDateRouter = require('./orderDate.router');
const orderDetailRouter = require('./orderDetail.router');
const productsRouter = require('./products.router');
const rechargeRouter = require('./recharge.router');
const usersRouter = require('./users.router');



function routerApi(app) {
  const router = express.Router();
  app.use(express.json());
  app.use('/api/v1', router);

  router.use('/address', addressRouter);
  router.use('/orderDate', orderDateRouter);
  router.use('/orderDetail', orderDetailRouter);
  router.use('/recharge', rechargeRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
