const Joi = require("joi");

const createrestDetails = {
    body: Joi.object().keys({
        Rest_name: Joi.string().required().trim(),
        Locaion: Joi.string().required().trim(),
        Rest_phone: Joi.number().required().integer(),
        Reating: Joi.string().required().trim(),
        Open_time: Joi.string().required().trim(),
        Close_time: Joi.string().required().trim(),
    })
};

const listrestDetails = {
    query: Joi.object().keys({
        Rest_name: Joi.string().allow("").trim(),
        Locaion: Joi.string().allow("").trim(),
        Rest_phone: Joi.number().allow("").integer(),
        Reating: Joi.string().allow("").trim(),
        Open_time: Joi.string().allow("").trim(),
        Close_time: Joi.string().allow("").trim(),
    })
}

module.exports = { createrestDetails, listrestDetails }