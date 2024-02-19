import type { FC } from 'react';
import React from 'react';

import styles from './Video.module.scss';

export const Video: FC<{ url: string }> = ({ url }) => (
  <div className={styles.video}>
    <iframe
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
      frameBorder='0'
      height='500'
      src={url}
      title='YouTube video player'
      width='800'
    />
  </div>
);
