import { Hero } from "widgets/hero";
import Breadcrumbs from "shared/ui/breadcrumb";
import { TextContent } from "shared/ui/text-content";
import { PageNav } from "shared/ui/page-nav/ui/page-nav";
import { LINKS } from "widgets/navigation";
import { Figure } from "shared/ui/figure";
import { Bullet } from "widgets/advantages-bullet/ui/bullet";

import { METHODS } from "../model";
import { TMethod } from "../types";

export default async function Page({ params }: { params: Promise<{ method: TMethod }> }) {
    const { method } = await params;

    const data = METHODS[method];
    return (
        <>
            <Hero title={data.hero.h1} bg={"hvof"} />

            <main className={"sm:px-15"}>
                <Breadcrumbs />
                <div className={"grid grid-cols-3 my-10"}>
                    <TextContent className={"sm:col-span-2 col-span-3"} title={data.hero.h2}>
                        {data.hero.description}
                    </TextContent>
                    <PageNav link={LINKS.filter((item) => item.path === "/methods")[0]} />
                </div>
                {data.sections.map((section, index) => (
                    <Figure
                        key={index}
                        item={{
                            image: section.image,
                            title: section.title,
                            texts: section.texts,
                        }}
                        variant={"types"}
                        reversed={!index}
                    />
                ))}

                <Bullet
                    title={data.bulletSection.title}
                    description={data.bulletSection.description}
                    bullets={data.bulletSection.bullets}
                />
            </main>
        </>
    );
}
