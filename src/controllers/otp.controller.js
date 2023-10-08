const { otpService } = require("../services")

/* ------------------------- Create otp controller ------------------------- */

const createOtp = async (req, res) => {
    try {
        const reqBody = req.body
        const otp = await otpService.createOtp(reqBody);
        if (!otp) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "otp create successfully!",
            data: { otp }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List otp controller ----------------------- */

const listOtp = async (req, res) => {
    try {
        const otp = await otpService.listOtp();

        if (!otp) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "otp List Successfully!",
            data: { otp }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete otp Controller ---------------------- */

const deleteOtp = async (req, res) => {
    try {
        const id = req.params.Id
        const otp = await otpService.listOtp();
        if (!otp) {
            throw new Error("Please Providde otpId!");
        };
        await otpService.deleteOtp(id)

        res.status(200).json({
            success: true,
            message: "otp Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update otp controller ---------------------- */

const updateOtp = async (req, res) => {
    try {
        const id = req.params.id;
        const otp = await otpService.getId(id);
        if (!otp) {
            throw new Error("Mobile not found!")
        }
        await otpService.updateOtp(id, req.body)
        res.status(200).json({
            success: true,
            message: "otp Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createOtp, listOtp, deleteOtp, updateOtp }