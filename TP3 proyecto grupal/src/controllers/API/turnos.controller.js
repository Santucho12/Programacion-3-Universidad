const {
  getTurnosByPacienteId,
  deleteTurnoById,
  createTurno
} = require('../../models/turno.model.js');

const listByPaciente = async (req, res) => {
  const { idPaciente } = req.params;
  try {
    const turnos = await getTurnosByPacienteId(idPaciente);
    res.json(turnos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener turnos.' });
  }
};

const deleteTurno = async (req, res) => {
  const { idTurno } = req.params;
  try {
    const deleted = await deleteTurnoById(idTurno);
    if (!deleted) {
      return res.status(404).json({ error: 'Turno no encontrado.' });
    }
    res.json({ message: 'Turno cancelado exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al cancelar el turno.' });
  }
};

// ✅ ACTUALIZADO: ahora espera también el campo "hora"
const createTurnoCtrl = async (req, res) => {
  const { fecha, hora, motivo, pacienteId } = req.body;

  if (!fecha || !hora || !motivo || !pacienteId) {
    return res.status(400).json({ error: 'Faltan datos obligatorios: fecha, hora, motivo y pacienteId.' });
  }

  try {
    const nuevoTurno = await createTurno({ fecha, hora, motivo, pacienteId });
    res.status(201).json(nuevoTurno);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el turno.' });
  }
};

module.exports = {
  listByPaciente,
  deleteTurno,
  createTurno: createTurnoCtrl
};
