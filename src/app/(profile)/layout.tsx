export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-highlight/5 p-4">
            {children}
        </div>
    );
}
