const restDetails = require("../models/restDetails")

const createrestDetails = async (reqBody) => {
    return restDetails.create(reqBody)
};

const listrestDetails = async () => {
    return restDetails.find().populate({ path: "rest_type", select: ["Rest_type"] }).populate({path : "owner_details"})
};

const getId = async (id) => {
        return restDetails.findById(id);
};

const deleterestDetails = async (Id) => {
    return restDetails.findByIdAndDelete(Id)
};

const updaterestDetails = async (Id, updatebody) => {
    return restDetails.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createrestDetails, listrestDetails, deleterestDetails, getId, updaterestDetails }