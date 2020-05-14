const Advice = require('../models/advice');

exports.random_advice_get = (req, res) => {
  Advice.aggregate([{ $sample: { size: 1 } }]).then((foundAdvice) => {
    res.json(foundAdvice[0].bad_advice);
  });
};

exports.random_multiple_get = (req, res) => {
  const numberRequested = Number(req.params.count);
  Advice.aggregate([{ $sample: { size: numberRequested } }]).then(
    (foundAdvice) => {
      const formattedAdvice = foundAdvice.map((item) => item.bad_advice);

      res.json(formattedAdvice);
    }
  );
};
