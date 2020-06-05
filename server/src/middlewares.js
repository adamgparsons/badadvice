const jwt = require('jsonwebtoken');

const notFound = (req, res, next) => {
  const error = new Error(
    `These are not the routes you were looking for (${req.originalUrl})`
  );
  res.status(404);
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
  });
};

function checkTokenSetUser(req, res, next) {
  const authHeader = req.get('authorization');

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
        if (error) {
          console.log(error);
        }
        req.user = user;
        next();
      });
    } else {
      next();
    }
  } else {
    next();
  }
}

function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    const error = new Error('unauthorized ⛔️');
    res.status(401);
    next(error);
  }
}

module.exports = {
  notFound,
  errorHandler,
  checkTokenSetUser,
  isLoggedIn,
};
