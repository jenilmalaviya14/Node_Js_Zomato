const ownerDetails = require("../models/ownerDetails")

const createownerDetails = async (reqBody) => {
    return ownerDetails.create(reqBody)
};

const listownerDetails = async () => {
    return ownerDetails.find()
};

const getId = async (id) => {
    return ownerDetails.findById(id);
};

const deleteownerDetails = async (Id) => {
    return ownerDetails.findByIdAndDelete(Id)
};

const updateownerDetails = async (Id, updatebody) => {
    return ownerDetails.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createownerDetails, listownerDetails, deleteownerDetails, getId, updateownerDetails }