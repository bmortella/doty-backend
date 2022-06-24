const express = require("express");
const router = express.Router();
const trimRequest = require("trim-request");

const { getAdopterForm } = require("../controllers/adoptionProcess");

const { validateGetAdopterForm } = require("../controllers/adoptionProcess/validators");

/*
 * Get item route
 */
router.get("/process/:id", trimRequest.all, validateGetAdopterForm, getAdopterForm);

module.exports = router;
