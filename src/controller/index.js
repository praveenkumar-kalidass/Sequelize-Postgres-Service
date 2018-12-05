const express = require('express');
const employee = require('./Employee');
const router = express.Router();

router.use("/employee", employee);

module.exports = router;
