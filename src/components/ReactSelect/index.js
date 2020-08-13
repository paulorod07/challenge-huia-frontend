import React, { useRef, useState, useEffect, useCallback } from 'react';

import Select from 'react-select';
import { useField } from '@unform/core';
import styles from './ReactSelect.module.css';

import api from '../../service/api';

export default function ReactSelect({ name, ...rest }) {
  const inputRef = useRef(null);
  const [options, setOptions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const selectProps = {
    isRtl: false,
    isMulti: false,
    isClearable: false,
    isSearchable: true,
    placeholder: 'Selecionar',
    noOptionsMessage: () => 'Não Encontrado.',
  };

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: 'none',
      border: 'none',
      // match with the menu
      borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? 'yellow' : 'green',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? 'red' : 'blue',
      },
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
          value: item.sigla,
          label: item.sigla,
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
      <div
        className={styles.containerSelect}
        isErrored={!!error}
        isFocused={isFocused}
      >
        <label className={styles.label} htmlFor="uf">
          UF
        </label>
        <Select
          styles={customStyles}
          ref={inputRef}
          {...selectProps}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          className={styles.select}
          options={options}
          {...rest}
          required
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
