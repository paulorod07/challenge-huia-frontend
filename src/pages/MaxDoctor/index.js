import React from 'react';

import styles from './MaxDoctor.module.css';

import MaxDoctorLogo from '../../components/MaxDoctorLogo';
import MaxDoctorForm from '../../components/MaxDoctorForm';

export default function MaxDoctor() {
  return (
    <div className={styles.container}>
      <MaxDoctorLogo />
      <MaxDoctorForm />
    </div>
  );
}
