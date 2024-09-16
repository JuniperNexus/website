import { CheckCircle } from 'lucide-react';

export function ThankYouStep() {
    return (
        <div className="space-y-4 text-center">
            <CheckCircle className="mx-auto size-16 text-green-500" />
            <h2>Thank You for Signing Up!</h2>
            <p>Your profile has been created successfully. Get ready to dive into the game!</p>
        </div>
    );
}
