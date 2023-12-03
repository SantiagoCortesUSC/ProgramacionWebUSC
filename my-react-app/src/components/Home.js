// Home.js Hola
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

import './styles_Home.css'; // Asegúrate de importar tu hoja de estilos
import icono_usuario from './icono_usuario.png'
import portada1 from './portada.jpg'
import portada2 from './portada2.jpg'


function Home() {
    return (
        <div className='body_home'>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Home</title>
                <link rel="stylesheet" href="Styles_Home.css" />
            </head>

            <body className='body_home'>
                <header className="encabezado">
                    <nav>

                        <div className="navegacion">
                        <Link to="/">Club de lectura</Link>
                        <Link to="/libros">Libros</Link>
                        <Link to="/mis-libros">Mis Libros</Link>
                        </div>
                        
                        <div className="login">
                            <img src={icono_usuario} alt="icono_usuario" className="icono" />
                            <Link to="/login" style={{ color: 'black', marginLeft: '20px', padding: '0 20px' }}>Login</Link>
                        </div>

                        {/* <div className="usuario">
                            <img src="icono_usuario.png" alt="icono_usuario" className="icono" />
                            <a href="/Login" style={{ color: 'black', marginLeft: '20px', padding: '0 20px' }}>nombre usuario</a>
                        </div> */}
                    </nav>
                </header>

                <main>
                    <h1><li>Libros Destacados</li></h1>
                    <h1 className='cosas'>Comunidad</h1>

                    <section id="Libro_destacado">
                        <div className="libros_destacados">
                            <div className="grid_columnas">

                                <div className="grid_filas">
                                    <a href="">
                                        <img src={portada1} alt="" />
                                        <h3>libro 1</h3>
                                    </a>
                                </div>
                                <div className="grid_filas">
                                    <img src={portada2} alt="" />
                                    <h3>libro 1</h3>
                                </div>
                                {/* <div className="grid_filas">
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
                                </div> */}

                            </div>
                            <h1>¡Mas Libros Proximamente!</h1>
                        </div>
                    </section>

                    <section id="Comunidad">
                        <div className="comunidad">
                            <li>¡Acabo de terminar el libro del mes y estoy fascinado! ¿Alguien más notó ese giro inesperado al final?</li>
                            <li>La elección de este mes fue genial. Me encantó la profundidad de los personajes. ¿Qué libro sugieren para el próximo mes?</li>
                            <li>Me encanta cómo este club de lectura amplía mis horizontes literarios. ¡Descubrí un autor nuevo que ahora adoro!</li>
                            <li>¿Alguien más tuvo problemas para conectarse a la reunión virtual? ¡Quería discutir el libro!</li>
                            <li>Este mes no pude terminar el libro a tiempo, pero estoy ansioso por leer las discusiones y ponerme al día.</li>
                            <li>El tema de este mes fue interesante, pero creo que podríamos explorar géneros más variados. ¿Alguna sugerencia?</li>
                            <li>¿A alguien más le gustaría organizar una reunión presencial para discutir el libro? Sería genial conocernos en persona.</li>
                            <li>Me encantó la selección, pero creo que podríamos incluir más libros de autores diversos. ¡Diversifiquemos nuestras lecturas!</li>
                            <li>La discusión de anoche fue increíble. Si alguien tiene más recomendaciones de libros similares, ¡por favor compártanlas!</li>
                            <li>¿Alguien más se emociona tanto como yo por el próximo libro? No puedo esperar para empezar a leer y discutirlo con ustedes.</li>
                            <li>¡Acabo de terminar el libro del mes y estoy fascinado! ¿Alguien más notó ese giro inesperado al final?</li>
                            <li>La elección de este mes fue genial. Me encantó la profundidad de los personajes. ¿Qué libro sugieren para el próximo mes?</li>
                            <li>Me encanta cómo este club de lectura amplía mis horizontes literarios. ¡Descubrí un autor nuevo que ahora adoro!</li>
                            <li>¿Alguien más tuvo problemas para conectarse a la reunión virtual? ¡Quería discutir el libro!</li>
                            <li>Este mes no pude terminar el libro a tiempo, pero estoy ansioso por leer las discusiones y ponerme al día.</li>
                            <li>El tema de este mes fue interesante, pero creo que podríamos explorar géneros más variados. ¿Alguna sugerencia?</li>
                            <li>¿A alguien más le gustaría organizar una reunión presencial para discutir el libro? Sería genial conocernos en persona.</li>
                            <li>Me encantó la selección, pero creo que podríamos incluir más libros de autores diversos. ¡Diversifiquemos nuestras lecturas!</li>
                            <li>La discusión de anoche fue increíble. Si alguien tiene más recomendaciones de libros similares, ¡por favor compártanlas!</li>
                            <li>¿Alguien más se emociona tanto como yo por el próximo libro? No puedo esperar para empezar a leer y discutirlo con ustedes.</li>
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
