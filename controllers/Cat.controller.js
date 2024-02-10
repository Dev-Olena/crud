const {Cat} = require('../models');

module.exports.createOne = () => {};

module.exports.getAll = async (req, res, next) => {
    try{
        const cats = await Cat.findAll();
        res.status(200).send(cats);

    } catch (error) {
        res.status(400);
        //error handling
    }
};

module.exports.getOne = () => {};

module.exports.updateOne = () => {};

module.exports.deleteOne = () => {};