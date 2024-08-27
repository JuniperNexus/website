import { Footer } from './_components/footer';
import { Header } from './_components/header';
import { WelcomeBanner } from './_components/welcome-banner';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <WelcomeBanner />
            <Header />
            <main className="relative min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
