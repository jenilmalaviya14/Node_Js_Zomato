const Otp = require("../models/otp")

const createOtp = async (reqBody) => {
    return Otp.create(reqBody)
};

const listOtp = async () => {
    return Otp.find().populate({path : ""})
};

const getId = async (id) => {
    return Otp.findById(id);
};

const deleteOtp = async (Id) => {
    return Otp.findByIdAndDelete(Id)
};

const updateOtp = async (Id, updatebody) => {
    return Otp.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createOtp, listOtp, deleteOtp, getId, updateOtp }