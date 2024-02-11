const {Cat} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const createdCat = await Cat.create(body);
        res.status(201).send(createdCat);
    } catch (error) {
        res.status(400);
    }
};

module.exports.getAll = async (req, res, next) => {
    try{
        const cats = await Cat.findAll();
        res.status(200).send(cats);

    } catch (error) {
        res.status(400);
        //error handling
    }
};

module.exports.getOne = async (req, res, next) => {
    try{
        const {catId} = req.params;
        const cat = await Cat.findByPk(catId);
        res.status(200).send(cat);
    } catch(error) {
        res.status(404);
    }
};

module.exports.updateOne = () => {};

module.exports.deleteOne = async (req, res, next) => {
    try{
        const {catId} = req.params;
        const deleted = await Cat.deleteByPk(catId);
        res.status(200).send(deleted);
    } catch (error) {
        res.status(404);
    }
};