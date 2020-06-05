const express = require('express');
const volleyball = require('volleyball');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const middlewares = require('./middlewares');
const adviceRoutes = require('./routes/advice_routes');
const adminRoutes = require('./routes/admin_routes');
const authRoutes = require('./routes/auth_routes');

const app = express();
app.use(middlewares.checkTokenSetUser);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../build')));
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(volleyball);
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use('/api/', adviceRoutes);
app.use('/api/admin', middlewares.isLoggedIn, adminRoutes);
app.use('/auth/', authRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log('Listening at http://localhost:1337');
});
