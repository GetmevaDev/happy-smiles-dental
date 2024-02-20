'use client';

import React, { useEffect, useState } from 'react';

import styles from './map.module.scss';

const Map = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  return (
    <div className={styles.map}>
      <iframe
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        src={
          ready
            ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4103759302952!2d-73.70091592397226!3d40.75299797138745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260ee424f965f%3A0x3fe2726e12738bdf!2sDr.%20Diana%20Gerov%20DDS!5e0!3m2!1sen!2sus!4v1708416455773!5m2!1sen!2sus'
            : 'about:blank'
        }
        title='map'
      />
    </div>
  );
};
export default Map;
