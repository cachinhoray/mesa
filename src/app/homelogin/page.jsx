// Home.js
'use client';
import React from 'react';
import Head from 'next/head';
import styles from "./page.module.css"; // Certifique-se de que o nome do arquivo CSS está correto

const Home = () => {
    const produtos = [
        {
            id: 1,
            nome: "Mesa de Pinball 1",
            descricao: "Mesa de pinball com tecnologia inovadora.",
            imagem: "/pimbal3.jpg",
            valorVenda: 5000,
            valorAluguel: 500,
        },
        {
            id: 2,
            nome: "Mesa de Pinball 2",
            descricao: "Experiência única de jogo.",
            imagem: "/pimbal4.jpg",
            valorVenda: 6000,
            valorAluguel: 600,
        },
        {
            id: 3,
            nome: "Mesa de Pinball 3",
            descricao: "A mesa mais divertida para a família.",
            imagem: "/pimbal5.jpg",
            valorVenda: 7000,
            valorAluguel: 700,
        }
    ];

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
                    <h2 className={styles.h2}>Nossos Produtos</h2>
                    <div>
                        {produtos.map(produto => (
                            <div key={produto.id}>
                                <h3>{produto.nome}</h3>
                                <img 
                                    src={produto.imagem} 
                                    alt={produto.nome} 
                                    className={styles.productImage} 
                                />
                                <p>{produto.descricao}</p>
                                <p><strong>Valor de Venda:</strong> R$ {produto.valorVenda}</p>
                                <p><strong>Valor de Aluguel:</strong> R$ {produto.valorAluguel}</p>
                                <button className={styles.button}>Saiba Mais</button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>&copy; 2024 Sistema de Pinball. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;
