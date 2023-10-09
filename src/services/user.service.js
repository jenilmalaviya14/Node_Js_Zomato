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
const getUserByEmail = async (email) => {
    return User.findOne({ email });
};

const deleteUserByEmail = async (email) => {
    return User.findOneAndDelete({ email: email });
};

const updateUser = async (Id, updatebody) => {
    return User.findByIdAndUpdate(Id, { $set: updatebody })
};

const getAllUser = async (role) => {
    return await User.find(role);
};

module.exports = { createUser, listUser, deleteUser, getId, updateUser, deleteUserByEmail, getUserByEmail, getAllUser }