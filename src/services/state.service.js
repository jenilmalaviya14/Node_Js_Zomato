const State = require("../models/state")

const createState = async (reqBody) => {
    return State.create(reqBody)
};

const listState = async () => {
    return State.find()
};

const getId = async (id) => {
    return State.findById(id);
};

const deleteState = async (Id) => {
    return State.findByIdAndDelete(Id)
};

const updateState = async (Id, updatebody) => {
    return State.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createState, listState, deleteState, getId, updateState }