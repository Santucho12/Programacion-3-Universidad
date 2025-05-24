const { Paciente } = require('../sqlite/entities/paciente.entity.js');

const getPacientesModel = () => Paciente.findAll();

const createPaciente = (data) => Paciente.create(data);

const deletePaciente = (id) => Paciente.destroy({ where: { id } });

const updatePaciente = (id, data) => Paciente.update(data, { where: { id } });

const findByDniAndEmail = (dni, email) => {
  return Paciente.findOne({ where: { dni, email } });
};
module.exports = {
  getPacientesModel,
  createPaciente,
  deletePaciente,
  updatePaciente,
  findByDniAndEmail
};
