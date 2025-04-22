// index.js
const express = require('express');
const app = express();
const port = 3000;

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views'); // carpeta donde estarán tus plantillas EJS

// Ruta para renderizar una plantilla
app.get('/', (req, res) => {
    const data = { title: 'Mi Proyecto en Node.js', message: '¡Hola, mund3o45676576576577654oo!' };
    res.render('index', data); // Renderiza la plantilla "index.ejs" con los datos
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
