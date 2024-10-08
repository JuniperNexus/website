import { SessionProvider } from '@/components/session-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { fontHeading, fontMono, fontSans } from '@/styles/fonts';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Provider } from 'react-wrap-balancer';

export const metadata: Metadata = {
    title: 'Axiom Skeleton',
    description: 'Next.js TypeScript Tailwind CSS Template',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <SessionProvider>
            <html lang="th" suppressHydrationWarning>
                <body className={cn(fontSans.variable, fontHeading.variable, fontMono.variable)}>
                    <Provider>{children}</Provider>
                    <Toaster />
                </body>
            </html>
        </SessionProvider>
    );
};

export default RootLayout;
