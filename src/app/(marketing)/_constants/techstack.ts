import NextAuthLogo from '@/assets/images/logomark/nextauth.webp';
import NextjsLogo from '@/assets/images/logomark/nextjs.svg';
import PrismaLogo from '@/assets/images/logomark/prisma.svg';
import ShancnLogo from '@/assets/images/logomark/shancn.svg';
import TailwindLogo from '@/assets/images/logomark/tailwind.svg';
import TypescriptLogo from '@/assets/images/logomark/typescript.svg';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';

interface TechStackItem {
    title: string;
    description: string;
    logos: {
        src: StaticImport;
        alt: string;
    }[];
}

export const techStack: TechStackItem[] = [
    {
        title: 'Modern Framework + Type Safety',
        description:
            'Next.js and TypeScript deliver powerful, scalable applications with robust type safety and enhanced developer experience.',
        logos: [
            {
                src: NextjsLogo as StaticImport,
                alt: 'Next.js Logo',
            },
            {
                src: TypescriptLogo as StaticImport,
                alt: 'TypeScript Logo',
            },
        ],
    },
    {
        title: 'Effortless Data + Secure Auth',
        description:
            'Prisma ORM streamlines database management, while NextAuth.js ensures secure and flexible authentication.',
        logos: [
            {
                src: PrismaLogo as StaticImport,
                alt: 'Prisma Logo',
            },
            {
                src: NextAuthLogo as StaticImport,
                alt: 'NextAuth Logo',
            },
        ],
    },
    {
        title: 'Stylish UI + Ready Components',
        description:
            'Tailwind CSS and Shadcn/UI provide a utility-first approach and pre-built components for beautiful, responsive designs.',
        logos: [
            {
                src: TailwindLogo as StaticImport,
                alt: 'Tailwind Logo',
            },
            {
                src: ShancnLogo as StaticImport,
                alt: 'Shadcn Logo',
            },
        ],
    },
];
