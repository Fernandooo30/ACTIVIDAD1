const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/servicios', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'products.html'));
});

app.get('/marcas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'brands.html'));
});

app.get('/equipo', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'team.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Manejo del formulario de contacto
app.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
    res.send('Gracias por contactarnos. Pronto te responderemos.');
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
