'use client';

import { cn } from '@/lib/utils';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { memo, useCallback, useState } from 'react';
import { Button } from './button';

export const Snippet = memo(({ command, className }: { command: string; className?: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [command]);

    return (
        <div
            className={cn(
                'relative flex h-9 items-center rounded-md border bg-background px-4',
                className,
            )}
        >
            <pre className="mr-6 font-mono text-sm before:select-none before:content-['$_']">
                {command}
            </pre>
            <Button
                variant="transparent"
                size="iconx"
                className="absolute right-1 top-2/4 size-9 -translate-y-2/4"
                onClick={handleCopy}
            >
                <CheckIcon
                    className={cn(
                        'absolute h-4 w-4 transition-all',
                        copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
                    )}
                />
                <CopyIcon
                    className={cn(
                        'absolute h-4 w-4 transition-all',
                        copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
                    )}
                />
            </Button>
        </div>
    );
});

Snippet.displayName = 'Snippet';
