import React from 'react';

import styles from './Footer.module.css';
import Facilidade from '../../assets/Facilidade.png';
import Quantidade from '../../assets/Quantidade.png';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={Facilidade} alt="Facilidade" />
          <span>FACILIDADE DE COMPRA</span>
        </div>
        <div className={styles.item}>
          <img src={Quantidade} alt="Facilidade" />
          <span>QUANTIDADE NÃO LIMITADA</span>
        </div>
      </div>
    </div>
  );
}

{
  /* <section class="icones">
            <span>CANAL DE COMPRAS EXCLUSIVO PARA CLASSE MÉDICA</span>
            <div>
                <div class="col1">
                    <div class="item">
                        <div class="imagem">
                            <img src="css/img/Facilidade.png" alt="Facilidade">
                        </div>
                        <span>FACILIDADE DE COMPRA</span>
                    </div>
                    <div class="item">
                        <div class="imagem">
                            <img src="css/img/Quantidade.png" alt="Quantidade" id="quantidade"> 
                        </div>
                        <span>QUANTIDADE NÃO LIMITADA</span>
                    </div>
                </div>

                <div class="col2">
                    <div class="item">
                        <div class="imagem">
                            <img src="css/img/Frete.png" alt="Frete Grátis">
                        </div>
                        <span>FRETE GRÁTIS</span>
                    </div>
                    <div class="item">
                        <div class="imagem">
                            <img src="css/img/Agilidade.png" alt="Agilidade"> 
                        </div>
                        <span id="agilidade">AGILIDADE</span>
                    </div>
                    <div class="item">
                        <div class="imagem">
                            <img src="css/img/Comodidade.png" alt="Comodidade"> 
                        </div>
                        <span>COMODIDADE</span>
                    </div>
                </div>
            </div>
        </section> */
}
