import React from "react";
import { Button } from "shared/ui";
import clsx from "clsx";

export interface HeroProps {
    title: string;
    description?: string;
    bg: string;
}
export const Hero = (props: HeroProps) => {
    const { title, description, bg } = props;

    return (
        <section
            className={clsx(
                `w-full text-white pl-20 pr-80 `,
                "bg-" + bg,
                bg === "hero" ? "min-h-[80vh] pt-63" : "min-h-[20vh] pt-20"
            )}
        >
            <div className={`bg-main/50 p-10 flex flex-col gap-10`}>
                <h1 className="header-1 ">{title}</h1>
                <p className={"big-text !font-normal"}>{description}</p>
                <Button variant={"white"}>Оставить заявку</Button>
            </div>
        </section>
    );
};
