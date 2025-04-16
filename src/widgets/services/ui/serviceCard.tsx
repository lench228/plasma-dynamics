import React from "react";
import { iCard } from "widgets/services/model/data";
import Image from "next/image";
import { Button } from "shared/ui";

interface ServicesProps {
    item: iCard;
}

export const ServiceCard = (props: ServicesProps) => {
    const { image, title, description } = { ...props.item };
    return (
        <li className={"w-[300px] h-[566px] flex flex-col bg-white pb-5"}>
            <Image src={image} width={300} height={222} alt={"Пример"} />
            <main className={"p-6"}>
                <h4 className={"big-text !leading-[24px] text-accent mb-4"}>{title}</h4>
                <p className={"small-text"}>{description}</p>
            </main>
            <Button className={"mt-auto mx-5"} variant={"dark"}>
                Узнать больше
            </Button>
        </li>
    );
};
