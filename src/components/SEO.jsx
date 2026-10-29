import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const DEFAULT_SEO = {
  siteName: 'MOBYFLOW',
  titleTemplate: '%s | MOBYFLOW - Nền Tảng Quản Trị & Bán Hàng Trực Tuyến',
  defaultTitle: 'MOBYFLOW - Hệ Thống Quản Trị Bán Hàng Thông Minh & Tối Ưu Doanh Thu',
  description:
    'Phần mềm quản lý bán hàng MOBYFLOW trên nền tảng MERN Stack hiện đại: quản trị đơn hàng, người dùng, phân tích doanh thu và đồng bộ vận hành tự động.',
  keywords:
    'mobyflow, quản trị bán hàng, thương mại điện tử, dashboard bán hàng, quản lý đơn hàng, mern stack nextjs, quản lý người dùng, crm bán hàng',
  siteUrl: 'https://mobyflow.vn',
  defaultImage: 'https://mobyflow.vn/images/og-image.jpg',
  twitterHandle: '@mobyflow',
  locale: 'vi_VN',
};

const SEO = ({
  title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_SEO.defaultImage,
  noindex = false,
  structuredData,
}) => {
  const router = useRouter();
  const currentPath = router?.asPath?.split('?')[0] || '';
  const canonicalUrl = canonical || `${DEFAULT_SEO.siteUrl}${currentPath === '/' ? '' : currentPath}`;

  const fullTitle = title
    ? DEFAULT_SEO.titleTemplate.replace('%s', title)
    : DEFAULT_SEO.defaultTitle;

  // Base Structured Data (Organization + WebSite)
  const defaultSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName,
      url: DEFAULT_SEO.siteUrl,
      logo: `${DEFAULT_SEO.siteUrl}/images/logo-mobyflow.png`,
      description: DEFAULT_SEO.description,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84-901-234-567',
        contactType: 'customer service',
        areaServed: 'VN',
        availableLanguage: ['Vietnamese', 'English'],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: DEFAULT_SEO.siteName,
      url: DEFAULT_SEO.siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${DEFAULT_SEO.siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ];

  const schemasToRender = structuredData
    ? Array.isArray(structuredData)
      ? [...defaultSchema, ...structuredData]
      : [...defaultSchema, structuredData]
    : defaultSchema;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="author" content="MOBYFLOW Development Team" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / Zalo */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
      <meta property="og:locale" content={DEFAULT_SEO.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={DEFAULT_SEO.twitterHandle} />
      <meta name="twitter:creator" content={DEFAULT_SEO.twitterHandle} />

      {/* Structured Data (JSON-LD) */}
      {schemasToRender.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default SEO;
