const Joi = require("joi");

// create user

const createState = {
  body: Joi.object().keys({
    State_name: Joi.string().trim().required(),
    Capital_city: Joi.string().trim().required(),
  }),
};

const listState = {
  query: Joi.object().keys({
    State_name: Joi.string().trim().allow(""),
    Capital_city: Joi.string().trim().allow(""),
  }),
};

module.exports = { createState, listState };