import classNames from 'classnames';
import React from 'react';

import styles from './ArrowButton.module.scss';

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, className }) => {
  const buttonClass = classNames(className, styles.arrow_button, {
    [styles.left]: direction === 'left',
    [styles.right]: direction === 'right'
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {direction === 'left' ? (
        <svg
          fill='none'
          height='9'
          viewBox='0 0 20 9'
          width='20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-1.82131e-07 4.16667L5.02873 8.33333L5.02873 5L20 5L20 3.33333L5.02874 3.33333L5.02874 2.19813e-07L-1.82131e-07 4.16667Z'
            fill='#313131'
          />
        </svg>
      ) : (
        <svg
          className='icon-right'
          height='10'
          viewBox='0 0 20 10'
          width='20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M20 4.99984L14.9713 0.833171L14.9713 4.1665L5.96244e-08 4.1665L3.97496e-08 5.83317L14.9713 5.83317L14.9713 9.1665L20 4.99984Z' />
        </svg>
      )}
    </button>
  );
};
