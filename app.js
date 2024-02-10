const express = require('express');
const CatController = require('./controllers/Cat.controller');

const app = express();

app.get('/cats', CatController.getAll);

app.get('/cats/:catId', CatController.getOne);

app.delete('/cats/:catId', CatController.deleteOne);

module.exports = app;