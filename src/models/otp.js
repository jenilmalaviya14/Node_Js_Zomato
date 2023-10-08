const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    User_phone: {
        type: Number,
        trim: true
    },
    User_email: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Otp = mongoose.model("otp", otpSchema);
module.exports = Otp;