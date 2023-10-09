const Joi = require("joi");

const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required(),
        telephone: Joi.number().required(),
        address: Joi.string().required().trim(),
        country: Joi.string().required().trim(),
    })
};

const listUser = {
    query: Joi.object().keys({
        first_name: Joi.string().allow("").trim(),
        last_name: Joi.string().allow("").trim(),
        email: Joi.string().allow("").trim(),
        password: Joi.string().allow(""),
        telephone: Joi.string().allow("").trim(),
        address: Joi.string().allow("").trim(),
        country: Joi.string().allow("").trim(),
    })
};

const sendMail = {
    body: Joi.object({
        email: Joi.string().required().trim().email(),
        subject: Joi.string().required().trim(),
        text: Joi.string().required().trim(),
    }),
};

module.exports = { createUser, sendMail, listUser }