const { Turno } = require('../models/sqlite/entities/turno.entity.js');

const getTurnosByPacienteId = async (idPaciente) => {
  return await Turno.findAll({ where: { pacienteId: idPaciente } });
};

const deleteTurnoById = async (idTurno) => {
  const turno = await Turno.findByPk(idTurno);
  if (!turno) return null;
  await turno.destroy();
  return turno;
};

// 🔧 ACTUALIZADO: incluir hora en la creación
const createTurno = async ({ fecha, hora, motivo, pacienteId }) => {
  return await Turno.create({ fecha, hora, motivo, pacienteId });
};

module.exports = {
  getTurnosByPacienteId,
  deleteTurnoById,
  createTurno
};
