'use client';

import { Logo } from '@/components/logo';
// import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
// import { Menu } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
// import { navigation } from '../_constants/navigation';
import { SignIn } from './sign-in';
import { UserButton } from './user-button';

export function Header() {
    const { data: session } = useSession();
    const scrolled = useScroll(50);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 transition-all duration-300',
                scrolled ? 'border-b bg-background/50 backdrop-blur-xl' : 'bg-background/0',
            )}
        >
            <Container reverse>
                <div className="container flex h-20 items-center justify-between">
                    <div className="flex space-x-6">
                        <Link className="flex items-center space-x-2 text-primary" href="/">
                            <Logo className="size-8" />
                            <span className="text-xl font-bold text-highlight">Juniper Nexus</span>
                        </Link>
                        {/* <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:inline-flex">
                            <ul className="flex items-center space-x-6 font-medium">
                                {navigation.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            target={item.external ? '_blank' : undefined}
                                            className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav> */}
                    </div>
                    {/* {session ? (
                        <UserButton user={session.user} className="hidden lg:inline-flex" />
                    ) : (
                        <SignIn className="hidden lg:inline-flex" />
                    )} */}
                    {session ? <UserButton user={session.user} /> : <SignIn />}
                    {/* <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
                            >
                                <Menu className="size-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <Link className="mr-6 flex items-center space-x-2" href="/">
                                <Logo className="size-8" />
                                <span className="text-xl font-bold text-highlight">
                                    Juniper Nexus
                                </span>
                            </Link>
                            <ul className="my-6 flex flex-col space-y-4 border-t py-6">
                                {navigation.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            target={item.external ? '_blank' : undefined}
                                            className="text-lg font-medium hover:underline"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {session ? (
                                <UserButton user={session.user} className="w-full" />
                            ) : (
                                <SignIn className="w-full" />
                            )}
                        </SheetContent>
                    </Sheet> */}
                </div>
            </Container>
        </header>
    );
}
