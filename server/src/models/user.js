/* eslint-disable no-param-reassign */
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 8,
    maxlength: 24,
    required: true,
    createIndexes: { unique: true },
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
});

userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};

const user = mongoose.model('User', userSchema);
module.exports = user;
