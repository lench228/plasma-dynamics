import React from "react";
import Image from "next/image";
import clsx from "clsx";

export interface ApplicationContentProps {
    image: string;
    text: React.ReactNode;
    reversed?: boolean;
}

export const ApplicationContent = (props: ApplicationContentProps) => {
    const { image, text, reversed } = { ...props };
    return (
        <div className={clsx(reversed && "flex-col-reverse", "flex flex-col")}>
            <Image src={image} width={1000} height={600} alt={"Демонстрация"} />
            <p className={"regular-text py-4"}>{text}</p>
        </div>
    );
};
