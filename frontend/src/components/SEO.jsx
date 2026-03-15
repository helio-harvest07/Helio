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
  title = defaultSEO.title, 
  description = defaultSEO.description, 
  keywords = defaultSEO.keywords, 
  image = defaultSEO.image, 
  url = defaultSEO.url,
  type = 'website'
}) {
  // Ensure all values are strings
  const seoTitle = String(title || defaultSEO.title);
  const seoDescription = String(description || defaultSEO.description);
  const seoKeywords = String(keywords || defaultSEO.keywords);
  const seoImage = String(image || defaultSEO.image);
  const seoUrl = String(url || defaultSEO.url);

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={seoUrl} />
    </Helmet>
  );
}
