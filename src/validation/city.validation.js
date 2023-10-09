const Joi = require("joi");

const createCity = {
  body: Joi.object().keys({
    City_name: Joi.string().trim().required(),
    state: Joi.string().trim().required(),
  }),
};

const listCity = {
  query: Joi.object().keys({
    City_name: Joi.string().trim().allow(""),
    state: Joi.string().trim().allow(""),
  }),
};

module.exports = { createCity, listCity };