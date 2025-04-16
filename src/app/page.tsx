import { Hero } from "widgets/hero";
import { SlideIn } from "widgets/slide-in";
import { Advantages } from "widgets/adventages";
import { Services } from "widgets/services";

export default async function Home() {
    return (
        <>
            <Hero></Hero>
            <SlideIn></SlideIn>
            <Advantages></Advantages>
            <Services></Services>
        </>
    );
}
