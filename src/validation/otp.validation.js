const Joi = require("joi");

// create user

const createOtp = {
  body: Joi.object().keys({
    User_phone: Joi.number().required().integer(),
    User_email: Joi.string().trim().required()
  }),
};

const listOtp = {
  query: Joi.object().keys({
    User_phone: Joi.number().integer().allow(""),
    User_email: Joi.string().trim().allow("")
  }),
};

module.exports = { createOtp, listOtp };