const { paymentMethodService } = require("../services")

/* ------------------------- Create paymentMethod controller ------------------------- */

const createpaymentMethod = async (req, res) => {
    try {
        const reqBody = req.body
        const paymentMethod = await paymentMethodService.createpaymentMethod(reqBody);
        if (!paymentMethod) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "paymentMethod create successfully!",
            data: { paymentMethod }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List paymentMethod controller ----------------------- */

const listpaymentMethod = async (req, res) => {
    try {
        const paymentMethod = await paymentMethodService.listpaymentMethod();

        if (!paymentMethod) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "paymentMethod List Successfully!",
            data: { paymentMethod }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete paymentMethod Controller ---------------------- */

const deletepaymentMethod = async (req, res) => {
    try {
        const id = req.params.Id
        const paymentMethod = await paymentMethodService.listpaymentMethod();
        if (!paymentMethod) {
            throw new Error("Please Providde paymentMethodId!");
        };
        await paymentMethodService.deletepaymentMethod(id)

        res.status(200).json({
            success: true,
            message: "paymentMethod Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update paymentMethod controller ---------------------- */

const updatepaymentMethod = async (req, res) => {
    try {
        const id = req.params.id;
        const paymentMethod = await paymentMethodService.getId(id);
        if (!paymentMethod) {
            throw new Error("Mobile not found!")
        }
        await paymentMethodService.updatepaymentMethod(id, req.body)
        res.status(200).json({
            success: true,
            message: "paymentMethod Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createpaymentMethod, listpaymentMethod, deletepaymentMethod, updatepaymentMethod }