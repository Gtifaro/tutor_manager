const groupModel = require("../model/group.model");
const classModel = require("../model/class.model");

exports.getMonthSalary = async (req, res) => {
  try {
    let data = await classModel.find();
    console.log(data.length, data)
    res.json({salary: data.length});
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};
