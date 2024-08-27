'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';
import useSWR from 'swr';

type Response = {
    members: Array<{
        id: string;
        username: string;
        status: 'online' | 'dnd' | 'idle' | 'offline';
        avatar_url: string;
    }>;
    presence_count: number;
};

const statusColors = {
    online: 'bg-green-500',
    dnd: 'bg-red-500',
    idle: 'bg-yellow-500',
    offline: 'bg-gray-500',
};

const statusLabels = {
    online: 'Online',
    dnd: 'Do Not Disturb',
    idle: 'Idle',
    offline: 'Offline',
};

export function ScrollingMembers() {
    const { data, isLoading } = useSWR<Response>(
        'https://discord.com/api/guilds/1231463340698767392/widget.json',
        (url: string | URL | Request) => fetch(url).then((res) => res.json()),
    );

    if (!data || isLoading) return null;

    const { members } = data;

    const membersPart1 = members.slice(0, members.length / 3);
    const membersPart2 = members.slice(members.length / 3, (members.length * 2) / 3);
    const membersPart3 = members.slice((members.length * 2) / 3, members.length);

    return (
        <section className="overflow-hidden py-24">
            <Marquee className="overflow-x-hidden [--duration:60s]">
                {membersPart1.map((member) => (
                    <MemberCard key={member.id} member={member} />
                ))}
            </Marquee>

            <Marquee reverse className="overflow-x-hidden [--duration:60s]">
                {membersPart2.map((member) => (
                    <MemberCard key={member.id} member={member} />
                ))}
            </Marquee>

            <Marquee className="overflow-x-hidden [--duration:60s]">
                {membersPart3.map((member) => (
                    <MemberCard key={member.id} member={member} />
                ))}
            </Marquee>
        </section>
    );
}

function MemberCard({ member }: { member: Response['members'][0] }) {
    return (
        <Card>
            <CardContent className="flex items-center space-x-4 p-4">
                <Avatar className="size-12">
                    <AvatarImage src={member.avatar_url} alt={member.username} />
                    <AvatarFallback>{member.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{member.username}</p>
                    <div className="flex items-center">
                        <div
                            className={`mr-1.5 size-2.5 rounded-full ${statusColors[member.status]}`}
                            aria-hidden="true"
                        ></div>
                        <p className="text-xs text-muted-foreground">
                            {statusLabels[member.status]}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
