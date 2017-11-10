const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// middlewares
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
