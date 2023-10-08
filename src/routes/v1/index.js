const express = require("express");

const categories = require("./categories.route");
const city = require("./city.route");
const foodGallary = require("./foodGallary.route");
const orderDetails = require("./orderDetails.route");
const orderItems = require("./orderItems.route");
const otp = require("./otp.route");
const ownerDetails = require("./ownerDetails.route");
const paymentMethod = require("./paymentMethod.route");
const restDetails = require("./restDetails.route");
const restType = require("./restType.route");
const reviews = require("./reviews.route");
const state = require("./state.route");
const user = require("./user.route");
const token =require("./token.route")

const router = express.Router();

router.use("/categories", categories);
router.use("/city", city);
router.use("/foodGallary", foodGallary);
router.use("/orderDetails", orderDetails);
router.use("/user", user);
router.use("/orderItems",orderItems);
router.use("/otp", otp);
router.use("/ownerDetails", ownerDetails);
router.use("/paymentMethod", paymentMethod);
router.use("/restDetails", restDetails);
router.use("/restType", restType);
router.use("/reviews", reviews);
router.use("/state", state);
router.use('/token', token);

module.exports = router;