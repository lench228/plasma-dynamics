import { Hero } from "widgets/hero";
import Breadcrumbs from "shared/ui/breadcrumb";

import { PageNav } from "shared/ui/page-nav/ui/page-nav";

// В LINKS роуты для навигации, при добавлении страницы, нужно добавить туда link
import { LINKS } from "widgets/navigation";

import { Bullet } from "widgets/advantages-bullet/ui/bullet";

import { APPLICATIONS } from "../model";
import { TApplication } from "../types";
import { ApplicationContent } from "widgets/application-content";
import { ApplicationSpecifications } from "widgets/application-specifications/ui/application-specifications";

export default async function Page({ params }: { params: Promise<{ application: TApplication }> }) {
    // params- последний сегмент из slug url, дает возможность понять на какой мы подстранице
    const { application } = await params;

    // Выбираем данные нужной страницы для заполнения из константы
    const data = APPLICATIONS[application];
    return (
        <>
            <Hero title={data.hero.h1} bg={application} />

            <main className={"sm:px-15 flex flex-col gap-12"}>
                <Breadcrumbs />
                <div className={"sm:grid sm:grid-cols-3 my-10"}>
                    <PageNav link={LINKS.filter((item) => item.path === "/applications")[0]} />
                    <div className={"col-span-2 flex flex-col gap-12"}>
                        <ApplicationContent {...data.applicationContent} />
                        {data.bulletSections.map((item) => (
                            <Bullet {...item} key={item.title} isUnderline={true} />
                        ))}

                        {data.specifications && (
                            <ApplicationSpecifications {...data.specifications} />
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
