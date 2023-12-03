// Login.js
import React, { useState } from 'react';
import { login, register } from '../services/api'; // Ajusta la ruta según tu estructura de archivos
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './styles_Login.css'; // Asegúrate de importar tu hoja de estilos
import img from './facebook.png'
import img2 from './google.png'
import logo from './icono_pagina.png'

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
                if (response.redirectTo) {
                    window.location.href = response.redirectTo;
                } else {
                    // Puedes realizar otras acciones necesarias después de un inicio de sesión exitoso
                }
            } else {
                // Manejar errores, por ejemplo, mostrar un mensaje de error
                console.error('Error en inicio de sesión:', response.message);
            }
        } catch (error) {
            // Manejar errores de la solicitud, por ejemplo, mostrar un mensaje de error
            console.error('Error en la solicitud de inicio de sesión:', error.message);
        }
    };

    const handleFacebookLogin = () => {
        // Redirigir al usuario a la ruta de autenticación de Facebook
        window.location.href = "http://localhost:5000/auth/facebook";
    };

    const handleGoogleLogin = () => {
        // Redirigir al usuario a la ruta de autenticación de Google
        window.location.href = "http://localhost:5000/auth/google";
    };


    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login</title>
                <link rel="stylesheet" href="styles_login.css" />
            </head>

            <body className='body_login'>
            <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
            </Link>

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
                    <img
                        src={img2}
                        alt='Iniciar Sesión con Google'
                        className='google-login-button'
                        onClick={handleGoogleLogin}
                    />
                    <img
                        src={img}
                        alt='Iniciar Sesion con Facebook'
                        className='facebook-login-button'
                        onClick={console.log("Autentificacion con Facebook Exitosa")}
                    />
                    <span>No tienes cuenta? <Link to="/Register">Regístrate</Link></span>
                    

                </div>
            </body>
        </div>
    );
}

export default Login;
