'use client';

import { navigate } from '@/app/action/navigate';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
    FormField as BaseFormField,
    Form,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { InterestedIn } from '@prisma/client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { type Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submit } from '../_action/submit';
import { FormField } from './FormField';
import { formSchema, type FormValues } from './formSchema';
import { steps } from './steps';

export function FormCard({ session }: { session: Session | null }) {
    const [step, setStep] = useState(0);
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

    const isLastStep = step === steps.length - 1;

    const prevStep = () => setStep((prev) => prev - 1);
    const nextStep = async () => {
        const result = await form.trigger(steps[step]?.feilds);
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
                lane: [values.lane],
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

            toast({
                title: 'Success',
                description: 'Profile created successfully',
            });
            navigate('/');
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
        <Card className="w-[550px]">
            <CardHeader>
                <CardTitle>{steps[step]?.title}</CardTitle>
                <CardDescription>{steps[step]?.description}</CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(() => onSubmit(form.getValues()))}>
                    <CardContent className="grid gap-4">
                        {steps[step]?.feilds.map((field) => {
                            if (field === 'interested_in') {
                                return (
                                    <BaseFormField
                                        key={field}
                                        control={form.control}
                                        name="interested_in"
                                        render={() => (
                                            <FormItem>
                                                <div className="mb-4">
                                                    <FormLabel className="text-base">
                                                        Interests
                                                    </FormLabel>
                                                    <FormDescription>
                                                        Select all that apply to you
                                                    </FormDescription>
                                                </div>
                                                {Object.values(InterestedIn).map((item) => (
                                                    <BaseFormField
                                                        key={item}
                                                        control={form.control}
                                                        name="interested_in"
                                                        render={({ field }) => (
                                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <Checkbox
                                                                        checked={field.value?.includes(
                                                                            item,
                                                                        )}
                                                                        onCheckedChange={(
                                                                            checked,
                                                                        ) => {
                                                                            return checked
                                                                                ? field.onChange([
                                                                                      ...field.value,
                                                                                      item,
                                                                                  ])
                                                                                : field.onChange(
                                                                                      field.value?.filter(
                                                                                          (value) =>
                                                                                              value !==
                                                                                              item,
                                                                                      ),
                                                                                  );
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    {item
                                                                        .replace('_', ' ')
                                                                        .toLowerCase()}
                                                                </FormLabel>
                                                            </FormItem>
                                                        )}
                                                    />
                                                ))}
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                );
                            }

                            return (
                                <FormField
                                    key={field}
                                    name={field}
                                    label={field.replace('_', ' ').toUpperCase()}
                                    control={form.control}
                                    type={
                                        field === 'lane'
                                            ? 'radio'
                                            : field === 'address'
                                              ? 'textarea'
                                              : 'text'
                                    }
                                />
                            );
                        })}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => prevStep()}
                            disabled={step === 0}
                        >
                            <ArrowLeft className="mr-2 size-4" /> Previous
                        </Button>
                        {isLastStep ? (
                            <Button type="submit">Complete</Button>
                        ) : (
                            <Button type="button" onClick={() => nextStep()}>
                                Next
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        )}
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
}
