import type { FC } from 'react';
import React, { memo } from 'react';

import styles from './VideoBackground.module.scss';

export const VideoBackground: FC<{ video: string; isFullScreen?: boolean }> = memo(
  ({ video, isFullScreen }) => {
    console.log('@');
    return (
      <div className={styles.video_background}>
        <video
          autoPlay
          className={styles.video}
          controls={isFullScreen}
          loop
          muted
          playsInline
          poster='/poster.jpg'
          preload='auto'
          src={video}
        />
      </div>
    );
  }
);
