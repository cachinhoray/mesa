'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import api from '@/services/api';

export default function Usuarios({ onClose = () => {}  }) {
  const [usuarios, setUsuarios] = useState({
    usu_nome: '',
    usu_email: '',
    usu_senha: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuarios((prev) => ({ ...prev, [name]: value }));
  };

  function handleValida() {
    let validado = true;
    if (usuarios.usu_nome === '') {
      alert('O nome do usuário deve ser preenchido!');
      validado = false;
    }
    if (usuarios.usu_email === '') {
      alert('O campo de email deve ser preenchido!');
      validado = false;
    }
    if (usuarios.usu_senha === '') {
      alert('Deve conter uma senha!');
      validado = false;
    }
    return validado;
  }

  async function handleUsuarios() {
    const validacao = handleValida();
    if (validacao) {
      try {
        const response = await api.post('/usuarios', usuarios);
        if (response.data.sucesso) {
          alert('Usuário cadastrado com sucesso!');
          onClose();
        }
      } catch (error) {
        if (error.response) {
          alert(
            `${error.response.data.mensagem}\n${error.response.data.dados}`
          );
        } else {
          alert(`Erro no front-end:\n${error}`);
        }
      }
    }
  }

  return (
    <div className={styles.container}>
      <h2>Cadastrar Usuário</h2>
      <form className={styles.form}>
        <label>
          Nome:
          <input
            type="text"
            name="usu_nome"
            value={usuarios.usu_nome}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="usu_email"
            value={usuarios.usu_email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="usu_senha"
            value={usuarios.usu_senha}
            onChange={handleInputChange}
          />
        </label>
        <button
          className={styles.botao}
          type="button"
          onClick={handleUsuarios}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
