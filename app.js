const express = require('express');
const bodyParse = require('body-parser');
const config = require('./config/config');
const datasource = require('./config/datasource');
const userRoute = require('./src/routes/user');

const app = express();
app.config = config;
app.datasource = datasource(app);

app.set('port', +process.env.APP_PORT || 8000);
app.use(bodyParse.json());

userRoute(app);
module.exports = app;
