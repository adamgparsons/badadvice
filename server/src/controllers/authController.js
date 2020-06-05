const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

function respondError422(res, next) {
  res.status(422);
  const error = new Error('Unable to login');
  next(error);
}
function createTokenSendResponse(user, res, next) {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    {
      expiresIn: '1d',
    },
    (err, token) => {
      if (err) {
        respondError422(res, next);
      } else {
        res.json({
          token,
        });
      }
    }
  );
}

exports.add_user_post = (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });

  User.findOne({
    username: req.body.username,
  }).then((user) => {
    if (user) {
      const error = new Error(
        'That user name is already taken. Please choose another one.'
      );
      res.status(409);
      next(error);
    } else {
      newUser
        .save()
        .then((insertedUser) => {
          createTokenSendResponse(insertedUser, res, next);
        })
        .catch((error) => next(error));
    }
  });
};

exports.login_user_post = (req, res, next) => {
  User.findOne({
    username: req.body.username,
  }).then((user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password).then((returningUser) => {
        if (returningUser) {
          createTokenSendResponse(user, res, next);
        } else {
          respondError422(res, next);
        }
      });
    } else {
      respondError422(res, next);
    }
  });
};
