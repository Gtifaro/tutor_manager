const groupModel = require("../model/group.model");

exports.getAll = async (req, res) => {
  try {
    let data = await groupModel.find();
    res.json(data);
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};

exports.getById = async (req, res) => {
  try {
    let data = await groupModel.findById(req.params.id);
    res.json(data);
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};

exports.create = async (req, res) => {
  try {
    let data = await groupModel.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};

exports.update = async (req, res) => {
  try {
    let data = await groupModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json({message: "Clase actualizada con éxito"});
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};

exports.delete = async (req, res) => {
  try {
    let data = await groupModel.findByIdAndDelete(req.params.id);
    return res.status(204).end();
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error del servidor"});
  }
};
