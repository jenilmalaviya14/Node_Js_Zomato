const { orderDetailsService } = require("../services")

/* ------------------------- Create orderDetails controller ------------------------- */

const createorderDetails = async (req, res) => {
    try {
        const reqBody = req.body
        const orderDetails = await orderDetailsService.createorderDetails(reqBody);
        if (!orderDetails) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "orderDetails create successfully!",
            data: { orderDetails }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List orderDetails controller ----------------------- */

const listorderDetails = async (req, res) => {
    try {
        const orderDetails = await orderDetailsService.listorderDetails();

        if (!orderDetails) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "orderDetails List Successfully!",
            data: { orderDetails }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete orderDetails Controller ---------------------- */

const deleteorderDetails = async (req, res) => {
    try {
        const id = req.params.Id
        const orderDetails = await orderDetailsService.listorderDetails();
        if (!orderDetails) {
            throw new Error("Please Providde orderDetailsId!");
        };
        await orderDetailsService.deleteorderDetails(id)

        res.status(200).json({
            success: true,
            message: "orderDetails Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update orderDetails controller ---------------------- */

const updateorderDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const orderDetails = await orderDetailsService.getId(id);
        if (!orderDetails) {
            throw new Error("Mobile not found!")
        }
        await orderDetailsService.updateorderDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: "orderDetails Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createorderDetails, listorderDetails, deleteorderDetails, updateorderDetails }