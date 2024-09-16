import { auth } from '@/server/auth';
import { FormCard } from './_components/FormCard';

export default async function Page() {
    const session = await auth();
    return <FormCard session={session} />;
}
