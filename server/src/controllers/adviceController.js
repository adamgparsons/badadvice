const Advice = require('../models/advice');

exports.random_advice_get = (req, res, next) => {
  Advice.aggregate([{ $sample: { size: 1 } }])
    .then((foundAdvice) => {
      res.json(foundAdvice[0].bad_advice);
    })
    .catch((error) => next(error));
};

exports.advice_get = (req, res, next) => {
  Advice.find({}, 'bad_advice')
    .then((foundAdvice) => {
      const formattedAdvice = foundAdvice.map((item) => item.bad_advice);
      res.json(formattedAdvice);
    })
    .catch((error) => next(error));
};

exports.advice_by_id_get = (req, res, next) => {
  const adviceId = req.params.id;
  Advice.findById(adviceId)
    .then((foundAdvice) => {
      const formattedAdvice = foundAdvice.bad_advice;
      res.json(formattedAdvice);
    })
    .catch((error) => next(error));
};

exports.random_multiple_get = (req, res, next) => {
  const numberRequested = Number(req.params.count);
  Advice.aggregate([{ $sample: { size: numberRequested } }])
    .then((foundAdvice) => {
      const formattedAdvice = foundAdvice.map((item) => item.bad_advice);

      res.json(formattedAdvice);
    })
    .catch((error) => next(error));
};
exports.advice_post = (req, res, next) => {
  const advice = new Advice({
    bad_advice: req.body.bad_advice,
    date_created: new Date(),
  });
  advice
    .save()
    .then((savedAdvice) => savedAdvice.toJSON())
    .then((formattedAdvice) => res.json(formattedAdvice))
    .catch((error) => next(error));
};

exports.advice_by_id_delete = (req, res, next) => {
  Advice.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};
