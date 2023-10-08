const express = require("express");
const router = express.Router();
const { restDetailsValidation } = require("../../validation");
const { restDetailsController} = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create restDetails

router.post(
    "/create-restDetails",
    validate(restDetailsValidation.createrestDetails),
    restDetailsController.createrestDetails
);

// List restDetails
router.get(
    "/list-restDetails",
    validate(restDetailsValidation.listrestDetails),
    restDetailsController.listrestDetails
);

// Delete restDetails
router.delete(
    "/delete-restDetails/:Id",
    restDetailsController.deleteresDetails
);

// Update restDetails
router.put(
    "/update-restDetails/:id",
    restDetailsController.updateresDetails
);

module.exports = router;