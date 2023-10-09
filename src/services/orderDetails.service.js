const orderDetails = require("../models/orderDetails")

const createorderDetails = async (reqBody) => {
    return orderDetails.create(reqBody)
};

const listorderDetails = async () => {
    return orderDetails.find().populate({ path: "user" }).populate({ path: "rest_details", select: ["Rest_name"] })
};

const getId = async (id) => {
    return orderDetails.findById(id);
};

const deleteorderDetails = async (Id) => {
    return orderDetails.findByIdAndDelete(Id)
};

const updateorderDetails = async (Id, updatebody) => {
    return orderDetails.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createorderDetails, listorderDetails, deleteorderDetails, getId, updateorderDetails }