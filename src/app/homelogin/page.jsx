// Home.js
'use client';
import React from 'react';
import Head from 'next/head';
import styles from './Home.module.css'; // Certifique-se de ter este arquivo CSS

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Página Inicial</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <header className={styles.header}>
                <h1>Bem-vindo ao Sistema de Pinball</h1>
                <p>Explore a nossa tecnologia inovadora e jogue pinball como nunca antes!</p>
            </header>

            <main className={styles.mainContent}>
                <section className={styles.section}>
                    <h2>Nossos Produtos</h2>
                    <p>Descubra nossas mesas de pinball equipadas com tecnologia de ponta.</p>
                    <button className={styles.button}>Saiba Mais</button>
                </section>

                <section className={styles.section}>
                    <h2>Como Funciona</h2>
                    <p>Aprenda sobre a tecnologia por trás das nossas mesas de pinball.</p>
                    <button className={styles.button}>Descubra</button>
                </section>

                <section className={styles.section}>
                    <h2>Entre em Contato</h2>
                    <p>Tem alguma dúvida? Entre em contato conosco!</p>
                    <button className={styles.button}>Fale Conosco</button>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 Sistema de Pinball. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;
