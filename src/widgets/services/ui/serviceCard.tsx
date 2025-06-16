import React from "react";
import { iCard } from "widgets/services/model/data";
import Image from "next/image";
import Link from "next/link";

interface ServicesProps {
    item: iCard;
}

export const ServiceCard = (props: ServicesProps) => {
    const { image, title, description, href } = { ...props.item };

    return (
        <li className={"w-[300px] h-[600px] flex flex-col bg-white pb-5"}>
            <Image src={image} width={300} height={222} alt={"Пример"} />
            <main className={"px-6"}>
                <h4 className={"big-text !leading-[24px] text-accent mb-4 my-6 font-extrabold"}>
                    {title}
                </h4>
                <p className={"small-text"}>{description}</p>
            </main>
            <Link className={"mt-auto mx-5 hover:text-accent transition-colors"} href={href}>
                Узнать больше {"->"}
            </Link>
        </li>
    );
};
