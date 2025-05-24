const { Router } = require('express');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');
const turnosController = require('../controllers/API/turnos.controller.js');

const rutaTurnos = Router();


rutaTurnos.get('/:idPaciente', verifyTokenMiddleware, turnosController.listarTurnos);
rutaTurnos.delete('/:idTurno', verifyTokenMiddleware, turnosController.deleteTurno);
rutaTurnos.post('/', verifyTokenMiddleware, turnosController.createTurno);


module.exports = rutaTurnos;
