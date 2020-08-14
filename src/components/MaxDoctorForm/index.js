import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import ReactSelect from '../../components/ReactSelect';
import Input from '../../components/Input';

import styles from './MaxDoctorForm.module.css';

export default function MaxDoctorForm() {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback(async (data) => {
    try {
      if (formRef.current !== undefined) {
        formRef.current.setErrors({});
      }

      const schema = Yup.object().shape({
        crm: Yup.string()
          .required('CRM é obrigatório')
          .min(5, 'Digite no mínimo 5 caracteres'),
        // uf: Yup.string().ensure().required('UF é obrigatório'),
      });
      await schema.validate(data, { abortEarly: false });
      console.log(data);
      setSuccess(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        if (formRef.current !== undefined) {
          formRef.current.setErrors(errors);
          console.log(err);
          return;
        }
      }
    }
  }, []);

  return (
    <Form className={styles.container} ref={formRef} onSubmit={handleSubmit}>
      {/* <div className={styles.inputsContainer}> */}
      <Input
        // onChange={changeInput}
        className={styles.input}
        name="crm"
        placeholder="00000"
      />
      <ReactSelect name="uf" />
      {/* </div> */}
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>
          Continue
        </button>
      </div>
      <p className={styles.paragraph}>
        Canal de compra exclusivo para classe média
      </p>
    </Form>
  );
}
