import { Footer } from './_components/footer';
import { Header } from './_components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="relative min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
