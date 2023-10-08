const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
    State_name: {
        type: String,
        trim: true
    },
    Capital_city: {
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

    const State = mongoose.model("state",StateSchema);
    module.exports=State;