import React from "react";
import Image from "next/image";

import clsx from "clsx";
import { TextContent } from "widgets/text-content";

interface FigureProps {
    image: string;
    title: string;
    texts: string[];
    variant: "hero" | "types";
    reversed: boolean;
}

export const Figure = (props: FigureProps) => {
    const { image, title, texts, variant, reversed } = { ...props };

    return (
        <li
            className={clsx(
                `grid  items-center grid-cols-1 `,
                "grid-cols-1 md:grid-cols-2 ",
                variant === "types" ? "gap-40 mx-[-60px]" : "max-h-[623px]"
            )}
        >
            <div
                className={clsx(
                    reversed ? "md:order-2" : "md:order-1",
                    "py-6 md:py-10 px-4 sm:px-6 md:pl-12 md:pr-20"
                )}
            >
                <TextContent title={title}>
                    {texts.map((text, index) => (
                        <p key={index} className={"text-base sm:text-lg"}>
                            {text}
                        </p>
                    ))}
                </TextContent>
            </div>
            <div
                className={clsx(
                    reversed ? "md:order-1" : "md:order-2",
                    "relative w-full aspect-[4/3] md:aspect-auto h-[623px]"
                )}
            >
                <Image
                    src={image}
                    alt="Пример"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                />
            </div>
        </li>
    );
};
