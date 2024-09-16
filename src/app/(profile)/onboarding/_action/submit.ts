'use server';

import { prisma } from '@/server/db';
import { Prisma, type Profile } from '@prisma/client';

interface SubmitResponse {
    success: boolean;
    message: string;
    error?: string;
}

export async function submit(values: Omit<Profile, 'id'>): Promise<SubmitResponse> {
    try {
        const user = await prisma.profile.create({ data: values });
        if (!user) {
            return {
                success: false,
                message: 'Failed to create user profile.',
            };
        }

        return {
            success: true,
            message: 'User profile created successfully.',
        };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return {
                    success: false,
                    message: 'User with this user_id already exists.',
                };
            }

            return {
                success: false,
                message: 'Failed to create user profile.',
                error: error.message,
            };
        }

        return {
            success: false,
            message: 'Failed to create user profile.',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}
