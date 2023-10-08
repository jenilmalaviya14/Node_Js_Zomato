const express = require("express");
const router = express.Router();
const { orderDetailsValidation } = require("../../validation");
const { orderDetailsController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create orderDetails

router.post(
    "/create-orderDetails",
    validate(orderDetailsValidation.createorderDetails),
    orderDetailsController.createorderDetails
);

// List orderDetails
router.get(
    "/list-orderDetails",
    validate(orderDetailsValidation.listorderDetails),
    orderDetailsController.listorderDetails
);

// Delete orderDetails
router.delete(
    "/delete-orderDetails/:Id",
    orderDetailsController.deleteorderDetails
);

// Update orderDetails
router.put(
    "/update-orderDetails/:id",
    orderDetailsController.updateorderDetails
);

module.exports = router;