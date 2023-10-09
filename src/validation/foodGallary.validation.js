const Joi = require("joi");

const createfoodGallary = {
    body: Joi.object().keys({
        Food_name: Joi.string().required().trim(),
        Price: Joi.string().required().trim(),
        Desc: Joi.string().required().trim(),
        Food_img: Joi.string().allow("").trim(),
        categories: Joi.string().allow("").trim(),
        rest_details: Joi.string().allow("").trim(),
        rest_type: Joi.string().allow("").trim(),
    })
};

const listfoodGallary = {
    query: Joi.object().keys({
        Food_name: Joi.string().allow("").trim(),
        Price: Joi.string().allow("").trim(),
        Desc: Joi.string().allow("").trim(),
        Food_img: Joi.string().allow("").trim(),
        categories: Joi.string().allow("").trim(),
        rest_details: Joi.string().allow("").trim(),
        rest_type: Joi.string().allow("").trim(),
    })
};

module.exports = { createfoodGallary, listfoodGallary }