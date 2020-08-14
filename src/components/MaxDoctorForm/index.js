import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import { toast } from 'react-toastify';
import ReactSelect from '../../components/ReactSelect';
import Input from '../../components/Input';

import styles from './MaxDoctorForm.module.css';

export default function MaxDoctorForm() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      if (formRef.current !== undefined) {
        formRef.current.setErrors({});
      }

      const schema = Yup.object().shape({
        crm: Yup.string()
          .required('CRM é obrigatório')
          .min(5, 'Digite no mínimo 5 caracteres'),
        uf: Yup.string().required('UF é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });
      toast.success('Sucesso!');
      console.log(data);
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
    <Form
      className={styles.container}
      // schema={schema}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Input className={styles.input} name="crm" placeholder="00000" />
      <ReactSelect name="uf" />
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>
          Continue
        </button>
      </div>
      <p className={styles.paragraph}>
        Canal de compra exclusivo <br/> para classe média
      </p>
    </Form>
  );
}
