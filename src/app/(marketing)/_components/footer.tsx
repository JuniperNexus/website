import Link from 'next/link';
import { legal } from '../_constants/legal';
import { navigation } from '../_constants/navigation';
import { social } from '../_constants/social';

export function Footer() {
    const from = 2024;
    const to = new Date().getFullYear();
    const copyright = from === to ? `${from}` : `${from} - ${to}`;

    return (
        <footer className="border-t bg-background py-8 text-foreground">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <div>
                        <h3 className="mb-2 font-semibold">Navigation</h3>
                        <ul className="space-y-1">
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
                    </div>
                    <div>
                        <h3 className="mb-2 font-semibold">Legal</h3>
                        <ul className="space-y-1">
                            {legal.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 font-semibold">Follow Us</h3>
                        <ul className="space-y-1">
                            {social.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        className="flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground hover:underline"
                                    >
                                        <item.icon className="mr-2 size-4" />
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {copyright} Juniper Nexus. สงวนลิขสิทธิ์.</p>
                </div>
            </div>
        </footer>
    );
}
