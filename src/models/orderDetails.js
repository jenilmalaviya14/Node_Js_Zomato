const mongoose = require("mongoose");

const OrderDetailsSchema = new mongoose.Schema({
    Order_date: {
        type: String,
        trim: true
    },
    Total_Price: {
        type: Number,
        trim: true
    },
    Status: {
        type: String,
    },
    is_active: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    rest_details: {
        type: mongoose.Types.ObjectId,
        ref: 'rest_details'
    },
},
    {
        timestamps: true,
        versionKey: false
    });

const Orderdetails = mongoose.model("order_details", OrderDetailsSchema);
module.exports = Orderdetails;