import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'; // Asegúrate de tener un componente Login importado
import Register from './components/Register';

function App() {
  return (
    <div>
      {/* Aquí puedes incluir cualquier contenido que deba mostrarse en todas las páginas */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />

        {/* Agrega más rutas según sea necesario */}
      </Switch>
    </div>
  );
}

export default App;
