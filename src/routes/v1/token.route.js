const express = require("express");
const validate = require("../../middlewares/validate");
const { tokenValidation } = require("../../validation");
const tokenController = require("../../controllers/token.controller");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** Create jsonwebtoken */
router.post(
  "/create-token",
  validate(tokenValidation.generateToken),
  tokenController.generateToken
);

/** Verify token to get user details */
router.get("/verify-token", auth(), tokenController.verifyToken);

module.exports = router;
