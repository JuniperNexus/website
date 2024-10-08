import { type Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { type TemplateString } from 'next/dist/lib/metadata/types/metadata-types';

interface CommonMetaData {
    title: string | TemplateString;
    description: string;
}

export function commonMetaData({ title, description }: CommonMetaData): Metadata {
    return {
        title,
        description,
        authors: [{ name: '@pyyupsk' }],
        metadataBase: new URL('https://axiom-boilerplate.vercel.app'),
        openGraph: {
            title,
            description,
            images: [
                {
                    url: '/opengraph.png',
                    width: 1200,
                    height: 630,
                },
            ],
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
                'max-snippet': -1,
            },
        },
    };
}
