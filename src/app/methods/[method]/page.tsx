import { Hero } from "widgets/hero";
import Breadcrumbs from "shared/ui/breadcrumb";
import { TextContent } from "shared/ui/text-content";
import { PageNav } from "shared/ui/page-nav/ui/page-nav";
import { LINKS } from "widgets/navigation";

import { Bullet } from "widgets/advantages-bullet/ui/bullet";

import { METHODS } from "../model";
import { TMethod } from "../types";
import { ApplicationContent } from "widgets/application-content";
import { Video } from "widgets/video";

export default async function Page({ params }: { params: Promise<{ method: TMethod }> }) {
    const { method } = await params;

    const data = METHODS[method];
    return (
        <>
            <Hero title={data.hero.h1} bg={"hvof"} />

            <main className={"sm:px-15 flex flex-col gap-12"}>
                <Breadcrumbs />
                <div className={"grid grid-cols-3 my-10"}>
                    <TextContent className={"sm:col-span-2 col-span-3"} title={data.hero.h2}>
                        {data.hero.description}
                    </TextContent>
                    <PageNav link={LINKS.filter((item) => item.path === "/methods")[0]} />
                </div>
                {data.sections.map((section, index) => (
                    <ApplicationContent
                        key={index}
                        image={section.image}
                        text={section.texts}
                        reversed={false}
                    />
                ))}
                {data.videoSection && <Video {...data.videoSection} />}

                <Bullet {...data.bulletSection} />
                <Bullet {...data.coverageSection}></Bullet>
            </main>
        </>
    );
}
