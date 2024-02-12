import MarkdownIt from 'markdown-it';
import type { FC } from 'react';
import React from 'react';

import styles from './ServiceBlockContent.module.scss';

interface ServiceBlockContentProps {
  image?: string;
  content?: string;
}

export const ServiceBlockContent: FC<ServiceBlockContentProps> = ({ image, content }) => {
  const md = new MarkdownIt({
    html: true
  });

  const htmlTitle = content ? md.render(content) : '';

  return <div dangerouslySetInnerHTML={{ __html: htmlTitle }} className={styles.block} />;
};
