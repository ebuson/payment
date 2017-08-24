const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const envProvider = require('./env_provider');

require('winston').level = envProvider.LOG_LEVEL;

const databaseUri = envProvider.databaseUri;
const app = express();
app.use(cors());


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//
// require('./routes/').dispatchRoutes(app);


module.exports = app;
