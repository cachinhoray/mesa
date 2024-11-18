// Home.js
'use client';
import React from 'react';
import Head from 'next/head';
import styles from "./page.module.css"; // Certifique-se de que o nome do arquivo CSS está correto

const Home = () => {
    const produtos = [
        {
            prod_id: 1,
            prod_nome: "Mesa de Pinball 1",
            prod_img: "/pimbal3.jpg",
            prod_valor_venda: 5000,
            prod_valor_aluguel: 500,
            prod_descricao: "Mesa de pinball com tecnologia inovadora.",
            
        },
        {
            prod_id: 2,
            prod_nome: "Mesa de Pinball 2",
            prod_img: "/pimbal4.jpg",
            prod_valor_venda: 6000,
            prod_valor_aluguel: 600,
            prod_descricao: "Experiência única de jogo.",
           
        },
        {
            prod_id: 3,
            prod_nome: "Mesa de Pinball 3",
            prod_img: "/pimbal5.jpg",
            prod_valor_venda: 7000,
            prod_valor_aluguel: 600,
            prod_descricao: "A mesa mais divertida para a família.",
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
