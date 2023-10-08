const { restTypeService } = require("../services")

/* ------------------------- Create restType controller ------------------------- */

const createrestType = async (req, res) => {
    try {
        const reqBody = req.body
        const restType = await restTypeService.createrestType(reqBody);
        if (!restType) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "restType create successfully!",
            data: { restType }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List restType controller ----------------------- */

const listrestType = async (req, res) => {
    try {
        const restType = await restTypeService.listrestType();

        if (!restType) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "restType List Successfully!",
            data: { restType }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete restType Controller ---------------------- */

const deleterestType = async (req, res) => {
    try {
        const id = req.params.Id
        const restType = await restTypeService.listrestType();
        if (!restType) {
            throw new Error("Please Providde restTypeId!");
        };
        await restTypeService.deleterestType(id)

        res.status(200).json({
            success: true,
            message: "restType Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update restType controller ---------------------- */

const updaterestType = async (req, res) => {
    try {
        const id = req.params.id;
        const restType = await restTypeService.getId(id);
        if (!restType) {
            throw new Error("Mobile not found!")
        }
        await restTypeService.updaterestType(id, req.body)
        res.status(200).json({
            success: true,
            message: "restType Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createrestType, listrestType, deleterestType, updaterestType }