import { Montserrat, Nunito_Sans } from 'next/font/google';

import '../src/styles/globals.scss';
import type { NavigationI } from '@/types/navigation';
import { Layout } from '@/ui';
import { fetchAPI } from '@/utils/api/fetchApi';

export const mont = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mont'
});

export const nunito = Nunito_Sans({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-nunito'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${mont.variable} ${nunito.variable}`} lang='en'>
      <body>
        <Layout.Header data={[]} />
        <div className='container'>{children}</div>
        <Layout.Footer data={[]} />
      </body>
    </html>
  );
}
