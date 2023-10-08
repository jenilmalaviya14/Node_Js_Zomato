const mongoose = require("mongoose");

const restTypeSchema = new mongoose.Schema({
    Rest_type: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
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

const RestType = mongoose.model("rest_type", restTypeSchema);
module.exports = RestType;