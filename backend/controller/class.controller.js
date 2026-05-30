const classModel = require("../model/class.model");

exports.getAll = async (req, res) => {
  try {
    let data = await classModel.find();
    res.json(data);
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};

exports.create = async (req, res) => {
  try {
    let data = await classModel.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};

exports.update = async (req, res) => {
  try {
    let data = await classModel.findByIdAndUpdate(req.params.id, req.body);
    return res.status(204).json({message: "Clase actualizada con éxito"});
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};

exports.delete = async (req, res) => {
  try {
    let data = await classModel.findByIdAndDelete(req.params.id);
    return res.status(204).json({message: "Clase eliminada con éxito"});;
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};
