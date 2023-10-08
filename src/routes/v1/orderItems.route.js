const express = require("express");
const router = express.Router();
const { orderItemsValidation } = require("../../validation");
const { orderItemsController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create orderItems

router.post(
    "/create-orderItems",
    validate(orderItemsValidation.createorderItems),
    orderItemsController.createorderItems
);

// List orderItems
router.get(
    "/list-orderItems",
    validate(orderItemsValidation.listorderItems),
    orderItemsController.listorderItems
);

// Delete orderItems
router.delete(
    "/delete-orderItems/:Id",
    orderItemsController.deleteorderItems
);

// Update orderItems
router.put(
    "/update-orderItems/:id",
    orderItemsController.updateorderItems
);

module.exports = router;