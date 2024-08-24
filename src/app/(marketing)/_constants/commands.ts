import { type Command } from '@/components/ui/terminal';

export const commands: Command[] = [
    {
        input: 'git clone https://github.com/pyyupsk/axiom.git',
        output: "Cloning into 'axiom'...",
    },
    { input: 'cd axiom', output: 'Switched directory to axiom' },
    {
        input: 'cp .env.example .env',
        output: 'Copied .env.example to .env',
    },
    {
        input: 'npm install',
        output: 'Installing dependencies...',
    },
    {
        input: 'npm run dev',
        output: [
            'Starting development server...',
            '▲ Next.js 14.2.5',
            'Local: http://localhost:3000',
        ],
    },
    {
        input: 'Easy way to get started with Axiom',
    },
];
