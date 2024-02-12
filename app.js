const express = require('express');
const bodyParser = express.json();
const catRouter = require('./routs/CatRouter');
const ownerRouter = require('./routs/OwnerRouter');

const app = express();

app.use(bodyParser);

app.use('/cats', catRouter);
app.use('/owners', ownerRouter);

//error handling


module.exports = app;