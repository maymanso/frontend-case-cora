const userDB = require('../../db/user.json');
const WebToken = require('../../utils/webTokek.utils')

class AuthController {
  constructor() {

  }

  login = (req, res) => {
    const { login, password } = req.body;
    const loginData = {
      login: login,
      password: password
    }

    const token = WebToken.generate(loginData);

    if (login === userDB.login && password === userDB.password)
      return res.status(200).json({
        token: token,
      });

    return res.sendStatus(401);
  }
}

module.exports = new AuthController();