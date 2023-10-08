const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    City_name: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    state : {
        type : mongoose.Types.ObjectId,
        ref : 'state'
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const City = mongoose.model("city", CitySchema);
module.exports = City;