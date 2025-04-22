import Breadcrumbs from "shared/ui/breadcrumb";
import { Hero } from "widgets/hero";

export default async function Page() {
    return (
        <>
            <Hero title={"High Velocity Oxygen Fuel (HVOF) Coating"} bg={"hvof"}></Hero>

            <main className={"px-10"}>
                <Breadcrumbs segments={["types", "hfow"]}></Breadcrumbs>
            </main>
        </>
    );
}
