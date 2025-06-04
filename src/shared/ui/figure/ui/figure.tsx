import React from "react";
import Image from "next/image";

import clsx from "clsx";
import { TextContent } from "shared/ui/text-content";
import { iImageSection } from "shared/types/section";

export interface FigureProps {
    item: iImageSection;
    variant: "hero" | "types";
    reversed: boolean;
}

export const Figure = (props: FigureProps) => {
    const { item, variant, reversed } = { ...props };

    return (
        <li
            className={clsx(
                `grid  items-center grid-cols-1 gap-4`,
                " md:grid-cols-2  sm:gap-0",
                variant === "types" ? "sm:gap-40 sm:mx-[-60px]" : "sm:max-h-[623px]"
            )}
        >
            <div className={clsx(reversed ? "md:order-2" : "md:order-1", "")}>
                <TextContent title={item.title}>
                    <span className={"text-base"}>{item.texts}</span>
                </TextContent>
            </div>
            <div
                className={clsx(
                    reversed ? "md:order-1" : "md:order-2",
                    "relative w-full sm:aspect-[4/3] md:aspect-auto h-[500px]"
                )}
            >
                <Image src={item.image} alt="Пример" priority={false} fill sizes={"100"} />
            </div>
        </li>
    );
};
