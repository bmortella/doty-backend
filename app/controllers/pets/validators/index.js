const { validateCreatePet } = require("./validateCreatePet");
const { validateDeletePet } = require("./validateDeletePet");
const { validateGetPets } = require("./validateGetPets");
const { validateEditPet } = require("./validateEditPet");

module.exports = {
  validateCreatePet,
  validateDeletePet,
  validateGetPets,
  validateEditPet,
};
