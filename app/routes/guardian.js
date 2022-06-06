const express = require("express");
const router = express.Router();
const trimRequest = require('trim-request');

const {
    getGuardian,
  } = require('../controllers/guardian');

const {
    validateGetGuardian,
  } = require('../controllers/guardian/validators');

/*
 * Get item route
 */
router.get(
    '/:id',
    trimRequest.all,
    validateGetGuardian,
    getGuardian
  );

module.exports = router
