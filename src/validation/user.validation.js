const Joi = require("joi");

const createUser = {
    body: Joi.object().keys({
        user_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required(),
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        telephone: Joi.string().required().trim()
    })
};

const listUser = {
    query: Joi.object().keys({
        user_name: Joi.string().allow("").trim(),
        email: Joi.string().allow("").trim(),
        password: Joi.string().allow(""),
        first_name: Joi.string().allow("").trim(),
        last_name: Joi.string().allow("").trim(),
        telephone: Joi.string().allow("").trim()
    })
};

const sendMail = {
    body: Joi.object({
        email: Joi.string().required().trim().email(),
        subject: Joi.string().required().trim(),
        text: Joi.string().required().trim(),
    }),
};

module.exports = { createUser, listUser, sendMail }