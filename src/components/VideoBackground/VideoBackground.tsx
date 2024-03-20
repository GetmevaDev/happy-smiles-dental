import type { FC } from 'react';
import React from 'react';

import styles from './VideoBackground.module.scss';

export const VideoBackground: FC<{ video: string }> = ({ video }) => (
  <div className={styles.video_background}>
    <video autoPlay className={styles.video} loop muted playsInline preload='auto' src={video} />
  </div>
);
