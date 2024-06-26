import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css'; 

export default function Login() {
    

    return (
        <div className={styles.container}>
            <Head>
                <title>Tela de Login</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className={styles.loginContainer}>
                <Image src="/pinball.jpeg" alt="Imagem de login" width={100} height={100} />
                <h2>Área de Login</h2>
                <form>
                    <input type="text" placeholder="Usuário" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}
