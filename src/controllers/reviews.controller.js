const { reviewsService } = require("../services")

/* ------------------------- Create Reviews controller ------------------------- */

const createReviews = async (req, res) => {
    try {
        const reqBody = req.body
        const Reviews = await reviewsService.createReviews(reqBody);
        if (!Reviews) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Reviews create successfully!",
            data: { Reviews }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ----------------------- List Reviews controller ----------------------- */

const listReviews = async (req, res) => {
    try {
        const Reviews = await reviewsService.listReviews();

        if (!Reviews) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "Reviews List Successfully!",
            data: { Reviews }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete Reviews Controller ---------------------- */

const deleteReviews = async (req, res) => {
    try {
        const id = req.params.Id
        const Reviews = await reviewsService.listReviews();
        if (!Reviews) {
            throw new Error("Please Providde ReviewsId!");
        };
        await reviewsService.deleteReviews(id)

        res.status(200).json({
            success: true,
            message: "Reviews Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update Reviews controller ---------------------- */

const updateReviews = async (req, res) => {
    try {
        const id = req.params.id;
        const Reviews = await reviewsService.getId(id);
        if (!Reviews) {
            throw new Error("Mobile not found!")
        }
        await reviewsService.updateReviews(id, req.body)
        res.status(200).json({
            success: true,
            message: "Reviews Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createReviews, listReviews, deleteReviews, updateReviews }