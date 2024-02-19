import type { FC } from 'react';
import React from 'react';

import type { FaqsData } from '@/types/faqs';
import { Accordion, Typography } from '@/ui';

import styles from './Faq.module.scss';

export const Faq: FC<{ faqs: FaqsData[] }> = ({ faqs }) => (
  <section className={styles.faq}>
    <Typography className={styles.title} tag='h2'>
      Frequently Asked Questions
    </Typography>

    <Accordion items={faqs} />
  </section>
);
