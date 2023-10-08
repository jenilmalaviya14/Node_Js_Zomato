const express = require("express");
const router = express.Router();
const { otpValidation } = require("../../validation");
const { otpController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create otp

router.post(
    "/create-otp",
    validate(otpValidation.createOtp),
    otpController.createOtp
);

// List otp
router.get(
    "/list-otp",
    validate(otpValidation.listOtp),
    otpController.listOtp
);

// Delete otp

router.delete(
    "/delete-otp/:Id",
    otpController.deleteOtp
);

// Update otp
router.put(
    "/update-otp/:id",
    otpController.updateOtp
);

module.exports = router;