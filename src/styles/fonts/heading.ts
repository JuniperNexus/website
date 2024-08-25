import { Krub as FontHeading } from 'next/font/google';

export const fontHeading = FontHeading({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: ['200', '300', '400', '500', '600', '700'],
});
