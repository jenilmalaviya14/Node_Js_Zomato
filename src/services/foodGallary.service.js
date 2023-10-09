const foodGallary = require("../models/foodGallary")

const createfoodGallary = async (reqBody) => {
    return foodGallary.create(reqBody)
};

const listfoodGallary = async () => {
    return foodGallary.find().populate({ path: "categories", select: ["Categories_name"] })
        .populate({ path: "rest_details", select: ["Rest_name"] })
        .populate({ path: "rest_type", select: ["Rest_type"] })
};

const getId = async (id) => {
    return foodGallary.findById(id);
};

const deletefoodGallary = async (Id) => {
    return foodGallary.findByIdAndDelete(Id)
};

const updatefoodGallary = async (Id, updatebody) => {
    return foodGallary.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createfoodGallary, listfoodGallary, deletefoodGallary, getId, updatefoodGallary }