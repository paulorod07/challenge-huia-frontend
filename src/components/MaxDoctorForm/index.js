import React, { useRef, useEffect, useCallback, useState } from 'react';
// import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../service/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Select from 'react-select';

import styles from './MaxDoctorForm.module.css';

export default function MaxDoctorForm() {
  const formRef = useRef(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getUf() {
      try {
        const response = await api.get('localidades/estados');

        const { data } = response;

        const dataFormatted = data.map((item) => ({
          value: item.sigla,
          label: item.sigla,
        }));

        setOptions(dataFormatted);
        console.log(options);
      } catch (error) {
        console.error(error.response.data);
      }
    }
    getUf();
  }, []);

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

  const selectProps = {
    isRtl: false,
    isMulti: false,
    isClearable: false,
    isSearchable: true,
    placeholder: 'Selecione',
    noOptionsMessage: () => 'Não Encontrado.',
  };

  return (
    <Form className={styles.container} ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="CRM">CRM</label>
      <input className={styles.input} name="crm" placeholder="00000" required />
      <label htmlFor="UF">UF</label>
      <Select
        {...selectProps}
        className={styles.select}
        options={options}
        required
      />

      {/* <div>
        <label for="CRM">CRM</label>
        <input type="number" name="CRM" id="CRM" placeholder="00000" />
      </div>
      <div
        id="campo"
        style="display:none;color:red;border:none;font-size:12px;"
      >
        * Digite o número do seu CRM para continuar
      </div> */}

      <button type="button">Continue</button>

      <p></p>
    </Form>
  );
}
