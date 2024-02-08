'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import { AccordionItem } from './accordion-item/accordion-item';

export type AccordionData = {
  title: string;
  content: ReactNode;
};

export function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <ul>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          btnOnClick={() => btnOnClick(idx)}
          data={item}
          isOpen={idx === currentIdx}
        />
      ))}
    </ul>
  );
}
