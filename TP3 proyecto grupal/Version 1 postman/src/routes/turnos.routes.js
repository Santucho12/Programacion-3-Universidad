const { Router } = require('express');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');
const turnosController = require('../controllers/API/turnos.controller.js');

const rutaTurnos = Router();


rutaTurnos.get('/:idPaciente', verifyTokenMiddleware, turnosController.getTurnos);
rutaTurnos.delete('/:idTurno', verifyTokenMiddleware, turnosController.borrarTurno);
rutaTurnos.post('/', verifyTokenMiddleware, turnosController.crearTurno);


module.exports = rutaTurnos;
