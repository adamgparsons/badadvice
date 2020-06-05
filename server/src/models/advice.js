/* eslint-disable no-param-reassign */

const mongoose = require('mongoose');

const adviceSchema = new mongoose.Schema({
  bad_advice: {
    type: String,
    maxlength: 150,
  },
  date_created: {
    type: Date,
    required: true,
  },
});

const advice = mongoose.model('Advice', adviceSchema);
module.exports = advice;
