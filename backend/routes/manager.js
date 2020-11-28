const express = require("express");
const router = express.Router();

const { loginUser } = require("../controllers/managerAuth");

router.post("/login", loginUser);

module.exports = router;
