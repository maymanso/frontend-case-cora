class AuthRoutesMiddleware {
  protect = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
      return res.status(401).json({
        type: 'Auth',
        message: 'Missing token',
      });
    }

    next();
  }
}

module.exports = new AuthRoutesMiddleware()