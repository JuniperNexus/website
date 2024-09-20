import { env } from '@/env';
import { prisma } from '@/server/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { type $Enums } from '@prisma/client';
import NextAuth, { type DefaultSession } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

declare module 'next-auth' {
    export interface Session {
        user: {
            role: $Enums.Role;
        } & DefaultSession['user'];
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        DiscordProvider({
            clientId: env.AUTH_DISCORD_ID,
            clientSecret: env.AUTH_DISCORD_SECRET,
            authorization:
                'https://discord.com/api/oauth2/authorize?scope=identify+guilds+email+guilds.members.read',
        }),
    ],
    callbacks: {
        session: ({ session }) => ({
            ...session,
            user: {
                ...session.user,
                role: session.user.role as $Enums.Role,
            },
        }),
    },
    pages: {
        newUser: '/onboarding',
    },
});
