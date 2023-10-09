const City = require("../models/city")

const createCity = async (reqBody) => {
    return City.create(reqBody)
};

const listCity = async () => {''
    return City.find().populate({ path: "state", select : ["State_name"] })
};

const getId = async (id) => {
    return City.findById(id);
};

const deleteCity = async (Id) => {
    return City.findByIdAndDelete(Id)
};

const updateCity = async (Id, updatebody) => {
    return City.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createCity, listCity, deleteCity, getId, updateCity }