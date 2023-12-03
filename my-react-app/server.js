// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:3000', // Reemplaza con la URL de tu aplicación React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

// Configurar middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Configurar la conexión a MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root', // Tu usuario de MySQL
    password: 'admin', // Tu contraseña de MySQL
    database: 'club_lectura',
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error de conexión a MySQL: ' + err.stack);
        return;
    }
    console.log('Conectado a MySQL como ID ' + db.threadId);
});

// Ruta base raiz
app.get('/', (req, res) => {
    res.send('¡Bienvenido al servidor backend!');
    
});

// Rutas para el login y registro
app.post('/login', (req, res) => {
    console.log('Recibida solicitud de inicio de sesión:', req.body);

    const { usernameOrEmail, password } = req.body;

    // Realizar la lógica para verificar las credenciales en la base de datos
    // (Ejemplo: consulta a la base de datos)
    const query = 'SELECT * FROM usuarios WHERE (usuarios = ? OR correo = ?) AND contraseña = ?';
    db.query(query, [usernameOrEmail, usernameOrEmail, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            if (result.length > 0) {
                res.status(200).json({ success: 'Inicio de sesión exitoso' });
                res.redirect('/home');
            } else {
                res.status(401).json({ error: 'Credenciales incorrectas' });
            }
        }
    });
});

app.post('/register', (req, res) => {
    const { usuarios, correo, contraseña } = req.body;

    // Realizar la lógica para registrar al nuevo usuario en la base de datos
    // (Ejemplo: inserción en la base de datos)
    const query = 'INSERT INTO usuarios (usuarios, correo, contraseña) VALUES (?, ?, ?)';
    db.query(query, [usuarios, correo, contraseña], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.status(201).json({ success: 'Usuario registrado exitosamente' });
        }
    });
});

app.get('/prueba', (req, res) => {
    // Realizar la lógica para obtener todos los usuarios de la base de datos
    const query = 'select * from usuarios';
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error interno del servidor' });
        } else {
            res.status(200).json({ usuarios: result });
        }
    });
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend iniciado en http://localhost:${port}`);
});
