// Home.js
'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image';

import Head from 'next/head';
import styles from "./page.module.css"; // Certifique-se de que o nome do arquivo CSS está correto

import api from '@/services/api';

const Home = () => {
    
    const [produtos, setProdutos] = useState([]); 

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiPorta = process.env.NEXT_PUBLIC_API_PORTA;

    const imageLoader = ({ src, width, quality }) => {
        return `${apiUrl}:${apiPorta}${src}?w=${width}&q=${quality || 75}`
    }

    useEffect( () => {
        listarProdutos();
    }, []);

    async function listarProdutos () {
        try {
            const response = await api.get('/produtos'); 
            if (response.data.sucesso == true) {
                const prodApi = response.data.dados;
                setProdutos(prodApi);
            } else {
                alert('Erro: ' + error.response.data.mensagem + '\n' + error.response.data.dados)
            } 
        } catch (error) {
            if (error.response) {
                alert(error.response.data.mensagem + '\n' + error.response.data.dados);
            } else {
                alert('Erro no front-end' + '\n' + error);
            }
        }

    }

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
                            <div key={produto.prod_id}>
                                <h3>{produto.prod_nome}</h3>
                                <Image 
                                    loader={imageLoader} /* Quando imagem vem por url */
                                    src={produto.prod_img}
                                    alt={produto.prod_nome}
                                    width={200}
                                    height={200}
                                    className={styles.productImage} 
                                />
                                <p>{produto.descricao}</p>
                                <p><strong>Valor de Venda:</strong> R$ {produto.prod_valor_venda}</p>
                                <p><strong>Valor de Aluguel:</strong> R$ {produto.prod_valor_aluguel}</p>
                                <p>{produto.prod_descricao}</p>
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

// const produtos = [
//     {
//         prod_id: 1,
//         prod_nome: "Mesa de Pinball 1",
//         prod_img: "/pimbal3.jpg",
//         prod_valor_venda: 5000,
//         prod_valor_aluguel: 500,
//         prod_descricao: "Mesa de pinball com tecnologia inovadora.",
        
//     },
//     {
//         prod_id: 2,
//         prod_nome: "Mesa de Pinball 2",
//         prod_img: "/pimbal4.jpg",
//         prod_valor_venda: 6000,
//         prod_valor_aluguel: 600,
//         prod_descricao: "Experiência única de jogo.",
       
//     },
//     {
//         prod_id: 3,
//         prod_nome: "Mesa de Pinball 3",
//         prod_img: "/pimbal5.jpg",
//         prod_valor_venda: 7000,
//         prod_valor_aluguel: 600,
//         prod_descricao: "A mesa mais divertida para a família.",
//     }
// ];