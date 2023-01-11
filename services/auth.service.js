const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('./../config/config');
const UserService = require('./user.service');
const service = new UserService();

class AuthService {

  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.userPassword);
    if(!isMatch) {
      throw boom.unauthorized(), false;
    }
    delete user.dataValues.userPassword;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.userId,
      role: user.role
    }
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token
    };
  }

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
          user: 'alphastore7.info@gmail.com',
          pass: 'xniwrmnhxtvxnwsc'
      },
  });
    await transporter.sendMail({
      from: 'alphastore7.info@gmail.com', // sender address
      to: `${user.email}`, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    return { message: 'mail sent' };
  }
}


module.exports = AuthService;
