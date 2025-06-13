import dynamic from "next/dynamic";

const Hero = dynamic(() => import("widgets/hero"));
import Breadcrumbs from "shared/ui/breadcrumb";
import { TextContent } from "shared/ui/text-content";
import { PageNav } from "shared/ui/page-nav/ui/page-nav";

// В LINKS роуты для навигации, при добавлении страницы, нужно добавить туда link
import { LINKS } from "widgets/navigation";
import { Figure } from "shared/ui/figure";
import { Bullet } from "widgets/advantages-bullet/ui/bullet";

import { COVERAGES } from "../model";
import { TCoverage } from "../types";

export default async function Page({ params }: { params: Promise<{ coverage: TCoverage }> }) {
    // params- последний сегмент из slug url, дает возможность понять на какой мы подстранице
    const { coverage } = await params;

    // Выбираем данные нужной страницы для заполнения из константы
    const data = COVERAGES[coverage];
    return (
        <>
            <Hero title={data.hero.h1} bg={"wear-resistant"} />

            <main className={"sm:px-15 flex flex-col gap-12"}>
                <Breadcrumbs />
                <div className={"sm:grid sm:grid-cols-4 my-10"}>
                    <div className={"sm:col-span-3 flex flex-col gap-8 px-20"}>
                        <TextContent title={data.hero.h1} className={""}>
                            {data.hero.texts}
                        </TextContent>
                        <Bullet
                            title={data.bulletSection.title}
                            description={data.bulletSection.description}
                            bullets={data.bulletSection.bullets}
                        />
                        <TextContent {...data.promoText} />

                        {data.figures.map((figure, index) => (
                            <Figure key={index} {...figure} variant={"types"} />
                        ))}
                        <TextContent {...data.footerText} />
                    </div>

                    <PageNav link={LINKS.filter((item) => item.path === "/coverages")[0]} />
                </div>
            </main>
        </>
    );
}
