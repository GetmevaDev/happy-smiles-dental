'use client';

import type { FC } from 'react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import type { ChooseCardI } from '@/types/home-page';
import { ChooseBlock } from '@/types/home-page';
import { Typography } from '@/ui';

import styles from './Choose.module.scss';
import { ChooseCard } from './ChooseCard/ChooseCard';

interface ChooseProps {
  title?: string;
  description?: string;
  cards?: ChooseCardI[];
}

export const Choose: FC<ChooseProps> = ({ title, description, cards }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className={styles.choose}>
      <div className={`${styles.choose_inner} ${inView ? 'fadeInLeft' : ''}`}>
        <Typography className={styles.title} tag='h2'>
          {title}
        </Typography>
        <div className={styles.description}>{description}.</div>

        <div className={styles.cards}>
          {cards?.map((card) => <ChooseCard key={card.id} {...card} />)}
        </div>
      </div>
    </section>
  );
};
