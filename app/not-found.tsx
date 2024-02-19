import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/ui/button/button';
import { ROUTES } from '@/utils/constants';

const NotFound = () => (
  <div className='not-found'>
    <div className='top'>
      <div>4</div>
      <Image alt='logo' className='title' height={223} src='/404.png' width={223} />
      <div>4</div>
    </div>
    <div className='lorem'>
      Lorem ipsum dolor sit amet consectetur adipisicing <br />
      elit. Magni, voluptatum.
    </div>
    <Link href={ROUTES.ROOT}>
      <Button>Go to Home</Button>
    </Link>
  </div>
);

export default NotFound;
