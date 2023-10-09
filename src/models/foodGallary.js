const mongoose = require("mongoose");
const config = require("../config/config")

const FoodGallarySchema = new mongoose.Schema({
    Food_name: {
        type: String,
        trim: true
    },
    Price: {
        type: Number,
        trim: true
    },
    Desc: {
        type: String,
        trim: true
    },
    Food_img: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    },
    categories: {
        type: mongoose.Types.ObjectId,
        ref: 'categories'
    },
    rest_details: {
        type: mongoose.Types.ObjectId,
        ref: 'rest_details'
    },
    rest_type: {
        type: mongoose.Types.ObjectId,
        ref: 'rest_type'
    },
},
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.Food_img) {
                    data.Food_img = `${config.base_url}images/${data.Food_img}`;
                }
            },
        },
    });

const Foodgallary = mongoose.model("foodgallary", FoodGallarySchema);
module.exports = Foodgallary;