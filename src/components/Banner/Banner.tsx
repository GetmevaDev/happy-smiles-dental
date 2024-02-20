import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import { Typography } from '@/ui';
import { Button } from '@/ui/button/button';

import styles from './Banner.module.scss';

interface BannerProps {
  title?: string;
  subTitle?: string;
  image?: string;
  button?: boolean;
  buttonBack?: boolean;
}

export const Banner: FC<BannerProps> = ({ title, subTitle, button, image, buttonBack }) => (
  <section className={styles.section}>
    <div className={styles.image_inner}>
      {image && (
        <Image alt='banner' className={styles.image} height={400} src={image} width={1480} />
      )}
      <div className={styles.container}>
        <div className={styles.titles}>
          <Typography size='mini' tag='h4'>
            {subTitle}
          </Typography>

          <Typography tag='h1'>{title}</Typography>

          {button && (
            <Link href='https://app.nexhealth.com/appt/happy-smiles-dental'>
              <Button className={styles.btn}>Make an appointment</Button>
            </Link>
          )}

          {buttonBack && (
            <button className={styles.btn}>
              <Link className={styles.btn_link} href='/blog'>
                <span>
                  <Image
                    alt='chevron'
                    className={styles.svg}
                    height={10}
                    src='/chevron.svg'
                    width={10}
                  />
                </span>
                Back to articles
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  </section>
);
