const { matchedData } = require("express-validator");
const { handleError } = require("../../middleware/utils");
const { petExists } = require("./helpers/petExists");

const Pet = require("../../models/pet");
const { createItem } = require("../../middleware/db");

const createPet = async (req, res) => {
  try {
    const user = req.user;
    req = matchedData(req);
    const doesPetExists = await petExists(req.name, user._id);
    if (!doesPetExists) {
      res.status(201).json(
        await createItem(
          {
            name: req.name,
            sex: req.sex,
            size: req.size,
            age: req.age,
            guardian: user._id,
          },
          Pet
        )
      );
    }
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { createPet };
