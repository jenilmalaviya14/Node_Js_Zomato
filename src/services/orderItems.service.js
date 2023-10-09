const orderItems = require("../models/orderItems")

const createorderItems = async (reqBody) => {
    return orderItems.create(reqBody)
};

const listorderItems = async () => {
    return orderItems.find().populate({ path: "foodgallary" }).populate({ path: "rest_details", select: ["Rest_name"] });
};

const getId = async (id) => {
    return orderItems.findById(id);
};

const deleteorderItems = async (Id) => {
    return orderItems.findByIdAndDelete(Id)
};

const updateorderItems = async (Id, updatebody) => {
    return orderItems.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createorderItems, listorderItems, deleteorderItems, getId, updateorderItems }