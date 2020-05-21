const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adviceSchema = new Schema({
  bad_advice: {
    type: String,
    maxlength: 150,
  },
  date_created: {
    type: Date,
    required: true,
  },
});

adviceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
  },
});

const advice = mongoose.model('Advice', adviceSchema);
module.exports = advice;
