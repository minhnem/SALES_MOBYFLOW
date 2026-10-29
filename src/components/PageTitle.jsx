import React from 'react';
import { Typography, Breadcrumb } from 'antd';
import Head from 'next/head';

const { Title, Paragraph } = Typography;

const PageTitle = ({ title, subtitle, breadcrumbItems = [], extra, headingId = 'page-main-heading' }) => {
  // Generate BreadcrumbList structured data for rich snippets if breadcrumbs exist
  const breadcrumbSchema =
    breadcrumbItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.title,
            ...(item.href ? { item: `https://mobyflow.vn${item.href}` } : {}),
          })),
        }
      : null;

  return (
    <>
      {breadcrumbSchema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        </Head>
      )}
      <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between pb-4 border-b border-gray-100">
        <div>
          {breadcrumbItems.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-2">
              <Breadcrumb items={breadcrumbItems} />
            </nav>
          )}
          <Title
            id={headingId}
            level={1}
            className="!text-2xl !font-bold !text-gray-900 !mb-0 tracking-tight"
          >
            {title}
          </Title>
          {subtitle && (
            <Paragraph type="secondary" className="!mb-0 mt-1 text-sm text-gray-500">
              {subtitle}
            </Paragraph>
          )}
        </div>
        {extra && <div className="mt-4 md:mt-0">{extra}</div>}
      </header>
    </>
  );
};

export default PageTitle;
