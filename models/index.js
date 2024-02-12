const {Client} = require('pg');
const config = require('../config.json');
// const Cat = require('./Cat');
// const Owner = require('./Owner');
const fs = require('fs');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';

const devConf = config[mode];

const client = new Client(devConf);
client.connect();

// Cat._client = client;
// Owner._client = client;

const currentFileName = path.basename(__filename);

const db = {
    client
};

fs.readdirSync(__dirname)
            .filter(fileName => /.js$/.test(fileName) && fileName !== currentFileName)
            .forEach(fileName => {
                const absPathToFile = path.join(__dirname, fileName);
                const Model = require(absPathToFile);
                Model._client = client;
                db[Model.name] = Model;
            })
module.exports = db;
// module.exports = {
//     client,
//     Cat,
//     Owner
// }

