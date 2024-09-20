'use client';

import { Separator } from '@/components/ui/separator';
import { UserDropdown } from '@/components/user-dropdown';
import { cn } from '@/lib/utils';
import { Calendar, CreditCard, DollarSign } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

const navigations: NavigationItem[] = [
    {
        name: 'Overview',
        href: '/dashboard',
        icon: DollarSign,
    },
    {
        name: 'Events',
        href: '/dashboard/events',
        icon: Calendar,
    },
    {
        name: 'Transactions',
        href: '/dashboard/transactions',
        icon: CreditCard,
    },
];

export function Sidebar() {
    const { data: session } = useSession();
    const pathname = usePathname();
    const active = navigations.find((item) => item.href === pathname);

    return (
        <div className="w-64 border-r bg-card">
            <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                    src="https://lienquan.garena.vn/wp-content/uploads/2024/05/b12e3849968a910bd641d3213419f3986597b67bbeda61.jpg"
                    alt="Banner"
                    width={500}
                    height={500}
                    className="absolute inset-0 aspect-video opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <h1 className="text-3xl text-white">Juniper Nexus</h1>
                    <p className="text-white">Dashboard</p>
                </div>
            </div>
            <nav className="flex flex-col py-4">
                {navigations.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            'flex items-center gap-2 px-2 py-4 font-medium transition-all',
                            active?.href === item.href
                                ? 'border-l-4 border-primary bg-primary/10 text-primary'
                                : 'text-muted-foreground/60 hover:border-l-4 hover:border-primary hover:bg-primary/10 hover:text-primary',
                        )}
                    >
                        <item.icon className="mr-2 size-5" />
                        {item.name}
                    </Link>
                ))}
            </nav>
            <div className="absolute bottom-0 flex w-64 flex-col gap-2 p-4">
                <UserDropdown session={session} />
                <Separator />
                <p className="text-center text-xs text-muted-foreground">
                    Copyright © {new Date().getFullYear()} Juniper Nexus.
                </p>
            </div>
        </div>
    );
}
