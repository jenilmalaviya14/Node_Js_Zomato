const express = require("express");
const router = express.Router();
const { ownerDetailsValidation } = require("../../validation");
const { ownerDetailsController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create ownerDetails

router.post(
    "/create-ownerDetails",
    validate(ownerDetailsValidation.createownerDetails),
    ownerDetailsController.createownerDetails
);

// List ownerDetails
router.get(
    "/list-ownerDetails",
    validate(ownerDetailsValidation.listownerDetails),
    ownerDetailsController.listownerDetails
);

// Delete ownerDetails
router.delete(
    "/delete-ownerDetails/:Id",
    ownerDetailsController.deleteownerDetails
);

// Update ownerDetails
router.put(
    "/update-ownerDetails/:id",
    ownerDetailsController.updateownerDetails
);

module.exports = router;