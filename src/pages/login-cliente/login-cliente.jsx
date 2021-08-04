
import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import Header from '../../components/header/header';


import "./login-cliente.scss";

const LoginCliente = () => (
<div>
  <Header />
<div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
</div>

);

export default LoginCliente;
