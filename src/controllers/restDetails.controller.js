const { restDetailsService } = require("../services")

/* ------------------------- Create restDetails controller ------------------------- */

const createrestDetails = async (req, res) => {
    try {
        const reqBody = req.body
        const restDetails = await restDetailsService.createrestDetails(reqBody);
        if (!restDetails) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "restDetails create successfully!",
            data: { restDetails }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List restDetails controller ----------------------- */

const listrestDetails = async (req, res) => {
    try {
        const restDetails = await restDetailsService.listrestDetails();

        if (!restDetails) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "restDetails List Successfully!",
            data: { restDetails }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete restDetails Controller ---------------------- */

const deleteresDetails = async (req, res) => {
    try {
        const id = req.params.Id
        const restDetails = await restDetailsService.listrestDetails();
        if (!restDetails) {
            throw new Error("Please Providde restDetailsId!");
        };
        await restDetailsService.deleteresDetails(id)

        res.status(200).json({
            success: true,
            message: "restDetails Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update restDetails controller ---------------------- */

const updateresDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const restDetails = await restDetailsService.getId(id);
        if (!restDetails) {
            throw new Error("Mobile not found!")
        }
        await restDetailsService.updateresDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: "restDetails Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createrestDetails, listrestDetails, deleteresDetails, updateresDetails }