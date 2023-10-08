const Joi = require("joi");

const createownerDetails = {
    body: Joi.object().keys({
        Owner_name: Joi.string().required().trim(),
        phone: Joi.number().required().integer(),
        email: Joi.string().required().trim(),
    })
};

const listownerDetails = {
    query: Joi.object().keys({
        Owner_name: Joi.string().allow("").trim(),
        phone: Joi.number().allow("").integer,
        email: Joi.string().allow("").trim(),
    })
}

module.exports = { createownerDetails, listownerDetails }