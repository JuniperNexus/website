import { InterestedIn, Lane } from '@prisma/client';
import * as z from 'zod';

export const formSchema = z.object({
    first_name: z.string().min(2, 'First name must be at least 2 characters'),
    last_name: z.string().min(2, 'Last name must be at least 2 characters'),
    phone_number: z.string().min(10, 'Phone number must be at least 10 characters').max(10),
    address: z.string().min(5, 'Address must be at least 5 characters'),
    in_game_name: z.string().min(3, 'In-game name must be at least 3 characters'),
    lane: z.array(z.nativeEnum(Lane)).min(1, 'Select at least one lane'),
    interested_in: z.array(z.nativeEnum(InterestedIn)).min(1, 'Select at least one interest'),
});

export type FormValues = z.infer<typeof formSchema>;
