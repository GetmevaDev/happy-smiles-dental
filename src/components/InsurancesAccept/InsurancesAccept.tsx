import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';

import type { InsuranceCard } from '@/types/accepted-insurances';
import { Typography } from '@/ui';

import styles from './InsurancesAccept.module.scss';

export const InsurancesAccept: FC<{ title: string; cards: InsuranceCard[] }> = ({
  title,
  cards
}) => (
  <div className={styles.section}>
    <Typography className={styles.title} tag='h2'>
      {title}
    </Typography>

    <div className={styles.cards}>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={classNames(styles.card, `${index % 2 === 0 ? styles.even : styles.odd}`)}
        >
          {card.title}
        </div>
      ))}
    </div>
  </div>
);
