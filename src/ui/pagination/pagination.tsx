'use client';

import Image from 'next/image';
import type { FC } from 'react';

import styles from './pagination.module.scss';

export const Pagination: FC<{
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}> = ({ totalPages, currentPage, onPageChange }) => {
  const goToPage = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className={styles.pagination_container}>
      <div className={styles.pages}>
        Pages <span>{currentPage}</span> of {totalPages}
      </div>

      <div className={styles.page_list}>
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <div
              key={page}
              className={`${styles.page_item} ${currentPage === page ? styles.active : ''}`}
              onClick={() => goToPage(page)}
              onKeyDown={() => goToPage(page)}
              role='button'
              tabIndex={0}
            >
              {page}
            </div>
          );
        })}
        {currentPage < totalPages && (
          <button className={styles.page_button_next} onClick={() => goToPage(currentPage + 1)}>
            <Image alt='chevron' height={10} src='/chevron-white.svg' width={10} />
          </button>
        )}
        {currentPage < totalPages && (
          <button className={styles.page_button_last} onClick={() => goToPage(totalPages)}>
            Last
          </button>
        )}
      </div>
    </div>
  );
};
