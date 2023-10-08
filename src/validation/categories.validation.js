const Joi = require("joi");

const createCategories = {
    body: Joi.object().keys({
        Categories_name: Joi.string().required().trim(),
        Categories_desc: Joi.string().required().trim()
    })
};

const listCategories = {
    query: Joi.object().keys({
        Categories_name: Joi.string().allow("").trim(),
        Categories_desc: Joi.string().allow("").trim()
    })
};

module.exports = { createCategories, listCategories }