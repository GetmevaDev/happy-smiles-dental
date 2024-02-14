import Link from 'next/link';

import { ROUTES } from '@/utils/constants';

const NotFound = () => (
  <div className='not-found'>
    <Link href={ROUTES.ROOT}>Go to Home </Link>
  </div>
);

export default NotFound;
