const Empleados = require('../models/empleados');

const controller = {};

controller.getEmpleados = async (req , res) => {
    listaEmpleados = await Empleados.find();       
    res.json(listaEmpleados);
};

controller.addEmpleados = async (req , res) => {
    Empleados.insertMany(req.body)
        .then(msg => res.json({status: "Empleado agregado exitosamente"}))
        .catch(err => res.json(err))
    
};

controller.deleteEmpleado = async (req , res) => {
    await Empleados.findOneAndRemove({_id: req.params.id});
    res.json({status:"Empleado fue eliminado"});
};



module.exports = controller;