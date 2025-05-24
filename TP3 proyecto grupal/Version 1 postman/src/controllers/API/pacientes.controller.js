const pacientesModel = require('../../models/sqlite/paciente.model.js');
const Config = require('../../config/config.js');
const jwt = require('jsonwebtoken');

class PacientesController {

  async getPacientes(req, res) {
    try {
      const pacientes = await pacientesModel.getPacientesModel();
      res.status(200).json(pacientes);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async crearPaciente(req, res) {
    try {
      const { dni, nombre, apellido, email } = req.body;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        throw new Error('El formato del email es incorrecto');
      }
      if (nombre === null || nombre === undefined || nombre === "") {
        throw new Error('El nombre es obligatorio');
      }
      if (apellido === null || apellido === undefined || apellido === "") {
        throw new Error('El apellido es obligatorio');
      }
      if (dni === null || dni === undefined || dni === "") {
        throw new Error('El dni es obligatorio');
      }

      const paciente = await pacientesModel.crearPacienteModel({ dni, nombre, apellido, email });
      res.status(201).json(paciente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async borrarPaciente(req, res) {
    try {
      const id = req.params.id;
      const paciente = await pacientesModel.borrarPacienteModel(id);
      res.status(200).json(paciente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async modificarPaciente(req, res) {
    try {
      const id = req.params.id;
      const { dni, nombre, apellido, email } = req.body;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('El formato del email es incorrecto');
      }
      if (nombre === null || nombre === undefined || nombre === "") {
        throw new Error('El nombre es obligatorio');
      }
      if (apellido === null || apellido === undefined || apellido === "") {
        throw new Error('El apellido es obligatorio');
      }
      if (dni === null || dni === undefined || dni === "") {
        throw new Error('El dni es obligatorio');
      }

      const paciente = await pacientesModel.modificarPacienteModel(id, { dni, nombre, apellido, email });
      res.status(200).json(paciente);
    } catch (error) {
      res.status(400).json({ error: 'el paciente no se pudo actualizar' });
    }
  }

  async login(req, res) {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'La contraseña es obligatoria' });
    }
    if (password !== Config.loginPassword) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { role: 'admin' },
      Config.secretWord,
      { expiresIn: Config.expiresIn }
    );

    res.status(200).json({ token });
  }
}

module.exports = new PacientesController();