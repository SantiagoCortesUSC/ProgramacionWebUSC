import React, { useState } from 'react';
// import './App.css';

function Perfil() {
    const [imagen, setImagen] = useState(null);

    const cambiarImagen = (e) => {
        setImagen(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="App">
            <header className="encabezado">
                <div className="titulo">Mi Perfil</div>
            </header>

            <main>
                <section className="seccion-principal">
                    <div className="contenido-principal">
                        <div className="foto-perfil">
                            <img src={imagen || "https://via.placeholder.com/150"} alt="Foto de perfil" />
                            <div className="cambiar-foto">
                                <input type="file" id="imagen" accept="image/*" onChange={cambiarImagen} />
                                <label htmlFor="imagen">Cambiar foto de perfil</label>
                            </div>
                        </div>

                        <div className="informacion-perfil">
                            <h2>Nombre de usuario</h2>
                            <p>Biografía o información adicional.</p>
                            <button>Editar perfil</button>
                        </div>

                        <div className="intereses">
                            <h3>Intereses</h3>
                            <ul>
                                <li>Ficción científica</li>
                                <li>Histórico</li>
                                <li>Autobiografía</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div><p>Pie de pagina</p></div>
            </footer>
        </div>
    );
}

export default Perfil;