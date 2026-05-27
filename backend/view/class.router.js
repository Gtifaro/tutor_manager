const express = require("express")
const router = express.Router()
const classController = require("../controller/class.controller")

router.get("/", classController.getAll)

module.exports = router