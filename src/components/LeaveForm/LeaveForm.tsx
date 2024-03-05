import type { FC } from 'react';
import React from 'react';

import type { Review } from '@/types/home-page';
import { Rating } from '@/ui/rating/rating';

export const LeaveForm: FC<{ review: Review }> = ({ review }) => (
  <section>
    <Rating review={review} />
  </section>
);
