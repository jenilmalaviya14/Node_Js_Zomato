const mongoose = require("mongoose");

const OrderItemsSchema = new mongoose.Schema({
    Quantity: {
        type: Number,
        trim: true
    },
    SubTotal_price: {
        type: String,
    },
    is_active: {
        type: Boolean,
        default: true
    },
    foodgallary: {
        type: mongoose.Types.ObjectId,
        ref: 'foodgallary'
    },
    order_details: {
        type: mongoose.Types.ObjectId,
        ref: 'order_details'
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const OrderItems = mongoose.model("order_items", OrderItemsSchema);
module.exports = OrderItems;