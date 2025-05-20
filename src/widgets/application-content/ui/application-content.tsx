import React from "react";
import Image from "next/image";

export interface ApplicationContentProps {
    image: string;
    text: React.ReactNode;
}

export const ApplicationContent = (props: ApplicationContentProps) => {
    const { image, text } = { ...props };
    return (
        <div>
            <p className={"regular-text py-4"}>{text}</p>
            <Image src={image} width={1000} height={600} alt={"Демонстрация"} />
        </div>
    );
};
