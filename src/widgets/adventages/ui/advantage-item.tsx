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
        <li className={`grid grid-cols-2  items-center`}>
            <div className={clsx(reversed ? "order-2" : "order-1", "py-10 pl-12 pr-20")}>
                <h2 className={"header-2 mb-8"}>{title}</h2>
                <div className={"flex flex-col gap-4"}>
                    {texts.map((text, index) => (
                        <p key={index} className={"regular-text"}>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
            <div className={reversed ? "order-1" : "order-2"}>
                <Image
                    src={image}
                    alt="Пример"
                    width={724}
                    height={554}
                    className="w-full h-auto"
                />
            </div>
        </li>
    );
};
