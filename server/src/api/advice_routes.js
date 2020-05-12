const { Router } = require('express');
const Advice = require('../models/advice');

const router = Router();
// make sure the 2 dont appear in the same array
// make sure the number is limited
const getRandomAdvice = (allAdvice) => {
  const adviceLength = allAdvice.length;
  const randomNumber = Math.floor(Math.random() * adviceLength);
  return allAdvice[randomNumber].toJSON().bad_advice;
};

const getMultipleAdvice = (allAdvice, x) => {
  const result = [];

  for (let counter = 0; counter < x; counter += 1) {
    result.push(getRandomAdvice(allAdvice));
  }
  return result;
};

// get random bad advice
router.get('/', (req, res) => {
  Advice.find({}).then((foundAdvice) => {
    res.json(getRandomAdvice(foundAdvice));
  });
});

router.get('/:count', (req, res) => {
  const numberRequested = req.params.count;
  Advice.find({}).then((foundAdvice) => {
    if (numberRequested === 1) {
      res.json(getRandomAdvice(foundAdvice));
    } else {
      res.json(getMultipleAdvice(foundAdvice, numberRequested));
    }
  });
});

module.exports = router;
