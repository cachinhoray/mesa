
import Head from 'next/head';

export default function Compra()  {
  return (
    <div className={'container'}>
      <Head>
        <title>Tela de Compra</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       </Head>

      <main>
        
        <h1>Finalizar Compra</h1>
        
        <form action="#" className={'checkout-form'}>
          <div className={'form-group'}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>

          <div className={'form-group'}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={'form-group'}>
            <label htmlFor="endereco">Endereço de Entrega:</label>
            <textarea id="endereco" name="endereco" required></textarea>
          </div>

          <div className={'form-group'}>
            <label htmlFor="produto">Produto:</label>
            <select id="produto" name="produto">
              <option value="produto1">Produto 1</option>
              <option value="produto2">Produto 2</option>
              <option value="produto3">Produto 3</option>
            </select>
          </div>

          <div className={'form-group'}>
            <label htmlFor="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" name="quantidade" min="1" required />
          </div>

          <div className={'form-group'}>
            <label htmlFor="plano">Plano:</label>
            <select id="plano" name="plano">
              <option value="basico">Básico</option>
              <option value="profissional">Profissional</option>
              <option value="empresarial">Empresarial</option>
              <option value="extraPlus">Extra Plus</option>
            </select>
          </div>

          <div className={'form-group'}>
            <label htmlFor="formaPagamento">Forma de Pagamento:</label>
            <select id="formaPagamento" name="formaPagamento">
              <option value="cartaoCredito">Cartão de Crédito</option>
              <option value="boleto">Boleto</option>
              <option value="paypal">PayPal</option>
              <option value="pix">PIX</option>
            </select>
          </div>

          <div className={'form-group'}>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required />
          </div>

          <div className={'form-group'}>
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required />
          </div>

          <div className={'form-group'}>
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" required />
          </div>

          <button type="submit">Finalizar Compra</button>
        </form>
      </main>
    </div>
  );
}
