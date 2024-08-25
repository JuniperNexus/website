import { DiscordIcon } from '@/components/icons/discord';
import { FacebookIcon } from '@/components/icons/facebook';
import { TiktokIcon } from '@/components/icons/tiktok';

interface SocialItem {
    title: string;
    href: string;
    icon: React.ElementType;
}

export const social: SocialItem[] = [
    {
        title: 'Discord',
        href: 'https://discord.gg/juniper-nexus',
        icon: DiscordIcon,
    },
    {
        title: 'TikTok',
        href: 'https://www.tiktok.com/@jpn.rov',
        icon: TiktokIcon,
    },
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61556303832596',
        icon: FacebookIcon,
    },
];
