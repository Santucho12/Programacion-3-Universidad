
const { Paciente } = require('../sqlite/entities/paciente.entity.js');

// Obtener todos los pacientes
async function getPacientesModel() {
  try {
    const pacientes = await Paciente.findAll();
    if (pacientes.length === 0) throw new Error('no hay pacientes');
    return pacientes;
  } catch (error) {
    throw error;
  }
}

// Crear paciente
async function crearPacienteModel({ dni, nombre, apellido, email }) {
  try {
    const existe = await Paciente.findOne({ where: { dni } });
    if (existe) throw new Error('El paciente ya existe');

    const nuevoPaciente = await Paciente.create({ dni, nombre, apellido, email });
    return nuevoPaciente;
  } catch (error) {
    throw error;
  }
}

// Borrar paciente por id
async function borrarPacienteModel(id) {
  try {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) throw new Error('Paciente no encontrado');

    await paciente.destroy();
    return paciente;
  } catch (error) {
    throw error;
  }
}

// Modificar paciente por id
async function modificarPacienteModel(id, { dni, nombre, apellido, email }) {
  try {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) throw new Error('Paciente no encontrado');

    paciente.dni = dni;
    paciente.nombre = nombre;
    paciente.apellido = apellido;
    paciente.email = email;

    await paciente.save();
    return paciente;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPacientesModel,
  crearPacienteModel,
  borrarPacienteModel,
  modificarPacienteModel
};