import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, path }) => {
  const defaultTitle = 'SQLD Study - SQL 개발자 자격증 학습';
  const defaultDescription = 
    'SQLD 자격증 시험 준비를 위한 무료 학습 사이트 | SQLD 기출문제, 모의고사, 핵심 이론 정리, SQLD 시험공부 가이드';
  const defaultKeywords = 
    'SQLD, SQLD자격증, SQLD공부, SQLD기출, SQLD문제, SQLD시험공부, SQL개발자, 데이터베이스, SQL, 자격증';
  
  const siteUrl = 'https://sqld-study.web.app';
  const pageUrl = path ? `${siteUrl}/${path}` : siteUrl;
  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  
  // Schema.org 구조화된 데이터
  const schemaOrgWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': defaultTitle,
    'url': siteUrl,
    'description': defaultDescription,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
  
  const schemaOrgWebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': pageUrl
    },
    'name': seoTitle,
    'description': description || defaultDescription,
    'inLanguage': 'ko-KR'
  };

  const schemaOrgEducationalOrganization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'SQLD Study',
    'url': siteUrl,
    'description': defaultDescription,
    'email': 'devimun909@gmail.com'
  };
  
  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      
      {/* 표준 URL 지정 */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Schema.org 구조화된 데이터 */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebsite)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgEducationalOrganization)}
      </script>
    </Helmet>
  );
};

export default SEO; 