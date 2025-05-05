import { Hero } from "widgets/hero";
import Breadcrumbs from "shared/ui/breadcrumb";
import { TextContent } from "shared/ui/text-content";
import { PageNav } from "shared/ui/page-nav/ui/page-nav";
import { LINKS } from "widgets/navigation";
import { Figure } from "shared/ui/figure";
import { Bullet } from "widgets/advantages-bullet/ui/bullet";

import { COVERAGES } from "../model";

export default async function Page({ params }: { params: { coverage: "wear-resistant" } }) {
    const [param] = await Promise.all([params]);

    const data = COVERAGES[param.coverage];
    return (
        <>
            <Hero title={data.hero.h1} bg={"wear-resistant"} />

            <main className={"px-15 flex flex-col gap-12"}>
                <Breadcrumbs />
                <div className={"grid grid-cols-3 my-10"}>
                    <TextContent title={data.hero.h1} className={"col-span-2"}>
                        {data.hero.texts}
                    </TextContent>
                    <PageNav link={LINKS.filter((item) => item.path === "/coverages")[0]} />
                </div>
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
            </main>
        </>
    );
}
