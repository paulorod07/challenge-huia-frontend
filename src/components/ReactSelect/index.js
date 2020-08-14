import React, { useRef, useState, useEffect } from 'react';

import Select from 'react-select';
import { useField } from '@unform/core';
import styles from './ReactSelect.module.css';

import api from '../../service/api';

export default function ReactSelect({ name, ...rest }) {
  const selectRef = useRef(null);
  const [options, setOptions] = useState([]);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const selectProps = {
    isRtl: false,
    isMulti: false,
    isClearable: false,
    isSearchable: true,
    placeholder: 'Selecionar',
    noOptionsMessage: () => 'Não Encontrado.',
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value.label',
      // clearValue: (selectRef) => {
      //   selectRef.select.clearValue();
      // },
    });
  }, [fieldName, registerField]);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: 'none',
      border: 'none',
      // match with the menu
      // Overwrittes the different states of border
      borderColor: state.isFocused ? 'yellow' : 'green',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      // '&:hover': {
      //   // Overwrittes the different states of border
      //   // borderColor: state.isFocused ? 'red' : 'blue',
      // },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
  };

  useEffect(() => {
    async function getUf() {
      try {
        const response = await api.get('localidades/estados');

        const { data } = response;

        const dataFormatted = data.map((item) => ({
          label: item.nome,
          value: item.nome,
        }));
        setOptions(dataFormatted);
      } catch (error) {
        console.error(error.response.data);
      }
    }
    getUf();
  }, []);

  return (
    <>
      <div className={styles.containerSelect}>
        <label className={styles.label} htmlFor="uf">
          UF
        </label>
        <Select
          styles={customStyles}
          ref={selectRef}
          {...selectProps}
          defaultValue={defaultValue}
          className={styles.select}
          name={fieldName}
          options={options}
          {...rest}
        />
      </div>
      {error && (
        <p className={styles.error} title={error}>
          {error}
        </p>
      )}
    </>
  );
}
