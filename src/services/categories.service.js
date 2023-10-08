const Categories = require("../models/categories")

const createCategories = async (reqBody) => {
    return Categories.create(reqBody)
};

const listCategories = async () => {
    return Categories.find()
};

const getId = async (id) => {
    return Categories.findById(id);
};

const deleteCategories = async (Id) => {
    return Categories.findByIdAndDelete(Id)
};

const updateCategories = async (Id, updatebody) => {
    return Categories.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = { createCategories, listCategories, deleteCategories, getId, updateCategories }