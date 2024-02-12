import { Montserrat, Nunito_Sans } from 'next/font/google';

import '../src/styles/globals.scss';
import type { RooutObjectNavigation } from '@/types/navigation';
import { Layout } from '@/ui';
import { fetchAPI } from '@/utils/api/fetchApi';

export const mont = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mont'
});

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await fetchAPI<RooutObjectNavigation>('navigations');

  return (
    <html className={`${mont.variable}`} lang='en'>
      <body>
        <Layout.Header data={data} />
        <div className='container'>{children}</div>
        <Layout.Footer data={data} />
      </body>
    </html>
  );
}
