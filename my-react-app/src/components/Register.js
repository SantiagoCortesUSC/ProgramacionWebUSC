// Registro.js
import React, { useState } from 'react';
import './styles_Login.css'; // Asegúrate de importar tu hoja de estilos

function Registro() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Lógica para manejar el registro de usuario
        // Puedes utilizar fetch u otra biblioteca para realizar una solicitud al backend
    };

    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Registrarse</title>
                <link rel="stylesheet" href="styles_login.css" />
            </head>

            <body>
                <img src="icono_pagina.png" alt="Logo" className="logo" />

                <div className="register-container">
                    <h2>Registrarse</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Usuario" />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Correo electrónico" />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Contraseña" />
                        </div>
                        <div className="form-group">
                            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Confirmar contraseña" />
                        </div>
                        <button type="submit">Registrarse</button>
                    </form>
                </div>
            </body>
        </div>
    );
}

export default Registro;
