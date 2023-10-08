const express = require("express");
const router = express.Router();
const { categoriesValidation } = require("../../validation");
const { categoriesController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create categories

router.post(
    "/create-categories",
    validate(categoriesValidation.createCategories),
    categoriesController.createCategories
);

// List categories
router.get(
    "/list-categories",
    validate(categoriesValidation.listCategories),
    categoriesController.listCategories
);

// Delete categories
router.delete(
    "/delete-categories/:Id",
    categoriesController.deleteCategories
);

// Update categories
router.put(
    "/update-categories/:id",
    categoriesController.updateCategories
);

module.exports = router;