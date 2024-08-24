import Link from 'next/link';
import { navigation } from '../_constants/navigation';

export function Footer() {
    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()}{' '}
                    <Link
                        href="https://github.com/pyyupsk/axiom"
                        target="_blank"
                        rel="noreferrer"
                        className="text-highlight underline"
                    >
                        Axiom
                    </Link>
                    , Made with ❤️ by{' '}
                    <Link
                        href="https://github.com/pyyupsk"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        @pyyupsk
                    </Link>
                </p>
                <nav>
                    <ul className="flex space-x-6">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    target={item.external ? '_blank' : undefined}
                                    className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
