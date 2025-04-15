import { Hero } from "widgets/hero";
import { SlideIn } from "widgets/slide-in";
import { Advantages } from "widgets/adventages";

export default async function Home() {
    return (
        <>
            <Hero></Hero>
            <SlideIn></SlideIn>
            <Advantages></Advantages>
        </>
    );
}
