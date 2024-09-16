import { type UseFormReturn } from 'react-hook-form';
import { type FormValues } from '../formSchema';

export function SummaryStep({ form }: { form: UseFormReturn<FormValues> }) {
    const { getValues } = form;
    const formData = getValues();

    return (
        <div className="space-y-4">
            <h2>Summary</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3>Personal Information</h3>
                    <p>
                        Name: {formData.first_name} {formData.last_name}
                    </p>
                    <p>Phone: {formData.phone_number}</p>
                    <p>Address: {formData.address}</p>
                </div>
                <div>
                    <h3>Game Information</h3>
                    <p>In-Game Name: {formData.in_game_name}</p>
                    <p>Preferred Lanes: {formData.lane.join(', ')}</p>
                    <p>Interests: {formData.interested_in.join(', ')}</p>
                </div>
            </div>
            <p className="mt-4 text-muted-foreground">
                Please review your information before submitting.
            </p>
        </div>
    );
}
