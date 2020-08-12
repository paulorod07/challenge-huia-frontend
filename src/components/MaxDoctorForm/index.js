import React, { useRef, useEffect, useCallback } from 'react';
// import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import axios from 'axios';
import getValidationErrors from '../../utils/getValidationErrors';
import Select from 'react-select';

import styles from './Form.module.css';

export default function MaxDoctorForm() {
  const formRef = useRef(null);

  useEffect(() => {
    async function getUf() {
      const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
      const response = await axios.get(URL);
      console.log(response.data);
    }
    getUf();
  });

  const handleSubmit = useCallback(async (data) => {
    try {
      if (formRef.current) {
        formRef.current.setErrors({});
      }

      const schema = Yup.object().shape({
        crm: Yup.string()
          .required('CRM é obrigatório')
          .email('Digite um CRM válido'),
        uf: Yup.string().required('UF é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        if (formRef.current) {
          formRef.current.setErrors(errors);
          return;
        }
      }
    }
  }, []);

  return (
    <Form className={styles.container} ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="crm" placeholder="CRM" />
      <Select />

      <button type="button">Continue</button>

      <p></p>
    </Form>
  );
}
