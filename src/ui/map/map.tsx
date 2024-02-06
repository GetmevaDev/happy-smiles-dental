'use client';

import React, { useEffect, useState } from 'react';

import styles from './map.module.scss';

export const Map = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  return (
    <div className={styles.map}>
      <iframe
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        src={
          ready
            ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.908682250772!2d-73.69869505476483!3d40.752030800912905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260ee424f965f%3A0x3fe2726e12738bdf!2sDr.%20Diana%20Gerov%20DDS!5e0!3m2!1sru!2sru!4v1707146751790!5m2!1sru!2sru'
            : 'about:blank'
        }
        title='map'
      />
    </div>
  );
};
