import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import styles from './Input.module.css';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <div className={styles.containerInput}>
        <label className={styles.label} htmlFor="crm">
          CRM
        </label>
        <input
          type="number"
          className={styles.input}
          defaultValue={defaultValue}
          ref={inputRef}
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
