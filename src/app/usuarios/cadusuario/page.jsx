'use client'
import React, { useState } from 'react'; 

import styles from './page.module.css';

function Usuarios() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuário criado:', formData);
    // Lógica de envio para o backend
  };

  return (
    <div>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Usuarios;