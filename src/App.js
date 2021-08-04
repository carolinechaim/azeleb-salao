import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage';
import LoginCliente from './pages/login-cliente/login-cliente';
import LoginFuncionario from './pages/login-funcionario/login-funcionario';
import LoginAdm from './pages/login-adm/login-adm';
import Unidade from './pages/cliente/unidade/unidade';
import Reserva from './pages/cliente/reserva/reserva';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login-cliente' component={LoginCliente} />
        <Route exact path='/login-funcionario' component={LoginFuncionario} />
        <Route exact path='/login-administracao' component={LoginAdm} />
        <Route exact path='/unidade' component={Unidade} />
        <Route exact path='/reserva' component={Reserva} />
      </Switch>
    </div>
  );
}

export default App;
