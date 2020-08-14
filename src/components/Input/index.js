import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';

import styles from './Input.module.css';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [success, setSuccess] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

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

  return (
    <>
      <div
        className={styles.containerInput}
        // isErrored={!!error}
        // isFocused={isFocused}
      >
        <label className={styles.label} htmlFor="crm">
          CRM
        </label>
        <input
          type="number"
          className={styles.input}
          onFocus={handleInputFocus}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
          required
        />
      </div>
      {error ? (
        <p className={styles.error} title={error}>
          {error}
        </p>
      ) : null}
      {success && <p className={styles.success}>Sucesso!</p>}
    </>
  );
}
