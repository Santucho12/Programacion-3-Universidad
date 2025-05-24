const home = async (req, res) => {
    res.render('index', {
        title: 'Mi aplicación de Turnos',
        message: 'Gestión de Turnos Médicos',
        showFeatures: true,
        features: [
            'Ver turnos',
            'Registrar turnos',
            'Cancelar turnos',
            'Ver pacientes',
            'Registrar pacientes',
            'Cancelar pacientes'
        ]
    });
};

module.exports = {
    home
};


