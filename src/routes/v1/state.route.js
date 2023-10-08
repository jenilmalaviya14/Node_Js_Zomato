const express = require("express");
const router = express.Router();
const { stateValidation } = require("../../validation");
const { stateController } = require("../../controllers");
const validate = require("../../middlewares/validate");

// Create state

router.post(
    "/create-state",
    validate(stateValidation.createState),
    stateController.createState
);

// List state
router.get(
    "/list-state",
    validate(stateValidation.listState),
    stateController.listState
);

// Delete state
router.delete(
    "/delete-state/:Id",
    stateController.deleteState
);

// Update state
router.put(
    "/update-state/:id",
    stateController.updateState
);

module.exports = router;