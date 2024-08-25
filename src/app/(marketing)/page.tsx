import { commonMetaData } from '@/lib/meta';

export function generateMetadata() {
    const metaData = commonMetaData({
        title: 'The Ultimate Next.js Boilerplate for Scalable Web Applications"',
        description:
            'Supercharge your web development with Axiom, a modern boilerplate featuring Next.js, TypeScript, Prisma, NextAuth.js, and Tailwind CSS. Build scalable, high-performance applications with speed and ease.',
    });

    return metaData;
}

export default function Page() {
    return <></>;
}
