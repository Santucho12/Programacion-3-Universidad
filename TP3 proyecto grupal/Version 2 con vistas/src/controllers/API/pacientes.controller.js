const pacientesModel = require('../../models/sqlite/paciente.model.js');
const Config = require('../../config/config.js');
const jwt = require('jsonwebtoken');


class PacientesController {

  async list(req, res) {
    try {
      const pacientes = await pacientesModel.getPacientesModel();
      res.status(200).json(pacientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
  try {
    const { dni, nombre, apellido, email } = req.body;

    // Regex simple para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'El formato del email es inválido.' });
    }

    const nuevo = await pacientesModel.createPaciente({ dni, nombre, apellido, email });
    res.status(201).json(nuevo);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: `El dni '${req.body.dni}' ya está registrado.` });
    }
    res.status(400).json({ error: error.message });
  }
}


  async delete(req, res) {
    try {
      const id = req.params.id;
      const eliminado = await pacientesModel.deletePaciente(id);
      res.status(200).json(eliminado);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const { dni, nombre, apellido, email } = req.body;

      const actualizado = await pacientesModel.updatePaciente(id, { dni, nombre, apellido, email });

      if (actualizado[0] === 0) {
        return res.status(404).json({ message: 'Paciente no encontrado' });
      }

      res.status(200).json({ message: 'Paciente actualizado' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

async login(req, res) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'La contraseña es obligatoria' });
  }

  // Compara con la contraseña fija del .env
  if (password !== Config.loginPassword) {
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  // Si es correcta, creamos un token genérico para el admin o acceso
  const token = jwt.sign(
    { role: 'admin' },           // payload simple, indica que es un usuario autorizado
    Config.secretWord,
    { expiresIn: Config.expiresIn }
  );

  res.status(200).json({ token });
}


}

module.exports = new PacientesController();
