const Advice = require('../models/advice');

exports.admin_advice_get = (req, res, next) => {
  Advice.find({})
    .then((foundAdvice) => {
      const formattedAdvice = foundAdvice.map((item) => item);
      res.json(formattedAdvice);
    })
    .catch((error) => next(error));
};

exports.admin_advice_post = (req, res, next) => {
  const advice = new Advice({
    bad_advice: req.body.bad_advice,
    date_created: new Date(),
  });
  advice
    .save()
    .then((savedAdvice) => savedAdvice.toJSON())
    .then((data) => res.json(data))
    // .then((formattedAdvice) => res.json(formattedAdvice))
    .catch((error) => next(error));
};

exports.admin_advice_by_id_delete = (req, res, next) => {
  Advice.findByIdAndRemove(req.body.id)
    .then((result) => {
      if (!result) {
        res.status(400).end();
      }
      res.status(204).end();
    })
    .catch((error) => next(error));
};
