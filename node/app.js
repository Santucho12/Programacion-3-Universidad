const express = require('express');
const { multiplicar } = require('./matematica');

// Inicializar la app
const app = express();

// Configurar el puerto
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Mostrar el resultado de la multiplicación
console.log(multiplicar(6, 52));

// Iniciar el servidor
app.listen(PORT , () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
