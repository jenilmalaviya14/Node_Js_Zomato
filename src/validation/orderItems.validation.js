const Joi = require("joi");

const createorderItems = {
    body: Joi.object().keys({
        Quantity: Joi.string().required().trim(),
        SubTotal_price: Joi.string().required().trim(),
    })
};

const listorderItems = {
    query: Joi.object().keys({
        Quantity: Joi.string().allow("").trim(),
        SubTotal_price: Joi.string().allow("").trim(),
    })
};

module.exports = { createorderItems, listorderItems }