import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        <h1 className={styles.evaluation}>Avaliação de</h1>
        <h1>Paulo Ãnes de Souza Rodrigues</h1>
      </div>
      <Link to="/maxdoctor">
        <button className={styles.button} type="button">
          Acessar MaxDoctor
        </button>
      </Link>
    </div>
  );
}
