import dynamic from "next/dynamic";

const Hero = dynamic(() => import("widgets/hero"));
const SlideIn = dynamic(() => import("widgets/slide-in"));
const Advantages = dynamic(() => import("widgets/adventages"));
const Services = dynamic(() => import("widgets/services"));

export default async function Home() {
    return (
        <main className={""}>
            <Hero
                title={"Надежные покрытия - сегодня"}
                description={
                    "Наша компания предоставляет услуги по нанесению защитных покрытий на поверхности деталей машин для производственных предприятий Урала. Мы гарантируем высокое качество работы и соблюдение всех необходимых стандартов и нормативов."
                }
                bg={"hero"}
            ></Hero>

            <SlideIn></SlideIn>
            <Advantages></Advantages>
            <Services></Services>
        </main>
    );
}
