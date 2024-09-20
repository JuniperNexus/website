import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(['development', 'test', 'production']),
        DATABASE_URL: z.string(),
        AUTH_DISCORD_ID: z.string(),
        AUTH_DISCORD_SECRET: z.string(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
        AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    },
});
