const express = require("express");
const router = express.Router();
const { foodGallaryValidation } = require("../../validation");
const { foodGallaryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload")

// Create foodGallary

router.post(
    "/create-foodGallary",
    upload.single("Food_img"),
    validate(foodGallaryValidation.createfoodGallary),
    foodGallaryController.createfoodGallary
);

// List foodGallary
router.get(
    "/list-foodGallary",
    validate(foodGallaryValidation.listfoodGallary),
    foodGallaryController.listfoodGallary
);

// Delete foodGallary
router.delete(
    "/delete-foodGallary/:Id",
    foodGallaryController.deletefoodGallary
);

// Update foodGallary
router.put(
    "/update-foodGallary/:id",
    foodGallaryController.updatefoodGallary
);

module.exports = router;