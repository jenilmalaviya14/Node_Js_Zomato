const restType = require("../models/restType")

const createrestType = async (reqBody) => {
    return restType.create(reqBody)
};

const listrestType = async () => {
    return restType.find().populate({ path: "rest_details" })
};

const getId = async (id) => {
    return restType.findById(id);
};

const deleterestType = async (Id) => {
    return restType.findByIdAndDelete(Id)
};

const updaterestType = async (Id, updatebody) => {
    return restType.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createrestType, listrestType, deleterestType, getId, updaterestType }