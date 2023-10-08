const { cityService } = require("../services")

/* ------------------------- Create City controller ------------------------- */

const createCity = async (req, res) => {
    try {
        const reqBody = req.body
        const city = await cityService.createCity(reqBody);
        if (!city) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "city create successfully!",
            data: { city }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List city controller ----------------------- */

const listCity = async (req, res) => {
    try {
        const city = await cityService.listCity();

        if (!city) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "city List Successfully!",
            data: { city }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete city Controller ---------------------- */

const deleteCity = async (req, res) => {
    try {
        const id = req.params.Id
        const city = await cityService.listCity();
        if (!city) {
            throw new Error("Please Providde cityId!");
        };
        await cityService.deleteCity(id)

        res.status(200).json({
            success: true,
            message: "city Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update city controller ---------------------- */

const updateCity = async (req, res) => {
    try {
        const id = req.params.id;
        const city = await cityService.getId(id);
        if (!city) {
            throw new Error("Mobile not found!")
        }
        await cityService.updateCity(id, req.body)
        res.status(200).json({
            success: true,
            message: "city Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createCity, listCity, deleteCity, updateCity }