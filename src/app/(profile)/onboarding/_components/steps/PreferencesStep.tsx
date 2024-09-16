import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InterestedIn } from '@prisma/client';
import { type UseFormReturn } from 'react-hook-form';
import { type FormValues } from '../formSchema';

export function PreferencesStep({ form }: { form: UseFormReturn<FormValues> }) {
    return (
        <div className="space-y-4">
            <h2>Your Interests</h2>
            <FormField
                control={form.control}
                name="interested_in"
                render={() => (
                    <FormItem>
                        <FormLabel>I&apos;m interested in:</FormLabel>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                            {Object.values(InterestedIn).map((interest) => (
                                <FormField
                                    key={interest}
                                    control={form.control}
                                    name="interested_in"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={interest}
                                                className="flex flex-row items-start space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={
                                                            Array.isArray(field.value) &&
                                                            field.value.includes(interest)
                                                        }
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([
                                                                      ...(field.value || []),
                                                                      interest,
                                                                  ])
                                                                : field.onChange(
                                                                      (field.value || []).filter(
                                                                          (value) =>
                                                                              value !== interest,
                                                                      ),
                                                                  );
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    {interest.replace('_', ' ')}
                                                </FormLabel>
                                            </FormItem>
                                        );
                                    }}
                                />
                            ))}
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
