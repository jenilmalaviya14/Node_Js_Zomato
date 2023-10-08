const { stateService } = require("../services");

/* ------------------------- Create State controller ------------------------- */

const createState = async (req, res) => {
  try {

    const reqBody = req.body

    const State = await stateService.createState(reqBody);
    if (!State) {
      throw new Error("something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: ("State Successfully Create"),
      data: { State }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* ----------------------- List State controller ----------------------- */

const listState = async (req, res) => {
  try {
    const State = await stateService.listState();
    if (!State) {
      throw new Error("mething wen twrong, please try again or later!")
    }
    res.status(200).json({
      success: true,
      message: ("State Successfully Get"),
      data: { State }
    })
  } catch (error) {
    res.status().json({ success: false, message: error.message })
  }
};

/* ---------------------- Delete State Controller ---------------------- */

const deleteState = async (req, res) => {
  try {
    const id = req.params.Id
    const State = await stateService.listState();
    if (!State) {
      throw new Error("Please Providde UserId!");
    }
    await stateService.deleteState(id)

    res.status(200).json({
      success: true,
      message: (`State Successfully delete`)
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* ---------------------- Update State controller ---------------------- */

const updateState = async (req, res) => {
  try {
    const StateId = req.params.Id;

    const cateExists = await stateService.getId(StateId);
    if (!cateExists) {
      throw new Error("State not found!");
    }

    await stateService.updateState(StateId, req.body);

    res.status(200).json({
      success: true,
      message: "State details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createState, listState, deleteState, updateState };


