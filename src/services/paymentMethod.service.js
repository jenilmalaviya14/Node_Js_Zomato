const paymentMethod = require("../models/paymentMethod")

const createpaymentMethod = async (reqBody) => {
    return paymentMethod.create(reqBody)
};

const listpaymentMethod = async () => {
    return paymentMethod.find().populate({path : "user"})
};

const getId = async (id) => {
    return paymentMethod.findById(id);
};

const deletepaymentMethod = async (Id) => {
    return paymentMethod.findByIdAndDelete(Id)
};

const updatepaymentMethod = async (Id, updatebody) => {
    return paymentMethod.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createpaymentMethod, listpaymentMethod, deletepaymentMethod, getId, updatepaymentMethod }