'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import type { ContentBlock } from '@/types/rich-block';

import styles from './Block.module.scss';

interface BlockProps {
  title?: string;
  description?: ContentBlock[];
  image: string;
  alternativeText: string;
}

export const Block: FC<BlockProps> = ({ title, description, image, alternativeText }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <section ref={ref} className={styles.section}>
      <div className={`${styles.banner_inner} ${inView ? styles.fadeInUp : ''}`}>
        <Image
          alt={alternativeText}
          className={styles.image}
          height={394}
          src={image}
          width={387}
        />

        <div className={styles.block}>
          <h2 className={styles.title}>{title}</h2>

          {description?.map((paragraph, index) => (
            <div key={index} className={styles.description}>
              {paragraph.children &&
                paragraph.children.map((child, childIndex) => (
                  <p key={childIndex} className={styles.child}>
                    {child.text}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
