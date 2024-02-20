import { Montserrat, Nunito_Sans } from 'next/font/google';

import '../src/styles/globals.scss';
import type { RooutObjectNavigation } from '@/types/navigation';
import type { ServiceCategory } from '@/types/service-page';
import { Layout } from '@/ui';
import { MobileMenu } from '@/ui/mobile/navigation/MobileMenu';
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
        <div className='wrapper'>
          <Layout.Header categories={categories?.data} data={data} />

          <main className='container'>{children}</main>
          <Layout.Footer data={data} />
        </div>
      </body>
    </html>
  );
}
