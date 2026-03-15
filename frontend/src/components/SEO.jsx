import React from 'react';
import { Helmet } from 'react-helmet-async';

const defaultSEO = {
  title: 'HelioHarvest | #1 Solar Installation Services in India',
  description: 'Professional solar panel installation for homes & businesses across India. MNRE certified. 25-year warranty. Save up to 40% on electricity bills.',
  keywords: 'solar installation India, solar panels Coimbatore, solar energy Tamil Nadu, rooftop solar',
  image: 'https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-aid--e21723bb-55e4-46e1-9f69-1ec8f940f854/1.png?width=1200',
  url: 'https://helioharvest.in',
};

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website'
}) {
  const seo = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Canonical */}
      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
}
