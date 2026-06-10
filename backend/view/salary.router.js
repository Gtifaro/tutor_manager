const express = require("express")
const router = express.Router()
const salaryController = require("../controller/salary.controller.js")

router.get("/", salaryController.getMonthSalary)

module.exports = router