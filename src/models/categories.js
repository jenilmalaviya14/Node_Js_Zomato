const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
    Categories_name: {
        type: String,
        trim: true
    },
    Categories_desc: {
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
    })

const categories = mongoose.model("categories", CategoriesSchema);
module.exports = categories;