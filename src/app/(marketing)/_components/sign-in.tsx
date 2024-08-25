'use client';

import { DiscordIcon } from '@/components/icons/discord';
import { Logo } from '@/components/logo';
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
import { signIn } from 'next-auth/react';
import Balancer from 'react-wrap-balancer';

export function SignIn({ className }: { className?: string }) {
    return (
        <Dialog>
            <DialogTrigger className={className} asChild>
                <Button rounded="full">เข้าสู่ระบบ</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex flex-col items-center space-y-4">
                    <Logo className="size-14" />
                    <DialogTitle className="text-center text-xl">เข้าสู่ระบบ</DialogTitle>
                    <DialogDescription className="max-w-sm text-center">
                        <Balancer>
                            เข้าถึงแดชบอร์ดส่วนตัวของคุณ
                            จัดการโปรไฟล์ของคุณและติดตามการอัพเดตด้วยกิจกรรมใหม่ๆ ของกิลด์
                        </Balancer>
                    </DialogDescription>
                    <DialogFooter>
                        <Button onClick={() => signIn('discord', { redirectTo: '/dashboard' })}>
                            <DiscordIcon className="mr-2 size-5" />
                            ลงชื่อเข้าใช้ด้วย Discord
                        </Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
