import { Sidebar } from './_components/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}
