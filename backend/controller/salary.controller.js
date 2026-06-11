const classModel = require("../model/class.model");

exports.getMonthSalary = async (req, res) => {
  try {
    let data = await classModel.find();
    let filterData = data.filter(classItem => new Date(classItem.date).getMonth() === new Date().getMonth() && new Date(classItem.date).getFullYear() === new Date().getFullYear());
    console.log((filterData.length * 32250), filterData.length, filterData)
    res.json({salary: (filterData.length * 100)});
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};
