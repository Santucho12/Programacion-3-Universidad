const { DataTypes } = require('sequelize');
const { sequelize } = require('./../config/db.js');

const Paciente = sequelize.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,  // Sequelize no crea ni actualiza createdAt ni updatedAt
});

// Ya no hace falta esta función porque no usás password por paciente
// Paciente.prototype.setPassword = function(password) {
//   this.password = password;
// };

module.exports = { Paciente };
