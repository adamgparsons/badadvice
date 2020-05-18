const express = require('express');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const middlewares = require('./middlewares');
const adviceRoutes = require('./routes/advice_routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../build')));
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});

app.use('/api/', adviceRoutes);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log('Listening at http://localhost:1337');
});
