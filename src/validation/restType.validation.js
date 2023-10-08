const Joi = require("joi");

const createrestType = {
    body: Joi.object().keys({
        Rest_type: Joi.string().required().trim(),
    })
};

const listrestType = {
    query: Joi.object().keys({
        Rest_type: Joi.string().allow("").trim(),
    })
};

module.exports = { createrestType, listrestType }