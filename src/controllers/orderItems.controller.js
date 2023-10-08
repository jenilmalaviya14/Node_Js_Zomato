const { orderItemsService } = require("../services")

/* ------------------------- Create orderItems controller ------------------------- */

const createorderItems = async (req, res) => {
    try {
        const reqBody = req.body
        const orderItems = await orderItemsService.createorderItems(reqBody);
        if (!orderItems) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "orderItems create successfully!",
            data: { orderItems }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List orderItems controller ----------------------- */

const listorderItems = async (req, res) => {
    try {
        const orderItems = await orderItemsService.listorderItems();

        if (!orderItems) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "orderItems List Successfully!",
            data: { orderItems }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete orderItems Controller ---------------------- */

const deleteorderItems = async (req, res) => {
    try {
        const id = req.params.Id
        const orderItems = await orderItemsService.listorderItems();
        if (!orderItems) {
            throw new Error("Please Providde orderItemsId!");
        };
        await orderItemsService.deleteorderItems(id)

        res.status(200).json({
            success: true,
            message: "orderItems Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update orderItems controller ---------------------- */

const updateorderItems = async (req, res) => {
    try {
        const id = req.params.id;
        const orderItems = await orderItemsService.getId(id);
        if (!orderItems) {
            throw new Error("Mobile not found!")
        }
        await orderItemsService.updateorderItems(id, req.body)
        res.status(200).json({
            success: true,
            message: "orderItems Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createorderItems, listorderItems, deleteorderItems, updateorderItems }