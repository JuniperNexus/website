import { type FormValues } from '../formSchema';

interface StepProps {
    step: number;
    title: string;
    description: string;
    feilds: (keyof FormValues)[];
}

export const steps: StepProps[] = [
    {
        step: 1,
        title: 'Personal Information',
        description: "Let's start with your name",
        feilds: ['first_name', 'last_name'],
    },
    {
        step: 2,
        title: 'Contact Information',
        description: 'How can we reach you?',
        feilds: ['phone_number', 'address'],
    },
    {
        step: 3,
        title: 'Gaming Preferences',
        description: 'Tell us about your gaming style',
        feilds: ['in_game_name', 'lane'],
    },
    {
        step: 4,
        title: 'Additional Information',
        description: 'Tell us about yourself',
        feilds: ['interested_in'],
    },
];
