
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

import pinballg from './pinball-game.jpg';
import pinballm from './pinball-machine.jpg';

export default function Duvidas() {
  return (
    <div className="container">
      <body>
        <h1>Sobre Nós</h1>
        <p>A nossa história começou com a paixão pelo Pinball e a curiosidade sobre como funcionam as máquinas.</p>
        <p>Em 2024, durante o desenvolvimento do nosso Trabalho de Conclusão de Curso (TCC), nos inspiramos em criar um sistema de iluminação e tomada inteligente utilizando a plataforma Arduino e Internet das Coisas.</p>
        <p>Essa ideia nos levou a criar uma mesa de Pinball única, que combina a emoção do jogo com a inovação da tecnologia.</p>
        <div className="image-container">
          <Image width={250} height={250} src={pinballg} alt="Mesa de Pinball" />
        </div>
        <p>A nossa mesa de Pinball é equipada com sensores, LEDs e motores que trabalham em conjunto para criar uma experiência de jogo única.</p>
        <p>Com a nossa tecnologia, você pode controlar a iluminação, a música e os efeitos especiais da mesa de Pinball remotamente, utilizando um aplicativo móvel.</p>
        <div className="image-container">
          <Image width={240} height={240} src={pinballm} alt="Mesa de Pinball" />
        </div>
        <p>Agora, queremos compartilhar essa história com você e mostrar como a nossa paixão pelo Pinball pode inspirar a criação de algo incrível.</p>
        <p>Se você está interessado em saber mais sobre a nossa tecnologia e como ela pode ser utilizada em outros projetos, entre em contato conosco!</p>
      </body>
    </div>
  );
}
