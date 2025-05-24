const {Router} = require('express');
const  {verifyTokenMiddleware}  = require('../middlewares/verifyToken.middleware.js');
const pacientesController = require('../controllers/API/pacientes.controller.js');

const rutaPacientes = Router();

//para poner la contraseña
rutaPacientes.post('/login',pacientesController.login)
rutaPacientes.get('/', verifyTokenMiddleware, pacientesController.getPacientes);
rutaPacientes.post('/', verifyTokenMiddleware, pacientesController.crearPaciente);
rutaPacientes.put('/:id', verifyTokenMiddleware, pacientesController.modificarPaciente);
rutaPacientes.delete('/:id', verifyTokenMiddleware, pacientesController.borrarPaciente);

//Otras rutas CRUD


module.exports = rutaPacientes;

