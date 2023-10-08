const { userService, emailService } = require("../services");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const bcrypt = require("bcryptjs");

/* --------------------- Register/Create user controller -------------------- */

const createUser = async (req, res) => {
    try {
        const reqBody = req.body

        let option = {
            user_name: reqBody.user_name,
            email: reqBody.email,
            password: reqBody.password,
            telephone: reqBody.telephone,
            address: reqBody.address,
            role: reqBody.role,
            exp: moment().add(1, "days").unix(),
        };

        const haspassword = await bcrypt.hash(reqBody.password, 10);

        const token = await jwt.sign(option, config.jwt.secret_key);

        const filterData = {
            user_name: reqBody.user_name,
            email: reqBody.email,
            password: haspassword,
            telephone: reqBody.telephone,
            address: reqBody.address,
            role: reqBody.role,
            token: token,
        };

        const user = await userService.createUser(filterData);
        if (!user) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "user create successfully!",
            data: { user }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ------------------------ Get User list controller ------------------------ */

const listUser = async (req, res) => {
    try {
        const user = await userService.listUser();

        if (!user) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "user List Successfully!",
            data: { user }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ------------------------- Delete User Controller ------------------------- */

const deleteUser = async (req, res) => {
    try {
        const id = req.params.Id
        const user = await userService.listUser();
        if (!user) {
            throw new Error("Please Providde UserId!");
        };
        await userService.deleteUser(id)

        res.status(200).json({
            success: true,
            message: "user Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ------------------------- Update User Controller ------------------------- */

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getId(id);
        if (!user) {
            throw new Error("Mobile not found!")
        }
        await userService.updateUser(id, req.body)
        res.status(200).json({
            success: true,
            message: "user Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

const sendMail = async (req, res) => {
    try {
        const reqBody = req.body;
        const sendEmail = await emailService.sendMail(
            reqBody.email,
            reqBody.subject,
            reqBody.text
        );
        if (!sendEmail) {
            throw new Error("Something went wrong, please try again or later.");
        }

        res
            .status(200)
            .json({ success: true, message: "Email send successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createUser, listUser, deleteUser, updateUser, sendMail }