const express = require("express");
const router = express.Router();
const { restTypeValidation } = require("../../validation");
const { restTypeController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create restType

router.post(
    "/create-restType",
    validate(restTypeValidation.createrestType),
    restTypeController.createrestType
);

// List restType
router.get(
    "/list-restType",
    validate(restTypeValidation.listrestType),
    restTypeController.listrestType
);

// Delete restType
router.delete(
    "/delete-restType/:Id",
    restTypeController.deleterestType
);

// Update restType
router.put(
    "/update-restType/:id",
    restTypeController.updaterestType
);

module.exports = router;