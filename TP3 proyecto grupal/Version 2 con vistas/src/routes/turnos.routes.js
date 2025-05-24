const { Router } = require('express');
const { listByPaciente, deleteTurno,createTurno } = require('../controllers/API/turnos.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');

const rutaTurnos = Router();

rutaTurnos.get('/:idPaciente', verifyTokenMiddleware, listByPaciente);
rutaTurnos.delete('/:idTurno', verifyTokenMiddleware, deleteTurno);
rutaTurnos.post('/', verifyTokenMiddleware, createTurno);

module.exports = rutaTurnos;
