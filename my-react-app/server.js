// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

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

// Configurar sesión
app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true
}));

// Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());

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

// Configurar Passport con FacebookStrategy
passport.use(new FacebookStrategy({
    clientID: '721619496532992',
    clientSecret: '4fa0352ecf0c8275e1fe4d6e19296844',
    callbackURL: 'http://localhost:5000/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email']
},

function(accessToken, refreshToken, profile, done) {
    // Aquí deberías buscar o crear un usuario en tu base de datos usando la información de `profile`
    // profile.id puede usarse como identificador único en tu base de datos
    return done(null, profile);
}));

// Configurar Passport con GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: '530574473657-ub0npm80e7qgo1vok4cocekorqjio2gl.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    function(accessToken, refreshToken, profile, done) {
        // Aquí deberías buscar o crear un usuario en tu base de datos usando la información de `profile`
        // profile.id puede usarse como identificador único en tu base de datos
        return done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

// Rutas de autenticación de Facebook
app.get('/auth/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
);

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
        // Aquí puedes redirigir al usuario a la página deseada después del inicio de sesión exitoso
        res.redirect('./Home');
    }
);

// Rutas de autenticación de Google
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/Home', (req, res) => {
    res.send('¡Autentificacion con Google Exitosa!');
});

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Aquí puedes redirigir al usuario a la página deseada después del inicio de sesión exitoso
    res.redirect('./Home');
  }
);


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