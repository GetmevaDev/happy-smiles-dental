import React from 'react';

import styles from './Video.module.scss';

export const Video = () => (
  <div className={styles.video}>
    <iframe
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
      frameBorder='0'
      height='500'
      src='https://www.youtube.com/embed/mmKguZohAck?si=WfRcZ5WoJ3SDQ4BY'
      title='YouTube video player'
      width='800'
    />
  </div>
);
