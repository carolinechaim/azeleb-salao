
import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';



import "./login-cliente.scss";

const LoginCliente = () => (

<div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>

);

export default LoginCliente;
