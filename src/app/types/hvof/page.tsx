import { Hero } from "widgets/hero";
import Breadcrumbs from "shared/ui/breadcrumb";
import { TextContent } from "widgets/text-content";
import { TypesNav } from "widgets/types-nav/ui/types-nav";
import { LINKS } from "widgets/navigation";

export default async function Page() {
    return (
        <>
            <Hero title={"High Velocity Oxygen Fuel (HVOF) Coating"} bg={"hvof"} />

            <main className={"px-15 "}>
                <Breadcrumbs />
                <div className={"grid grid-cols-3 my-10"}>
                    <TextContent
                        className={"col-span-2"}
                        title={"Система высокоскоростного распыленя кислородного топлива (HVOF)"}
                    >
                        HVOF - это высокоскоростной процесс термического напыления, который
                        позволяет получать покрытия с превосходной адгезией и износостойкостью. Он
                        часто используется для нанесения покрытий на детали в аэрокосмической и
                        нефтяной промышленности. В процессе горения используются специально
                        разработанные сопла, которые разгоняют выхлопные газы до сверхзвуковых
                        скоростей, подобно двигателю военного истребителя в режиме форсажа.
                        Порошкообразный материал для покрытия впрыскивается в высокоскоростной поток
                        газа и ускоряется по направлению к поверхности мишени.Покрытие наносится с
                        высокой энергией и обладает исключительной плотностью и прочностью
                        сцепления.
                    </TextContent>
                    <TypesNav link={LINKS.filter((item) => item.path === "/types")[0]} />
                </div>
            </main>
        </>
    );
}
