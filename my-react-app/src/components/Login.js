// Login.js
import React, { useState } from 'react';
import { login, register } from '../services/api'; // Ajusta la ruta según tu estructura de archivos
import './styles_Login.css'; // Asegúrate de importar tu hoja de estilos


function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await login({ usernameOrEmail, password });

            if (response.success) {
                // Inicio de sesión exitoso, realizar acciones necesarias
                console.log('Inicio de sesión exitoso');
            } else {
                // Manejar errores, por ejemplo, mostrar un mensaje de error
                console.error('Error en inicio de sesión:', response.message);
            }
        } catch (error) {
            // Manejar errores de la solicitud, por ejemplo, mostrar un mensaje de error
            console.error('Error en la solicitud de inicio de sesión:', error.message);
        }
    };

    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login</title>
                <link rel="stylesheet" href="styles_login.css" />
            </head>

            <body>
                <img src="icono_pagina.png" alt="Logo" className="logo" />

                <div className="login-container">
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input type="text" id="usernameOrEmail" name="usernameOrEmail" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} required placeholder="Usuario o correo electrónico" />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Contraseña" />
                        </div>
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                    <p>No tienes cuenta? <a href="/registro">Regístrate</a></p>
                </div>
            </body>
        </div>
    );
}

export default Login;
