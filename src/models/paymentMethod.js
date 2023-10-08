const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    Amount: {
        type: Number,
        trim: true
    },
    Payment_method: {
        type: String,
        trim: true
    },
    Card_number: {
        type: Number,
        trim: true
    },
    Card_holder_name: {
        type: String,
        trim: true
    },
    Exp_date: {
        type: Number,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Payment = mongoose.model("payment", PaymentSchema);
module.exports = Payment;