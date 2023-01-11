const express = require('express');
const passport = require('passport');

const OrderDateService = require('./../services/orderDate.service');

const router = express.Router();

router.post('/my-orders',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      const orders = await service.findByUser(user.sub);
      res.json(orders);
    } catch(error) {
      next(error);
    }
});

module.exports = router;
