const { matchedData } = require("express-validator");
const { handleError } = require("../../middleware/utils");
const { userExists } = require("../../middleware/auth/userExists");
const {
  setUserInfo,
  generateToken,
  registerUser,
  registerAdoptionProcess,
} = require("./helpers");

const register = async (req, res) => {
  try {
    req = matchedData(req);

    const doesUserExists = await userExists(req.email, req.role);
    if (!doesUserExists) {
      const item = await registerUser(req);
      const userInfo = await setUserInfo(item);
      const data = {
        token: generateToken(userInfo._id),
        user: userInfo,
      };
      if (req.role === "adopter") {
        data.adoptionProcess = await registerAdoptionProcess(req);
      }
      res.status(201).json(data);
    }
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { register };
