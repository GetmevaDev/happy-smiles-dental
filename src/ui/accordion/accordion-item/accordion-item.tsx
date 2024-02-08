import { useEffect, useRef, useState } from 'react';

import { getRefValue } from '@/utils/hooks/getRefValue';

import type { AccordionData } from '../accordion';

import styles from './accordion-item.module.scss';

export function AccordionItem({
  data,
  isOpen,
  btnOnClick
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const iconClass = `${styles.icon} ${isOpen ? styles.rotate : ''}`;

  return (
    <li className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}>
      <h2 className={styles.accordionItemTitle}>
        <button className={styles.accordionItemBtn} onClick={btnOnClick}>
          {data.title}
        </button>

        <div>
          <svg
            className={iconClass}
            fill='none'
            height='24'
            stroke='#DCA264'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polyline points='6 9 12 15 18 9' />
          </svg>
        </div>
      </h2>
      <div className={styles.accordionItemContainer} style={{ height }}>
        <div ref={contentRef} className={styles.accordionItemContent}>
          {data.content}
        </div>
      </div>
    </li>
  );
}
