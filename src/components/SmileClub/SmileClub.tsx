import type { FC } from 'react';
import React from 'react';

import type { Include, Price } from '@/types/accepted-insurances';
import { Typography } from '@/ui';

import styles from './SmileClub.module.scss';

interface SmileClubProps {
  id?: number;
  title: string;
  subTitle: string;
  includesTitle: string;
  priceTitle: string;
  note: string;
  price: Price[];
  include: Include[];
}

export const SmileClub: FC<SmileClubProps> = ({
  title,
  subTitle,
  id,
  includesTitle,
  note,
  price,
  priceTitle,
  include
}) => (
  <section className={styles.section}>
    <div className={styles.smile}>
      <Typography className={styles.title} tag='h2'>
        {title}
      </Typography>
      <div className={styles.description}>{subTitle}</div>

      <div className={styles.block}>
        <h3 className={styles.coverage_title}>{includesTitle}</h3>
      </div>

      <div className={styles.include}>
        {include.map((el) => (
          <div key={el.id} className={styles.include_inner}>
            <div className={styles.include_text}>{el.text}</div>
          </div>
        ))}
      </div>

      <p className={styles.available}>{priceTitle}</p>
      <div className={styles.pricing}>
        {price.map((price) => (
          <div key={price.id} className={styles.price_inner}>
            <div className={styles.price_text}>{price.text}</div>
            <div className={styles.price}>{price.price}</div>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <div className={styles.note_text}>
          <b>Note: </b>
          {note}
        </div>
      </div>
    </div>
  </section>
);
