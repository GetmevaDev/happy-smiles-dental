/* eslint-disable import/order */
import { Montserrat } from 'next/font/google';

import '../src/styles/globals.scss';
import { GoogleTagManager } from '@next/third-parties/google';

import type { RooutObjectNavigation } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';
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
  const categories = await fetchAPI<{ data: ServiceCategory[] }>(`service-categories`);

  return (
    <html className={`${mont.variable}`} lang='en'>
      <link href='/favicon.png' rel='icon' />
      <body>
        <GoogleTagManager gtmId='GTM-NCH9NS93' />

        <noscript>
          <iframe
            height='0'
            src='https://www.googletagmanager.com/ns.html?id=GTM-NCH9NS93'
            style={{ display: 'none', visibility: 'hidden' }}
            title='tag'
            width='0'
          />
        </noscript>
        <div className='wrapper'>
          <Layout.Header categories={categories?.data} data={data} />

          <main>{children}</main>
          <Layout.Footer data={data} />
        </div>
      </body>
    </html>
  );
}
