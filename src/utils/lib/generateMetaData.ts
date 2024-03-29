interface Data {
  attributes?: {
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
      metaImage?: {
        data?: {
          attributes?: {
            url?: string;
            width?: number;
            height?: number;
          };
        };
      };
    };
  };
}

export function generateSeoMetaData(data: Data) {
  return {
    title: data?.attributes?.seo?.metaTitle,
    description: data?.attributes?.seo?.metaDescription,

    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        me: ['support@robertgerov.com', 'https://robertgerov.com/']
      }
    },

    twitter: {
      card: 'summary_large_image',
      title: data?.attributes?.seo?.metaTitle,
      description: data?.attributes?.seo?.metaDescription,
      image: {
        url: data?.attributes?.seo?.metaImage?.data?.attributes?.url
      }
    },

    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    openGraph: {
      title: data?.attributes?.seo?.metaTitle,
      description: data?.attributes?.seo?.metaDescription,
      url: '',
      siteName: 'Cosmetic & Implant Dentist: New Hyde Park, NY',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: data?.attributes?.seo?.metaImage?.data?.attributes?.url,
          width: data?.attributes?.seo?.metaImage?.data?.attributes?.width,
          height: data?.attributes?.seo?.metaImage?.data?.attributes?.height
        }
      ]
    }
  };
}
