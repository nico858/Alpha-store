const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')

const AuthService = require('./../../../services/auth.service');
const service = new AuthService();

const LocalStrategy = new Strategy(async (username, password, done) => {
  try{
    const user = await service.findByUsername(username);
    if(!user) {
      done(boom.unauthorized(), false);
    }
    const isMatch = await bcrypt.compare(password, user.userPassword);
    if(!isMatch) {
      done(boom.unauthorized(), false);
    }
    done(null, user);
  } catch(error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;
