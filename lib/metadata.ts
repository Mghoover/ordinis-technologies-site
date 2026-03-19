import type { Metadata } from 'next';
import { geoMeta, siteConfig } from '@/lib/site';

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const url = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    other: geoMeta,
  };
}
