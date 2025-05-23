const { DataTypes } = require('sequelize');
const { sequelize } = require('./../config/db.js');
const { Paciente } = require('./paciente.entity.js');

const Turno = sequelize.define('Turno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: {
    type: DataTypes.DATEONLY, // Solo la fecha (sin hora)
    allowNull: false
  },
  hora: {
    type: DataTypes.STRING, // Puede ser "09:30", "14:00", etc.
    allowNull: false
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = { Turno };
