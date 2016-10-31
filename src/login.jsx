import React from 'react';
import {form, FieldGroup, } from 'react-bootstrap';

var Login = React.createClass({

  render function (){
    <form>
        <FieldGroup id="username" type="text" placeholder="Name of the sacrifice"></FieldGroup>
        <FieldGroup id="password" type="password" placeholder="password"></FieldGroup>
        <button bsStyle="primary" onClick={() ->{
              console.log('Login');
          }}>LOGIN</button>
    </form>
  }
});

export default Login;
