import type { FC } from 'react';
import React from 'react';

import type { BlockTop } from '@/types/technology-page';

import { Gray } from './Gray/Gray';
import { White } from './White/White';

export const Info: FC<{ blocks: BlockTop[] }> = ({ blocks }) => (
  <div>
    {blocks.map((block, index) => (
      <React.Fragment key={block.id}>
        {index % 2 === 0 ? <Gray {...block} /> : <White {...block} />}
      </React.Fragment>
    ))}
  </div>
);
