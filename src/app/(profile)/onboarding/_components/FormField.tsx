'use client';

import {
    FormField as BaseFormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Lane } from '@prisma/client';
import { type Control } from 'react-hook-form';
import { type FormValues } from './formSchema';

interface RenderFormFieldProps {
    name: keyof FormValues;
    label: string;
    type?: 'text' | 'radio' | 'textarea';
    control: Control<FormValues>;
}

export function FormField({ name, label, type = 'text', control }: RenderFormFieldProps) {
    return (
        <BaseFormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {type === 'radio' ? (
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value as string}
                                className="flex flex-col space-y-1"
                            >
                                {Object.values(Lane).map((lane) => (
                                    <FormItem
                                        className="flex items-center space-x-3 space-y-0"
                                        key={lane}
                                    >
                                        <FormControl>
                                            <RadioGroupItem value={lane} />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            {lane.replace('_', ' ').toLowerCase()}
                                        </FormLabel>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        ) : type === 'textarea' ? (
                            <Textarea
                                onChange={field.onChange}
                                defaultValue={field.value as string}
                            />
                        ) : (
                            <Input onChange={field.onChange} defaultValue={field.value as string} />
                        )}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
