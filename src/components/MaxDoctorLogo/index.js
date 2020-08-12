import React from 'react';

import styles from './MaxDoctorLogo.module.css';
import logo from '../../assets/logo.png';

export default function MaxDoctorLogo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="" />
      <p className={styles.paragraph}>A plataforma de compra direta do seu anestésico tópico</p>
    </div>
  );
}
