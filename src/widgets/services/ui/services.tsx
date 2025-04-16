import React from "react";
import { CARDS } from "widgets/services";
import { ServiceCard } from "widgets/services/ui/serviceCard";
import { MotionBg } from "widgets/services/ui/motion-bg";

export const Services = () => {
    return (
        <>
            <section className={"flex items-center flex-col relative z-3"}>
                <h2 className={"header-2 my-20"}>Наши услуги</h2>
                <ul className={"flex  items-center gap-4"}>
                    {CARDS.map((item) => (
                        <ServiceCard key={item.title} item={item}></ServiceCard>
                    ))}
                </ul>
                <MotionBg />
            </section>
        </>
    );
};
