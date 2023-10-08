const express = require("express");
const router = express.Router();
const { reviewsValidation } = require("../../validation");
const { reviewsController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create reviews

router.post(
    "/create-reviews",
    validate(reviewsValidation.createReviews),
    reviewsController.createReviews
);

// List reviews
router.get(
    "/list-reviews",
    validate(reviewsValidation.listReviews),
    reviewsController.listReviews
);

// Delete reviews
router.delete(
    "/delete-reviews/:Id",
    reviewsController.deleteReviews
);

// Update reviews
router.put(
    "/update-reviews/:id",
    reviewsController.updateReviews
);

module.exports = router;