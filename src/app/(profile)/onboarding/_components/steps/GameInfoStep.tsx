import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Lane } from '@prisma/client';
import { type UseFormReturn } from 'react-hook-form';
import { type FormValues } from '../formSchema';

export function GameInfoStep({ form }: { form: UseFormReturn<FormValues> }) {
    return (
        <div className="space-y-4">
            <h2>Game Information</h2>
            <FormField
                control={form.control}
                name="in_game_name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>In-Game Name</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="lane"
                render={() => (
                    <FormItem>
                        <FormLabel>Preferred Lane(s)</FormLabel>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                            {Object.values(Lane).map((lane) => (
                                <FormField
                                    key={lane}
                                    control={form.control}
                                    name="lane"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={lane}
                                                className="flex flex-row items-start space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={
                                                            Array.isArray(field.value) &&
                                                            field.value.includes(lane)
                                                        }
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([
                                                                      ...(field.value || []),
                                                                      lane,
                                                                  ])
                                                                : field.onChange(
                                                                      (field.value || []).filter(
                                                                          (value) => value !== lane,
                                                                      ),
                                                                  );
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    {lane.replace('_', ' ')}
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
