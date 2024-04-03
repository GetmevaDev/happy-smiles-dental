import type { FC } from 'react';
import React, { memo } from 'react';

import styles from './VideoBackground.module.scss';

const VideoBackground: FC<{ video: string; isFullScreen?: boolean; query?: boolean }> = memo(
  ({ video, isFullScreen, query }) => (
    <div className={styles.video_background}>
      <video
        autoPlay
        className={styles.video}
        controls={query || isFullScreen}
        controlsList='nodownload'
        loop
        playsInline
        poster='/poster.jpg'
        preload='auto'
        src={video}
      />
    </div>
  )
);

export default VideoBackground;
