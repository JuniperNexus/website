interface NavigationItem {
    title: string;
    href: string;
    external?: boolean;
}

export const navigation: NavigationItem[] = [
    {
        title: 'GitHub',
        href: 'https://github.com/pyyupsk/axiom',
        external: true,
    },
];
