import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://attest-next.vercel.app',
      images: '/banner.png',
      siteName: 'attest.docs',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@attest',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/banner.png',
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3001')
    : new URL(`https://${process.env.VERCEL_URL!}`);