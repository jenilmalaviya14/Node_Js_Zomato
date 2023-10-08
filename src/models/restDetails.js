const mongoose = require("mongoose");

const restDetailsSchema = new mongoose.Schema({
    Rest_name: {
        type: String,
        trim: true
    },
    Locaion: {
        type: String,
        trim: true
    },
    Rest_phone: {
        type: Number,
        trim: true
    },
    Reating: {
        type: String,
        trim: true
    },
    Open_time: {
        type: String,
        trim: true
    },
    Close_time: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    owner_details: {
        type: mongoose.Types.ObjectId,
        ref: 'owner_details'
    },
    rest_type: {
        type: mongoose.Types.ObjectId,
        ref: 'rest_type'
    }
},
    {
        timestamps: true,
        versionKey: false
    })

const restDetails = mongoose.model("rest_details", restDetailsSchema);
module.exports = restDetails;