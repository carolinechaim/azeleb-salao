import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage';
import LoginCliente from './pages/login-cliente/login-cliente';
import LoginFuncionario from './pages/login-funcionario/login-funcionario';
import LoginAdm from './pages/login-adm/login-adm';




function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login-cliente' component={LoginCliente} />
        <Route exact path='/login-funcionario' component={LoginFuncionario} />
        <Route exact path='/login-administracao' component={LoginAdm} />
      </Switch>
    </div>
  );
}

export default App;
