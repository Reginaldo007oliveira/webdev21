import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';


const Login = (): JSX.Element => {

  function handleSubmit(e) {
    e.preventDefault();
    let nome = (document.getElementById('name') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let endereco = (document.getElementById('endereco') as HTMLInputElement).value;
    let complemento = (document.getElementById('complemento') as HTMLInputElement).value;
    let cep = (document.getElementById('cep') as HTMLInputElement).value;
    let data = {
        nome,
        email,
        endereco,
        complemento,
        cep,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('login', convertData)

    alert("Cadastro Efetuado!")


  }

  return (
    <S.Login>
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              id="name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              required
            />
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              id="endereco"
              required
            />
            <input
              type="text"
              name="complemento"
              placeholder="Complemento"
              id="complemento"
              required
            />
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              id="cep"
              required
            />
            <label className="agreed"
              ><input type="checkbox" required /> Aceito receber
              comunicações</label
            >
            <input id="submit" type="submit" value="Enviar" />
          </form>
    </S.Login>
  );
};

export default Login;
