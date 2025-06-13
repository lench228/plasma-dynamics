import { Hero } from "widgets/hero";
import { SlideIn } from "widgets/slide-in";
import { Advantages } from "widgets/adventages";
import { Services } from "widgets/services";
import { Suspense } from "react";

export default async function Home() {
    return (
        <main className={""}>
            <Suspense fallback={"Загрузка"}>
                <Hero
                    title={"Услуги покрытия термическим напылением"}
                    description={
                        "Высококачественные и гибкие услуги по нанесению покрытий термическим напылением"
                    }
                    bg={"hero"}
                ></Hero>
            </Suspense>

            <SlideIn></SlideIn>
            <Advantages></Advantages>
            <Services></Services>
        </main>
    );
}
