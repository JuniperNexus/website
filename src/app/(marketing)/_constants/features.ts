import { CodeIcon, LayersIcon, ShieldCheckIcon } from 'lucide-react';

interface FeatureItem {
    title: string;
    description: string;
    icon: React.ElementType;
}

export const features: FeatureItem[] = [
    {
        title: 'Rapid Development',
        description:
            'Get up and running quickly with a pre-configured setup, enabling you to focus on building features instead of boilerplate code.',
        icon: CodeIcon,
    },
    {
        title: 'Scalable Architecture',
        description:
            'Leverage the power of Next.js and Prisma to build applications that are not only fast but can also scale effortlessly as your project grows.',
        icon: LayersIcon,
    },
    {
        title: 'Type-Safe and Secure',
        description:
            'Ensure code quality and security with TypeScript and NextAuth.js, providing type safety and robust authentication out of the box.',
        icon: ShieldCheckIcon,
    },
];
