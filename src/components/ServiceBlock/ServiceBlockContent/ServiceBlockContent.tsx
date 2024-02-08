import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

export const ServiceBlockContent: FC<{ image?: string; content?: React.ReactNode }> = ({
  image,
  content
}) => (
  <div>
    <Image alt='care' height={300} src='/care.png' width={806} />
  </div>
);
