import type { ComponentPropsWithRef, FC } from 'react';
import React from 'react';

import styles from './input.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export const Input: FC<InputProps> = ({
  onChange,
  label,
  id,
  name,
  value,
  required,
  placeholder
}) => (
  <label className={styles.label} htmlFor={id}>
    {label}
    <input
      className={styles.input}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      value={value}
    />
  </label>
);
