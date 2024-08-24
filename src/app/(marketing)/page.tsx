import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Snippet } from '@/components/ui/snippet';
import { Terminal } from '@/components/ui/terminal';
import { commonMetaData } from '@/lib/meta';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { commands } from './_constants/commands';
import { features } from './_constants/features';
import { techStack } from './_constants/techstack';

export function generateMetadata() {
    const metaData = commonMetaData({
        title: 'The Ultimate Next.js Boilerplate for Scalable Web Applications"',
        description:
            'Supercharge your web development with Axiom, a modern boilerplate featuring Next.js, TypeScript, Prisma, NextAuth.js, and Tailwind CSS. Build scalable, high-performance applications with speed and ease.',
    });

    return metaData;
}

export default function Page() {
    return (
        <>
            <section className="relative">
                <div
                    className="absolute inset-0 blur-xl"
                    style={{
                        background:
                            'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(207, 72, 112, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)',
                    }}
                />
                <Container className="container relative flex h-[calc(100vh-3.5rem)] max-h-dvh flex-col items-center justify-center py-32">
                    <h1 className="max-w-2xl text-center">
                        <Balancer>
                            Supercharge Your Development{' '}
                            <span className="text-highlight">Axiom</span>
                        </Balancer>
                    </h1>
                    <p className="mt-6 max-w-2xl text-center text-lg text-foreground/80">
                        <Balancer>
                            The cutting-edge boilerplate for building scalable, type-safe web
                            applications with speed and ease
                        </Balancer>
                    </p>
                    <Link
                        href="https://github.com/pyyupsk/axiom"
                        target="_blank"
                        className={buttonVariants({
                            size: 'lg',
                            rounded: 'full',
                            className: 'mt-6',
                        })}
                    >
                        Get Started
                        <ArrowRightIcon className="ml-2 size-4" />
                    </Link>
                    <Snippet
                        command="git clone https://github.com/pyyupsk/axiom.git"
                        className="mt-4 hidden border-none bg-transparent md:flex"
                    />
                </Container>
            </section>
            <section className="bg-gradient-to-b from-transparent to-primary/10 py-24">
                <Container className="container flex flex-col items-center sm:items-start">
                    <h2 className="max-w-2xl text-center sm:text-left">
                        <Balancer>Why Choose Axiom?</Balancer>
                    </h2>
                    <p className="mt-6 text-center text-muted-foreground sm:text-left">
                        Discover the key features that make Axiom the perfect starting point for
                        your next web development project
                    </p>
                    <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
                        <Terminal commands={commands} className="min-h-96" />
                        <div className="grid grid-cols-1 divide-y">
                            {features.map(({ title, icon: Icon, description }, index) => (
                                <Container
                                    key={title}
                                    delay={index * 0.1}
                                    className="flex items-start space-x-4 py-6"
                                >
                                    <div className="flex items-center justify-center rounded-md bg-primary/5 p-4">
                                        <Icon className="size-8" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {description}
                                        </p>
                                    </div>
                                </Container>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
            <section className="bg-primary/10 py-24">
                <Container className="container flex flex-col items-center justify-center">
                    <h2 className="max-w-2xl text-center">
                        <Balancer>Axiom’s Power-Packed Stack</Balancer>
                    </h2>
                    <p className="mt-2 max-w-2xl text-center text-muted-foreground">
                        <Balancer>
                            Seamlessly Integrated Tools for Efficient, Scalable Development
                        </Balancer>
                    </p>
                </Container>
                <div className="container mt-8 grid grid-cols-1 divide-y divide-primary/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                    {techStack.map(({ title, description, logos }, index) => (
                        <Container
                            key={title}
                            delay={index * 0.1}
                            className="flex flex-col items-center py-6 lg:px-6"
                        >
                            <div className="flex space-x-4">
                                {logos.map(({ src, alt }) => (
                                    <Image
                                        key={alt}
                                        src={src}
                                        alt={alt}
                                        width={64}
                                        height={64}
                                        className="size-16"
                                    />
                                ))}
                            </div>
                            <h3 className="mt-10 text-center text-2xl font-semibold leading-none tracking-tight">
                                <Balancer>{title}</Balancer>
                            </h3>
                            <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
                                <Balancer>{description}</Balancer>
                            </p>
                        </Container>
                    ))}
                </div>
            </section>
            <section className="bg-gradient-to-b from-primary/10 to-transparent py-40">
                <Container className="container flex flex-col items-center justify-center">
                    <h2 className="max-w-3xl text-center text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
                        <Balancer>
                            Start Your Next Project with{' '}
                            <span className="text-highlight">Axiom</span> Today!
                        </Balancer>
                    </h2>
                    <p className="mt-2 max-w-2xl text-center text-lg text-muted-foreground">
                        <Balancer>
                            Get the speed, scalability, and flexibility you need to build modern web
                            applications. Join the community of developers who are leveraging Axiom
                            to create high-performance, type-safe apps effortlessly.
                        </Balancer>
                    </p>
                    <Link
                        href="https://github.com/pyyupsk/axiom"
                        target="_blank"
                        className={buttonVariants({
                            size: 'lg',
                            className: 'mt-6',
                        })}
                    >
                        Get Started
                        <ArrowRightIcon className="ml-2 size-4" />
                    </Link>
                </Container>
            </section>
        </>
    );
}
