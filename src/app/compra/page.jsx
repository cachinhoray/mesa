import Image from 'next/image';

import styles from './page.module.css';

import pimbal6 from '../../../public/pimbal6.jpg';
import pinball1 from '../../../public/pinball1.jpg';
import pimbal3 from '../../../public/pimbal3.jpg';
import pimbal4 from '../../../public/pimbal4.jpg';
import pimbal5 from '../../../public/pimbal5.jpg';
import pimbal9 from '../../../public/pimbal9.jpg';
import pimbal7 from '../../../public/pimbal7.jpg';
import pinball10 from '../../../public/pinball10.jpg';

export default function Compra() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Vendas/aluguel mesa de Pinball</h1>
            </div>
            <br />
            {/* Pricing table */}
            PLANOS MENSAIS

            <table className={styles.pricingtable}>

                <thead>
                    <tr>
                        <th>Plano</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Básico</td>
                        <td>R$ 30,90</td>
                        <td>1 mesa pequena </td>
                    </tr>
                    <tr>
                        <td>Profissional</td>
                        <td>R$ 350,00</td>
                        <td>2 mesas, uma grande a outra pequena</td>
                    </tr>
                    <tr>
                        <td>Empresarial</td>
                        <td>R$ 2.780</td>
                        <td>3 mesas, 2 grandes e uma pequena (opcional)</td>
                    </tr>
                    <tr>
                        <td>Extra Plus</td>
                        <td>R$ 6.545</td>
                        <td>4 a 7 mesas grandes </td>
                    </tr>
                </tbody>
            </table>
            {/* Subscription form */}
            <form className={styles.subscriptionform}>
                <label for="plan">Selecione o plano:</label>
                <select id="plan" name="plan">
                    <option value="basico">Básico</option>
                    <option value="profissional">Profissional</option>
                    <option value="empresarial">Empresarial</option>
                    <option value="empresarial">Extra Plus</option>
                </select>

                <button type="button" className={[styles.btn, styles.btnlight]}>Confirmar</button>

                <div>
                    <br />

                    <table style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <th>Vendas</th>
                            </tr>
                            <tr>
                                <td>M1</td>

                                <td>$12.500</td>
                                <td><Image width={788} height={960} src={pimbal6} style={{ width: 100, height: 100, }} /></td>

                                <td>M2</td>
                                <td>$13.320</td>
                                <td><Image width={788} height={960} src={pinball1} style={{ width: 100, height: 100, }} /></td>

                                <td>M3</td>
                                <td>$16.200</td>
                                <td><Image width={788} height={960} src={pimbal3} style={{ width: 100, height: 100, }} /></td>

                                <td>M4</td>
                                <td>$13.250</td>
                                <td><Image width={788} height={960} src={pimbal4} style={{ width: 100, height: 100, }} /></td>
                            </tr>
                            <tr>
                                <td>M5</td>
                                <td>$17.128</td>
                                <td><Image width={788} height={960} src={pimbal5} style={{ width: 100, height: 100, }} /></td>
                                <td>M6</td>
                                <td>$15.000</td>
                                <td><Image width={788} height={960} src={pimbal9} style={{ width: 100, height: 100, }} /></td>
                                <td>M7</td>
                                <td>$8.300</td>
                                <td><Image width={788} height={960} src={pimbal7} style={{ width: 100, height: 100, }} /></td>
                                <td>M8</td>
                                <td>$10.700</td>
                                <td><Image width={788} height={960} src={pinball10} style={{ width: 100, height: 100, }} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <select className={styles.formselect} aria-label="Default select example">
                        <option selected>Selecione sua mesa</option>
                        <option value="1">M1</option>
                        <option value="2">M2</option>
                        <option value="3">M3</option>
                        <option value="3">M4</option>
                        <option value="3">M5</option>
                        <option value="3">M6</option>
                        <option value="3">M7</option>
                        <option value="3">M8</option>

                    </select>
                </div>

                <label for="floatingTextarea">Comentarios</label>
                <textarea className={styles.formcontrol} placeholder="Digite aqui " id="floatingTextarea"></textarea>
            </form>

        </div>
    );
}