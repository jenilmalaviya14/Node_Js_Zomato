const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true
    },
    last_name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    telephone: {
        type: Number,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        enum: ["admin", "user", "subadmin"],
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

const User = mongoose.model("user", UserSchema);
module.exports = User;