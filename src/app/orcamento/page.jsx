// Orcamento.js
'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css'; // Certifique-se de criar esse arquivo CSS

const Orcamento = () => {
    const [formData, setFormData] = useState({
        nome: '',
        contato: '',
        mensagem: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do orçamento:', formData);
        // Lógica para enviar o orçamento para o backend
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Solicitação de Orçamento</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <header className={styles.header}>
                <h1>Solicitação de Orçamento</h1>
            </header>

            <main className={styles.mainContent}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                        Nome:
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            required
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Contato:
                        <input
                            type="text"
                            name="contato"
                            value={formData.contato}
                            onChange={handleInputChange}
                            required
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Mensagem:
                        <textarea
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleInputChange}
                            required
                            className={styles.textarea}
                        />
                    </label>
                    <button type="submit" className={styles.botao}>Enviar Orçamento</button>
                </form>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 Sistema de Pinball. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Orcamento;
