'use client';

import { navigate } from '@/app/action/navigate';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { type Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submit } from '../_action/submit';
import { formSchema, type FormValues } from './formSchema';
import { steps } from './steps';
import { ContactInfoStep } from './steps/ContactInfoStep';
import { GameInfoStep } from './steps/GameInfoStep';
import { PersonalInfoStep } from './steps/PersonalInfoStep';
import { PreferencesStep } from './steps/PreferencesStep';
import { SummaryStep } from './steps/SummaryStep';
import { ThankYouStep } from './steps/ThankYouStep';

export function FormCard({ session }: { session: Session | null }) {
    const [step, setStep] = useState(1);
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            phone_number: '',
            address: '',
            in_game_name: '',
            lane: undefined,
            interested_in: [],
        },
    });

    const handlePrev = () => setStep((prev) => prev - 1);
    const handleNext = async () => {
        const result = await form.trigger(steps.find((s) => s.step === step)?.feilds ?? []);
        if (!result) return;
        setStep((prev) => prev + 1);
    };

    const onSubmit = async (values: FormValues) => {
        if (!session) {
            console.error('Session not found');
            toast({
                title: 'Error',
                description: 'Please login to continue',
                action: (
                    <Button variant="secondary" onClick={() => signIn()}>
                        Sign in
                    </Button>
                ),
                variant: 'destructive',
            });
            return;
        }

        try {
            const response = await submit({
                ...values,
                user_id: session.user.id as string,
            });

            if (!response.success) {
                console.error(response);
                toast({
                    title: 'Error',
                    description: response.message,
                    variant: 'destructive',
                });
                return;
            }

            setStep(6);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error',
                description: 'Something went wrong',
                variant: 'destructive',
            });
        }
    };

    return (
        <div className="w-full max-w-4xl overflow-hidden rounded-2xl border bg-card shadow-xl">
            <div className="p-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {step === 1 && <PersonalInfoStep form={form} />}
                        {step === 2 && <ContactInfoStep form={form} />}
                        {step === 3 && <GameInfoStep form={form} />}
                        {step === 4 && <PreferencesStep form={form} />}
                        {step === 5 && <SummaryStep form={form} />}
                        {step === 6 && <ThankYouStep />}

                        <div className="mt-8 flex justify-between">
                            {step > 1 && step < 6 && (
                                <Button
                                    type="button"
                                    onClick={() => handlePrev()}
                                    variant="outline"
                                >
                                    <ArrowLeft className="mr-2 size-4" /> Previous
                                </Button>
                            )}
                            {step < 5 && (
                                <Button
                                    type="button"
                                    onClick={() => handleNext()}
                                    className="ml-auto"
                                >
                                    Next <ArrowRight className="ml-2 size-4" />
                                </Button>
                            )}
                            {step === 5 && (
                                <Button type="submit" className="ml-auto">
                                    Submit <CheckCircle className="ml-2 size-4" />
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>

                <div className="mt-8">
                    <div className="flex items-center justify-between space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className={`h-2 w-1/5 rounded-full ${i <= step ? 'bg-primary' : 'bg-muted'}`}
                            />
                        ))}
                    </div>
                    <p className="mt-2 text-center text-muted-foreground">Step {step} of 5</p>
                </div>
            </div>
        </div>
    );
}
