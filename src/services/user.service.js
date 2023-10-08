const User = require("../models/user")

const createUser = async (reqBody) => {
    return User.create(reqBody)
};

const listUser = async () => {
    return User.find({ $or: [{ is_active: "true" }] })
};

const getId = async (id) => {
    return User.findById(id);
};

const deleteUser = async (Id) => {
    return User.findByIdAndDelete(Id)
};

const updateUser = async (Id, updatebody) => {
    return User.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createUser, listUser, deleteUser, getId, updateUser }