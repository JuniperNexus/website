import { BorderBeam } from '@/components/ui/border-beam';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { commonMetaData } from '@/lib/meta';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollingMembers } from './_components/scrolling-members';

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
            <section className="relative -mt-20">
                <Image
                    alt="Hero Image"
                    src="https://lienquan.garena.vn/wp-content/uploads/2024/05/0c026845cdd6414fbd6c1bcb9fc70628660396d3c7f931.jpg"
                    quality={100}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
                <Container className="container relative">
                    <div className="flex min-h-screen flex-col items-center justify-center">
                        <h1 className="text-center text-5xl font-extrabold lg:text-6xl">
                            ยินดีต้อนรับสู่ Juniper Nexus
                        </h1>
                        <p className="mt-4 text-center text-xl font-medium text-muted-foreground lg:text-2xl">
                            ชุมชนที่มีชีวิตชีวาสำหรับผู้เล่น Garena RoV (Realm of Valor)
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <Link
                                href="/discord"
                                className={buttonVariants({ variant: 'default', size: 'lg' })}
                            >
                                เข้าร่วมกับเรา
                            </Link>
                            {/* <Link
                                href="/about-us"
                                className={buttonVariants({ variant: 'black', size: 'lg' })}
                            >
                                อ่านเพิ่มเติม
                            </Link> */}
                        </div>
                    </div>
                </Container>
            </section>
            <ScrollingMembers />
            <section className="py-24">
                <Container className="container max-w-4xl">
                    <h2 className="text-center text-3xl">ภาพรวมของ Juniper Nexus</h2>
                    <div className="mt-8 rounded-lg p-2 ring-1 ring-inset ring-border backdrop-blur-3xl">
                        <div className="grid grid-cols-1 gap-6 rounded-lg bg-card p-6">
                            <p className="text-lg text-muted-foreground">
                                <strong>Juniper Nexus</strong> คือกิลด์ที่รวมเหล่านักสู้ชั้นนำใน
                                Garena RoV ด้วยเป้าหมายในการเป็นหนึ่งในกิลด์ที่ดีที่สุดในประเทศไทย
                                เรามุ่งมั่นที่จะพาสมาชิกทุกคนไปสู่ความสำเร็จสูงสุดในเกมและในวงการอีสปอร์ต
                            </p>
                            <p className="text-lg text-muted-foreground">
                                กิลด์ของเรามีสมาชิกมากกว่า 100 คน และด้วยความพยายามและความสามารถ
                                เราได้ก้าวขึ้นมาอยู่ในอันดับที่ 50 ของประเทศ
                                ด้วยกิจกรรมประจำเดือนที่ไม่เหมือนใครและรางวัลสุดพิเศษที่รอคุณอยู่
                            </p>
                            <p className="text-lg text-muted-foreground">
                                มาร่วมเป็นส่วนหนึ่งของกิลด์ที่เต็มไปด้วยความท้าทายและมิตรภาพใน{' '}
                                <strong>Juniper Nexus</strong>!
                            </p>
                        </div>

                        <BorderBeam
                            size={250}
                            duration={12}
                            delay={9}
                            colorFrom="hsl(5, 85%, 54%)"
                            colorTo="hsl(33, 85%, 54%)"
                        />
                    </div>
                </Container>
            </section>
            <section className="py-24">
                <Container className="container flex flex-col items-center">
                    <h3 className="text-center text-3xl">เข้าร่วมกับเรา!</h3>
                    <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground">
                        หากคุณต้องการเข้าร่วมกิลด์ที่มีความมุ่งมั่นและเป็นเลิศในวงการ Garena RoV
                        มาร่วมเป็นส่วนหนึ่งของJuniper Nexus!
                    </p>
                    <a
                        href="/discord"
                        className={buttonVariants({
                            variant: 'default',
                            size: 'lg',
                            className: 'mt-8',
                        })}
                    >
                        สมัครสมาชิกตอนนี้
                    </a>
                </Container>
            </section>
        </>
    );
}
