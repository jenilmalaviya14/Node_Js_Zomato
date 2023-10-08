const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
    Owner_name: {
        type: String,
        trim: true
    },
    phone: {
        type: Number,
        trim: true
    },
    email: {
        type: String,
        trim: true
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
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Ownerdetails = mongoose.model("owner_details", OwnerSchema);
module.exports = Ownerdetails;