'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react';
import { type Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

export function UserDropdown({ session }: { session: Session | null }) {
    const [open, setOpen] = useState(false);
    const user = session?.user;

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar className="size-8">
                            <AvatarImage
                                src={
                                    user?.image || `https://ui-avatars.com/api/?name=${user?.name}`
                                }
                                alt="User avatar"
                            />
                            <AvatarFallback>{user ? user.name?.[0] : 'U'}</AvatarFallback>
                        </Avatar>
                        <span>{user?.name || user?.email || 'Loading...'}</span>
                    </div>
                    <ChevronDown className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {user?.name || user?.email || 'Loading...'} - ({user?.role})
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user?.email || 'Loading...'}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <UserIcon className="mr-2 size-4" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon className="mr-2 size-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                    <LogOutIcon className="mr-2 size-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
