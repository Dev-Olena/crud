const express = require('express');
const CatController = require('./controllers/Cat.controller');

const app = express();

app.get('/cats', CatController.getAll);

module.exports = app;