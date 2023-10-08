const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
    comment: {
        type: String,
        trim: true
    },
    Raiting: {
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

const Reviews = mongoose.model("reviews", ReviewsSchema);
module.exports = Reviews;