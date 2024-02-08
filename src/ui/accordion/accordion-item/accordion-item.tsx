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

  return (
    <li className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}>
      <h2 className={styles.accordionItemTitle}>
        <button className={styles.accordionItemBtn} onClick={btnOnClick}>
          {data.title}
        </button>
      </h2>
      <div className={styles.accordionItemContainer} style={{ height }}>
        <div ref={contentRef} className={styles.accordionItemContent}>
          {data.content}
        </div>
      </div>
    </li>
  );
}
