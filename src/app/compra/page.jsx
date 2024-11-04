'use client'
import React, { useState } from 'react'; 


import Head from 'next/head';
import styles from './page.module.css';

export default function Compra() {
  const [selectedProduct, setSelectedProduct] = useState("produto1");

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const productImages = {
    produto1: "/pimbal3.jpg",
    produto2: "/pimbal4.jpg",
    produto3: "/pimbal5.jpg",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tela de Compra</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Finalizar Compra</h1>

        <form action="#" className={styles.checkoutForm}>
          {/* Nome */}
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          {/* Produto */}
          <div className={styles.formGroup}>
            <label htmlFor="produto">Produto:</label>
            <select id="produto" name="produto" onChange={handleProductChange}>
              <option value="produto1">Produto 1</option>
              <option value="produto2">Produto 2</option>
              <option value="produto3">Produto 3</option>
            </select>
          </div>

          {/* Imagem do Produto */}
          <div className={styles.imageContainer}>
            <img
              src={productImages[selectedProduct]}
              alt={`Imagem do ${selectedProduct}`}
              className={styles.productImage}
            />
          </div>

          {/* Quantidade */}
          <div className={styles.formGroup}>
            <label htmlFor="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" name="quantidade" min="1" required />
          </div>

          {/* Botão de Finalizar Compra */}
          <button className={styles.submitButton} type="submit">Finalizar Compra</button>
        </form>
      </main>
    </div>
  );
}
