import dynamic from "next/dynamic";

const Hero = dynamic(() => import("widgets/hero"));
const SlideIn = dynamic(() => import("widgets/slide-in"));
const Advantages = dynamic(() => import("widgets/adventages"));
const Services = dynamic(() => import("widgets/services"));

export default async function Home() {
    return (
        <main className={""}>
            <Hero
                title={"Услуги покрытия термическим напылением"}
                description={
                    "Высококачественные и гибкие услуги по нанесению покрытий термическим напылением"
                }
                bg={"hero"}
            ></Hero>

            <SlideIn></SlideIn>
            <Advantages></Advantages>
            <Services></Services>
        </main>
    );
}
