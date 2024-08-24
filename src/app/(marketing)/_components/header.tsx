'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Menu, Zap } from 'lucide-react';
import Link from 'next/link';
import { navigation } from '../_constants/navigation';
import { SignIn } from './sign-in';

export function Header() {
    const scrolled = useScroll(50);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 transition-all duration-300',
                scrolled ? 'border-b bg-background/50 backdrop-blur-xl' : 'bg-background/0',
            )}
        >
            <Container reverse>
                <div className="container flex h-14 items-center justify-between">
                    <div className="flex space-x-6">
                        <Link className="flex items-center space-x-2 text-primary" href="/">
                            <Zap className="size-6" />
                            <span className="text-xl font-bold">Axiom</span>
                        </Link>
                        <nav className="hidden md:inline-flex">
                            <ul className="flex items-center space-x-6 text-sm font-medium">
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
                        </nav>
                    </div>
                    <SignIn className="hidden md:inline-flex" />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            >
                                <Menu className="size-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <Link className="mr-6 flex items-center space-x-2" href="/">
                                <Zap className="size-6" />
                                <span className="font-bold">Axiom</span>
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
                            <SignIn className="w-full" />
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </header>
    );
}
