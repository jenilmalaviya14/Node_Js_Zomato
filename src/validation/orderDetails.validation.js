const Joi = require("joi");

const createorderDetails = {
    body: Joi.object().keys({
        Order_date: Joi.string().required().trim(),
        Total_Price: Joi.string().required().trim(),
        Status: Joi.string().required().trim(),
        user: Joi.string().required().trim(),
        rest_details: Joi.string().required().trim(),
    })
};

const listorderDetails = {
    query: Joi.object().keys({
        Order_date: Joi.string().allow("").trim(),
        Total_Price: Joi.string().allow("").trim(),
        Status: Joi.string().allow("").trim(),
        user: Joi.string().allow("").trim(),
        rest_details: Joi.string().allow("").trim(),
    })
};

module.exports = { createorderDetails, listorderDetails }