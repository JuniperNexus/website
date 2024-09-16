import { type FormValues } from './formSchema';

export const steps: { title: string; description: string; feilds: (keyof FormValues)[] }[] = [
    {
        title: 'Personal Information',
        description: "Let's start with your name",
        feilds: ['first_name', 'last_name'],
    },
    {
        title: 'Contact Information',
        description: 'How can we reach you?',
        feilds: ['phone_number', 'address'],
    },
    {
        title: 'Gaming Preferences',
        description: 'Tell us about your gaming style',
        feilds: ['in_game_name', 'lane'],
    },
    {
        title: 'Additional Information',
        description: 'Tell us about yourself',
        feilds: ['interested_in'],
    },
];
