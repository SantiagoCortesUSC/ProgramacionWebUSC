// Home.js Hola
import React from 'react';
import './styles_Home.css'; // Asegúrate de importar tu hoja de estilos

function Home() {
    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Home</title>
                <link rel="stylesheet" href="Styles_Home.css" />
            </head>

            <body>
                <header className="encabezado">
                    <nav>

                        <div className="navegacion">
                            <a href="">Club de lectura</a>
                            <a href="">Libros</a>
                            <a href="">Mis Libros</a>
                        </div>
                        
                        <div className="login">
                            <img src="icono_usuario.png" alt="icono_usuario" className="icono" />
                            <a href="" style={{ color: 'black', marginLeft: '20px', padding: '0 20px' }}>Login</a>
                        </div>

                        <div className="usuario">
                            <img src="icono_usuario.png" alt="icono_usuario" className="icono" />
                            <a href="" style={{ color: 'black', marginLeft: '20px', padding: '0 20px' }}>nombre usuario</a>
                        </div>
                    </nav>
                </header>

                <main>
                    <h1><li>Libros Destacados</li></h1>
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>Comunidad</h1>

                    <section id="Libro_destacado">
                        <div className="libros_destacados">
                            <div className="grid_columnas">
                                <div className="grid_filas">
                                    <a href="">
                                        <img src="portada.jpg" alt="" />
                                        <h3>libro 1</h3>
                                    </a>
                                </div>
                                <div className="grid_filas">
                                    <img src="portada.jpg" alt="" />
                                    <h3>libro 1</h3>
                                </div>
                                <div className="grid_filas">
                                    <img src="portada.jpg" alt="" />
                                    <h3>libro 1</h3>
                                </div>
                                <div className="grid_filas">
                                    <img src="portada.jpg" alt="" />
                                    <h3>libro 1</h3>
                                </div>
                                <div className="grid_filas">
                                    <img src="portada.jpg" alt="" />
                                    <h3>libro 1</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="Comunidad">
                        <div className="comunidad">
                            <li>Hola</li>
                            <li>Usuario: El último libro es muy interesante.</li>
                        </div>
                    </section>
                </main>

                <footer>
                    <div><p>Pie de pagina</p></div>
                </footer>

                <script>
                    document.addEventListener('DOMContentLoaded', function () {
                        window.addEventListener('scroll', function () {
                            var header = document.querySelector('.encabezado');
                            var scrollPosition = window.scrollY;

                            if (scrollPosition >= 50) {
                                header.classList.add('scrolled');
                            } else {
                                header.classList.remove('scrolled');
                            }
                        })
                    })
                </script>
            </body>
        </div>
    );
}

export default Home;
