const Joi = require("joi");

const createReviews = {
    body: Joi.object().keys({
        comment: Joi.string().required().trim(),
        Raiting: Joi.string().required().trim()
    })
};

const listReviews = {
    query: Joi.object().keys({
        comment: Joi.string().allow("").trim(),
        Raiting: Joi.string().allow("").trim()
    })
};

module.exports = { createReviews, listReviews }