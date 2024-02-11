const express = require('express');
const CatController = require('./controllers/Cat.controller');
const bodyParser = express.json();

const app = express();

app.get('/cats', CatController.getAll);

app.get('/cats/:catId', CatController.getOne);

app.delete('/cats/:catId', CatController.deleteOne);

app.post('/cats', bodyParser, CatController.createOne);

module.exports = app;