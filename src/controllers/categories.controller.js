const { categoriesService } = require("../services")

/* ---------------------------- Create Caetgories controller --------------------------- */

const createCategories = async (req, res) => {
    try {
        const reqBody = req.body
        const categories = await categoriesService.createCategories(reqBody);
        if (!categories) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "categories create successfully!",
            data: { categories }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List Categories controller ----------------------- */

const listCategories = async (req, res) => {
    try {
        const categories = await categoriesService.listCategories();

        if (!categories) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "categories List Successfully!",
            data: { categories }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete Categories Controller ---------------------- */

const deleteCategories = async (req, res) => {
    try {
        const id = req.params.Id
        const categories = await categoriesService.listCategories();
        if (!categories) {
            throw new Error("Please Providde categoriesId!");
        };
        await categoriesService.deleteCategories(id)

        res.status(200).json({
            success: true,
            message: "categories Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update Categories controller ---------------------- */

const updateCategories = async (req, res) => {
    try {
        const id = req.params.id;
        const categories = await categoriesService.getId(id);
        if (!categories) {
            throw new Error("Mobile not found!")
        }
        await categoriesService.updateCategories(id, req.body)
        res.status(200).json({
            success: true,
            message: "categories Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createCategories, listCategories, deleteCategories, updateCategories }