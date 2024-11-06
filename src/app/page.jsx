import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>Home</h1>
    <ul>
      <li><Link href={"/duvidas"}>duvidas</Link></li>
      <li><Link href={"/compra"}>compra</Link></li>
      <li><Link href={"/homelogin"}>home login</Link></li>
      <li><Link href={"/usuarios/cadusuario"}>cad usuario</Link></li>
      <li><Link href={"/usuarios/login"}>login</Link></li>
      <li><Link href={"/orcamento"}>orçamento</Link></li>

    </ul>
    
    
   </div>
  );
}
