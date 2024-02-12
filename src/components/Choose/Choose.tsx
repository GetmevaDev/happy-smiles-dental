import type { FC } from 'react';
import React from 'react';

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

export const Choose: FC<ChooseProps> = ({ title, description, cards }) => (
  <section className={styles.choose}>
    <div className={styles.choose_inner}>
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
