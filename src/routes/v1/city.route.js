const express = require("express");
const router = express.Router();
const { cityValidation } = require("../../validation");
const { cityController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create city

router.post(
    "/create-city",
    validate(cityValidation.createCity),
    cityController.createCity
);

// List city
router.get(
    "/list-city",
    validate(cityValidation.listCity),
    cityController.listCity
);

// Delete city
router.delete(
    "/delete-city/:Id",
    cityController.deleteCity
);

// Update city
router.put(
    "/update-city/:id",
    cityController.updateCity
);

module.exports = router;