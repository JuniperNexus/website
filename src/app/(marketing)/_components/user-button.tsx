'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChartBarIcon, LogOutIcon, SettingsIcon } from 'lucide-react';
import { type User } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export function UserButton({ user, className }: { user: User | undefined; className?: string }) {
    const username = user?.name || user?.email;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={className} asChild>
                <Button variant="ghost">
                    <Avatar className="mr-2 size-6">
                        <AvatarImage
                            src={
                                user?.image ||
                                `https://ui-avatars.com/api/?name=${username?.split(' ')[0]}`
                            }
                        />
                        <AvatarFallback>{username}</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Open user menu</span>
                    {username}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <Link href="/dashboard">
                    <DropdownMenuItem className="cursor-pointer">
                        <ChartBarIcon className="mr-2 size-4" />
                        <span>Dashboard</span>
                    </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/settings">
                    <DropdownMenuItem className="cursor-pointer">
                        <SettingsIcon className="mr-2 size-4" />
                        <span>Account settings</span>
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="cursor-pointer"
                >
                    <LogOutIcon className="mr-2 size-4" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
