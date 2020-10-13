const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Empleado = new Schema({
    nombre: String,
    apellido: String,
    cargo: String
} ,
{collection: 'listaEmpleados'}
);

module.exports = mongoose.model('Empleados' , Empleado);