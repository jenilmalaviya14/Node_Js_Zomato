const { foodGallaryService } = require("../services")

/* ------------------------- Create foodGallary controller ------------------------- */

const createfoodGallary = async (req, res) => {
    try {
        const reqBody = req.body

        if (req.file) {
            reqBody.Food_img = req.file.filename;
        } else {
            throw new Error("Food image is required!");
        }

        const foodGallary = await foodGallaryService.createfoodGallary(reqBody);
        if (!foodGallary) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "foodGallary create successfully!",
            data: { foodGallary }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
}

/* ----------------------- List foodGallary controller ----------------------- */

const listfoodGallary = async (req, res) => {
    try {
        const foodGallary = await foodGallaryService.listfoodGallary();

        if (!foodGallary) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "foodGallary List Successfully!",
            data: { foodGallary }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete foodGallary Controller ---------------------- */

const deletefoodGallary = async (req, res) => {
    try {
        const id = req.params.Id
        const foodGallary = await foodGallaryService.listfoodGallary();
        if (!foodGallary) {
            throw new Error("Please Providde foodGallaryId!");
        };
        await foodGallaryService.deletefoodGallary(id)

        res.status(200).json({
            success: true,
            message: "foodGallary Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update foodGallary controller ---------------------- */

const updatefoodGallary = async (req, res) => {
    try {
        const id = req.params.id;
        const foodGallary = await foodGallaryService.getId(id);
        if (!foodGallary) {
            throw new Error("Mobile not found!")
        }
        await foodGallaryService.updatefoodGallary(id, req.body)
        res.status(200).json({
            success: true,
            message: "foodGallary Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createfoodGallary, listfoodGallary, deletefoodGallary, updatefoodGallary }