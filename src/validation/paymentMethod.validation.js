const Joi = require("joi");

const createpaymentMethod = {
    body: Joi.object().keys({
        Amount: Joi.number().required().integer(),
        Payment_method: Joi.string().required().trim(),
        Card_number: Joi.number().required().integer(),
        Card_holder_name: Joi.string().required().trim(),
        Exp_date: Joi.number().required().integer(),
    })
};

const listpaymentMethod = {
    query: Joi.object().keys({
        Amount: Joi.number().allow("").integer(),
        Payment_method: Joi.string().allow("").trim(),
        Card_number: Joi.number().allow("").integer(),
        Card_holder_name: Joi.string().allow("").trim(),
        Exp_date: Joi.number().allow("").integer(),
    })
}

module.exports = { createpaymentMethod, listpaymentMethod }