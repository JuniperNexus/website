interface NavigationItem {
    title: string;
    href: string;
    external?: boolean;
}

export const navigation: NavigationItem[] = [
    {
        title: 'หน้าหลัก',
        href: '/',
    },
    {
        title: 'เกี่ยวกับเรา',
        href: '/about-us',
    },
    {
        title: 'สมาชิกที่โดดเด่น',
        href: '/outstanding-members',
    },
    {
        title: 'ชุมชน',
        href: '/community',
    },
    {
        title: 'ติดต่อเรา',
        href: '/contact-us',
    },
];
