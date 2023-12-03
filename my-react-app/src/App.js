import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'; // Asegúrate de tener un componente Login importado

function App() {
  return (
    <div>
      {/* Aquí puedes incluir cualquier contenido que deba mostrarse en todas las páginas */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* Agrega más rutas según sea necesario */}
      </Switch>
    </div>
  );
}

export default App;
