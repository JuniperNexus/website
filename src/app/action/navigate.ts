'use server';

import { redirect, type RedirectType } from 'next/navigation';

export async function navigate(url: string, type?: RedirectType) {
    redirect(url, type);
}
