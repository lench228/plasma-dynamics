import React from "react";
import { iAdventage } from "widgets/adventages";
import Image from "next/image";
import clsx from "clsx";

interface AdvantagesItemProps {
    item: iAdventage;
    reversed: boolean;
}

export const AdvantageItem = ({ item, reversed }: AdvantagesItemProps) => {
    const { title, texts, image } = item;

    return (
        <li className={`grid grid-cols-1 md:grid-cols-2 items-center max-h-[623px]`}>
            <div
                className={clsx(
                    reversed ? "md:order-2" : "md:order-1",
                    "py-6 md:py-10 px-4 sm:px-6 md:pl-12 md:pr-20"
                )}
            >
                <h2 className={"header-2 mb-6 md:mb-8"}>{title}</h2>
                <div className={"flex flex-col gap-3 md:gap-4"}>
                    {texts.map((text, index) => (
                        <p key={index} className={"text-base sm:text-lg"}>
                            {text}
                        </p>
                    ))}
                </div>
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
