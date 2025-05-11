import React from "react";
import { CARDS } from "widgets/services";
import { ServiceCard } from "widgets/services/ui/serviceCard";
import { MotionBg } from "widgets/services/ui/motion-bg";

export const Services = () => {
    return (
        <>
            <section className={"flex items-center flex-col sm:relative sm:z-3 "}>
                <h2 className={"header-2 my-20"}>Наши услуги</h2>
                <ul
                    className={
                        "w-full sm:justify-center flex sm:flex-row flex-col items-center gap-4 xl:bg-transparent bg-main sm:bg-transparent"
                    }
                >
                    {CARDS.map((item) => (
                        <ServiceCard key={item.title} item={item}></ServiceCard>
                    ))}
                </ul>

                <MotionBg />
            </section>
        </>
    );
};
