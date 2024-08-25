import JuniperNexusLogo from '@/assets/logo/juniper-nexus.svg';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
    return (
        <Image
            src={JuniperNexusLogo}
            alt="Juniper Nexus Logo"
            className={className}
            width={100}
            height={100}
        />
    );
}
