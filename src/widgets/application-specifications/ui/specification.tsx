import React from "react";

export interface SpecificationProps {
    title: string;
    text: React.ReactNode;
}

export const Specification = (props: SpecificationProps) => {
    const { title, text } = { ...props };
    return (
        <li className={"max-w-1/2"}>
            <h4 className={"big-text font-bold"}>{title}</h4>
            <p className={"regular-text"}>{text}</p>
        </li>
    );
};
