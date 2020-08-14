import React from 'react';

import styles from './Footer.module.css';
import Facilidade from '../../assets/Facilidade.png';
import Quantidade from '../../assets/Quantidade.png';
import Frete from '../../assets/Frete.png';
import Agilidade from '../../assets/Agilidade.png';
import Comodidade from '../../assets/Comodidade.png';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={Facilidade} alt="Facilidade" />
          <span>FACILIDADE DE COMPRA</span>
        </div>
        <div className={styles.item}>
          <img src={Quantidade} alt="Quantidade" />
          <span>QUANTIDADE NÃO LIMITADA</span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={Frete} alt="Frete" />
          <span>FRETE GRÁTIS</span>
        </div>
        <div className={styles.item}>
          <img src={Agilidade} alt="Agilidade" />
          <span>AGILIDADE</span>
        </div>
        <div className={styles.item}>
          <img src={Comodidade} alt="Comodidade" />
          <span>COMODIDADE</span>
        </div>
      </div>
    </div>
  );
}
