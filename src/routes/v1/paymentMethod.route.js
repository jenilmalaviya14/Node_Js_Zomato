const express = require("express");
const router = express.Router();
const { paymentMethodValidation } = require("../../validation");
const { paymentMethodController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create paymentMethod

router.post(
    "/create-paymentMethod",
    validate(paymentMethodValidation.createpaymentMethod),
    paymentMethodController.createpaymentMethod
);

// List paymentMethod
router.get(
    "/list-paymentMethod",
    validate(paymentMethodValidation.listpaymentMethod),
    paymentMethodController.listpaymentMethod
);

// Delete paymentMethod
router.delete(
    "/delete-paymentMethod/:Id",
    paymentMethodController.deletepaymentMethod
);

// Update paymentMethod
router.put(
    "/update-paymentMethod/:id",
    paymentMethodController.updatepaymentMethod
);

module.exports = router;