import React from 'react';

import styles from './MaxDoctorLogo.module.css';
import logo from '../../assets/logo.svg';

export default function MaxDoctorLogo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="MaxDoctor" />
      <p className={styles.paragraph}>
        A plataforma de compra direta <br /> do seu anestésico tópico
      </p>
    </div>
  );
}
