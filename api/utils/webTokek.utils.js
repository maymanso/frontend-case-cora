const jwt = require('jsonwebtoken');

class WebToken {
  constructor() {
    this.jwt = jwt;
  }

  generate = loginData => {
    return this.jwt.sign(loginData, process.env.TOKEN_SECRET_JWT, { expiresIn: process.env.TOKEN_EXPIRATION });
  }
}

module.exports = new WebToken();