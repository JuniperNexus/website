import { commonMetaData } from '@/lib/meta';
import Image from 'next/image';

export function generateMetadata() {
    const metaData = commonMetaData({
        title: 'The Ultimate Next.js Boilerplate for Scalable Web Applications"',
        description:
            'Supercharge your web development with Axiom, a modern boilerplate featuring Next.js, TypeScript, Prisma, NextAuth.js, and Tailwind CSS. Build scalable, high-performance applications with speed and ease.',
    });

    return metaData;
}

export default function Page() {
    return (
        <>
            <section className="relative -mt-20 min-h-screen">
                <Image
                    alt="Hero Image"
                    src="https://lienquan.garena.vn/wp-content/uploads/2024/05/0c026845cdd6414fbd6c1bcb9fc70628660396d3c7f931.jpg"
                    quality={100}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            </section>
        </>
    );
}
