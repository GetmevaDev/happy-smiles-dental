'use client';

import type { FC } from 'react';
import React, { useState } from 'react';

import { Input } from '@/ui';
import { Button } from '@/ui/button/button';

import styles from './Form.module.scss';

type FormData = {
  name: string;
  email: string;
  firstQuestion: string;
  secondQuestion: string;
  thirdQuestion: string;
  fourthQuestion: string;
  fifthQuestion: string;
};

export const Form: FC = () => {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    firstQuestion: '',
    secondQuestion: '',
    thirdQuestion: '',
    fourthQuestion: '',
    fifthQuestion: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data, 'data');
  };

  return (
    <div className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <Input label='Name' name='name' onChange={onChange} value={data.name} />
          <Input label='Email' name='email' onChange={onChange} value={data.email} />
          <Input
            label='1. What dental problems cause you the most trouble? *'
            name='firstQuestion'
            onChange={onChange}
            value={data.firstQuestion}
          />
          <Input
            label='2. What would you most want to achieve from dental care? *'
            name='secondQuestion'
            onChange={onChange}
            value={data.secondQuestion}
          />
          <Input
            label='3. How would you describe the perfect Dentist? *'
            name='thirdQuestion'
            onChange={onChange}
            value={data.thirdQuestion}
          />
          <Input
            label='4. What key factors most influence you when choosing a Dentist? *'
            name='fourthQuestion'
            onChange={onChange}
            value={data.fourthQuestion}
          />
        </div>
        <Input
          label='5. What would be the most convenient days for you to visit a Dentist? What would be the most convenient hours? *'
          name='fifthQuestion'
          onChange={onChange}
          value={data.fifthQuestion}
        />

        <Button className={styles.btn} type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};
