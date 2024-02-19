'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { FC } from 'react';
import { useState } from 'react';

import styles from './pagination.module.scss';

export const Pagination: FC<{ totalPages: number }> = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const router = useRouter();

  const goToPage = (page: number) => {
    // setCurrentPage(page);
    router.push(`/blog/?page=${page}`);
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
      </div>
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
  );
};
