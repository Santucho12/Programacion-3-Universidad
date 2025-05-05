const express = require('express');

// Import required modules

// Initialize the app
const app = express();

// Set the port
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});