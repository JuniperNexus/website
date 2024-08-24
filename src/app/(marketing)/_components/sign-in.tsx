'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { GithubIcon, Zap } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Balancer from 'react-wrap-balancer';

export function SignIn({ className }: { className?: string }) {
    return (
        <Dialog>
            <DialogTrigger className={className} asChild>
                <Button rounded="full">Sign in</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex flex-col items-center space-y-4">
                    <Zap className="size-10" />
                    <DialogTitle className="text-center text-xl">Sign In</DialogTitle>
                    <DialogDescription className="max-w-xs text-center">
                        <Balancer>
                            This is solely for demonstration purposes. Only your username email and
                            profile picture will be retained.
                        </Balancer>
                    </DialogDescription>
                    <DialogFooter>
                        <Button onClick={() => signIn('github')}>
                            <GithubIcon className="mr-2 size-5" />
                            Sign in with GitHub
                        </Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
