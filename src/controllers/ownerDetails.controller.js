const { ownerDetailsService } = require("../services")

/* ------------------------- Create ownerDetails controller ------------------------- */

const createownerDetails = async (req, res) => {
    try {
        const reqBody = req.body
        const ownerDetails = await ownerDetailsService.createownerDetails(reqBody);
        if (!ownerDetails) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "ownerDetails create successfully!",
            data: { ownerDetails }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List ownerDetails controller ----------------------- */

const listownerDetails = async (req, res) => {
    try {
        const ownerDetails = await ownerDetailsService.listownerDetails();

        if (!ownerDetails) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "ownerDetails List Successfully!",
            data: { ownerDetails }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete ownerDetails Controller ---------------------- */

const deleteownerDetails = async (req, res) => {
    try {
        const id = req.params.Id
        const ownerDetails = await ownerDetailsService.listownerDetails();
        if (!ownerDetails) {
            throw new Error("Please Providde ownerDetailsId!");
        };
        await ownerDetailsService.deleteownerDetails(id)

        res.status(200).json({
            success: true,
            message: "ownerDetails Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update ownerDetails controller ---------------------- */

const updateownerDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const ownerDetails = await ownerDetailsService.getId(id);
        if (!ownerDetails) {
            throw new Error("Mobile not found!")
        }
        await ownerDetailsService.updateownerDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: "ownerDetails Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createownerDetails, listownerDetails, deleteownerDetails, updateownerDetails }